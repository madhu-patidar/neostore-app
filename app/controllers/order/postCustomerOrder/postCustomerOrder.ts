import OrderModel from '../../../models/order/orderModel'
import CartModel from '../../../models/cart/cartModel'
import {Request,Response} from 'express'

const postCustomerOrder = (req:Request,res:Response)=>{
    let customer_id:number=parseInt(req.body.id)
    let status:string='In Progress'
    let isDelivered:boolean=false
    let count:any=0
    let order_id:any=0
    CartModel.find({customer_id:customer_id}).select('product_id').select('quantity').select('total_cost')
    .then((cart:any)=>{
        if(cart.length!==0){
            OrderModel.aggregate([{
                $sort:{
                    order_id:-1
                }
            }],(err:any,result:any)=>{
                if(result.length!==0){
                    let id=result[0].order_id
                    let charId=id.split('')
                    let lastid=parseInt(charId[charId.length-1])
                    let sum=lastid+1
                   order_id='OR0'+sum    
                }else {
                    order_id='OR0'.concat(count+1)
                  }

                  for(let i:number=0;i<cart.length;i++){
                      OrderModel.find({customer_id:customer_id,product_id:cart[i].product_id})
                      .then(order_data=>{
                          if(order_data.length==0){
                            let newOrder = new OrderModel({
                                order_id:order_id,
                                customer_id:customer_id,
                                product_id:cart[i].product_id,
                                quantity:cart[i].quantity,
                                status:status,
                                isDelivered:isDelivered,
                                total_cost:cart[i].total_cost
                            })
                            newOrder.save()
                            .then(result=>{
                                //res.status(200).json({success:true,message:"Your Orders were added successfully"})
                            })       
                        }
                      })
                      .catch(err=>{
                        res.status(404).json({success:false,message:'Something went wrong',error_message:err})
                      })
                  }
                res.status(200).json({success:true,message:"Your Orders were added successfully"})
             
            })    
        }
        else{
           res.status(404).json({success:false,message:'You did not add any single product on cart'})
        }
    })
    .catch(err=>{
        res.status(404).json({success:false,message:'Something went wrong',error_message:err})
    })   
}

export default postCustomerOrder