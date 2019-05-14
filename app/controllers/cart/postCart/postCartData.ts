import {Request,Response} from 'express'
import CartModel from '../../../models/cart/cartModel'

const cartData = (req:Request,res:Response)=>{
        const customer_id=parseInt(req.body.customer_id)
    if(customer_id===parseInt(req.body.id)){
    const newCart=new CartModel({
        customer_id:parseInt(req.body.id),
        product_id:req.body.product_id,
        quantity:req.body.quantity
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
    res.status(404).json({success:"false",message:"Customer id not matched"})
}

}

export default cartData