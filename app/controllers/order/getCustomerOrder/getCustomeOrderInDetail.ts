import OrderModel from "../../../models/order/orderModel";
import { Request, Response } from "express";

const getCustomerOrderInDetail=(req:Request,res:Response)=>{
    let order_id = req.params.order_id
    let customer_id=parseInt(req.body.id)
   
    OrderModel.find({customer_id:customer_id,order_id:order_id})
    .populate('product_id')
    .then(result=>{
        if(result.length!==0){
            res.status(200).json({success:true,message:"Your Order Details",order_details:result})
        }
        else{
            res.status(200).json({success:true,message:"Data not found"})
        }
    })
    .catch(err => {
        res.status(404).json({ success: false, message: "Something went wrong", error_message:err });
      });
}

export default getCustomerOrderInDetail