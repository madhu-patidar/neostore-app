import OrderModel from "../../../models/order/orderModel";
import { Request, Response } from "express";

//Delete All Orders
const deleteAllCustomerOrders=(req:Request,res:Response)=>{
  
    OrderModel.deleteMany({})
    .then(result=>{
        res.status(200).json({success:result!==null?true:false,message:result!==null?"Orders were Deleted":"No data is available", order_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:false,error_message:err})
    })
}

//Available for ProductRoutes
export default deleteAllCustomerOrders