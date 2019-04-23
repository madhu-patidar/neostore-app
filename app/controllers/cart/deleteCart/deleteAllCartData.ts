import {Request,Response} from 'express'
import CartModel from '../../../models/cart/cartModel'

//Delete All Cart Products
const deleteAllCartData=(req:Request,res:Response)=>{
  
    CartModel.remove({})
    .then(result=>{
        res.status(200).json({success:result!==null?"true":"false",message:result!==null?"Cart Data Deleted":"No data is available", cart_data:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })
}

//Available for ProductRoutes
export default deleteAllCartData