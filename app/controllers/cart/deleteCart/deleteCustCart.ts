import {Request,Response} from 'express'
import CartModel from '../../../models/cart/cartModel'
import OrderModel from '../../../models/order/orderModel'

//Update Products by id
const deleteCartByCustId=(req:Request,res:Response)=>{
    const customer_id:number=parseInt(req.body.customer_id)
    const product_id:number=parseInt(req.body.product_id)
    
    if(customer_id==undefined){
        res.status(404).json({success:false,message:"Please Provide Category Id"})
    }
    else{
      
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(404).json({success:false,message:"No Data found to update"})
        }
        else{
          if(customer_id===parseInt(req.body.id)){
          CartModel.find({customer_id:customer_id,product_id:product_id},(err,result)=>{
              if(err)
              res.status(404).json({success:false,error_message:err})
              else if(result.length!==0){
               
                  CartModel.deleteOne({customer_id:customer_id,product_id:product_id},(err)=>{
                        if(err)
                        res.status(404).json({success:false,error_message:err})
                        else{
                          OrderModel.deleteOne({customer_id:customer_id,product_id:product_id})
                          .then(()=>{
                          })
                          res.status(200).json({success:true,message:"Product Deleted"})
                        
                        }
                      })
                               
                          
                
              }
              else{
                  res.status(404).json({success:false,message:"Please enter correct data"})
              }
    
          })
        }
        else{
          res.status(404).json({success:false,message:"Customer id not matched"})

        }
        } 
    }    
  }
  
  //Available for ProductRoutes
  export default deleteCartByCustId