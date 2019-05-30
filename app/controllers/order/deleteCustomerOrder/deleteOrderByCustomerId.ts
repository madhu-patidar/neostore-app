import OrderModel from "../../../models/order/orderModel";
import { Request, Response } from "express";

//Delete All Orders
const deleteOrderByCustomerId=(req:Request,res:Response)=>{
  let customer_id=parseInt(req.body.id)
    OrderModel.deleteMany({customer_id:customer_id})
    .then(result=>{
        if(result.n!==0)
        res.status(200).json({success:result!==null?true:false,message:result!==null?"Orders were Deleted":"No data is available", order_details:result!==null?result:"No details are available"})
        else
        res.status(404).json({success:false,message:"You did not add orders."})
    })
    .catch(err=>{
        res.status(404).json({success:false,error_message:err})
    })
}

//Available for ProductRoutes
export default deleteOrderByCustomerId