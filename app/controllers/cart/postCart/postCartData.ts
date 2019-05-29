import {Request,Response} from 'express'
import CartModel from '../../../models/cart/cartModel'
import ProductListModel from '../../../models/products/product_list'


const cartData = (req:Request,res:Response)=>{
        const customer_id=parseInt(req.body.customer_id)
        const product_id=parseInt(req.body.product_id)
        const quantity=parseInt(req.body.quantity)
    if(customer_id===parseInt(req.body.id)){
        ProductListModel.find({_id:product_id}).select('product_cost')
        .then(result=>{
            if(result.length!==0){
                
                CartModel.find({customer_id:customer_id,product_id:product_id})
                .then(cart=>{
                    if(cart.length==0){
                        const newCart=new CartModel({
                            customer_id:parseInt(req.body.id),
                            product_id:product_id,
                            quantity:quantity,
                            total_cost:result[0].product_cost*quantity
                        })
                        newCart.save()
                        .then(result=>{
                    
                            res.status(200).json({success:true,message:"Product was added to your cart",cart_details:result})
                        })
                        .catch(err=>{
                            res.status(404).json({success:false,message:"Something went wrong",error_message:err.errmsg})
                        })
                    }
                    else{
                        res.status(404).json({success:false,message:"This Product is already on your cart"})
                    }
                })
                .catch(err=>{
                    res.status(404).json({success:false,message:"Something went wrong",error_message:err.errmsg})
                })
               
            }
            else{
                res.status(404).json({success:false,message:"This Product is not available"})

            }
        })
        .catch(err=>{
            res.status(404).json({success:false,message:"Something went wrong",error_message:err.errmsg})
        })
 
}
else{
    res.status(404).json({success:"false",message:"Customer id not matched"})
}

}

export default cartData