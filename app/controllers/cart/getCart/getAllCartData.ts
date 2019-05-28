import {Request,Response} from 'express'
import CartModel from '../../../models/cart/cartModel'

//Get Products By its color
const getAllCartData=(req:Request,res:Response)=>{
  
    //Fetch data first from Product collection then category and color collection
    CartModel.find()
  .populate([{ path: 'product_id', populate: { path: 'category_id'}}])
  .populate([{ path: 'product_id', populate: { path: 'color_id' }}])
  .populate([{ path: 'product_id', populate: { path: '_id' }}])
  .exec((err,product)=>{     
    if(err)
    res.status(404).json({success:false,error_message:err})
    else
    res.status(200).json({success:product.length!==0?true:false,message:product.length!==0?"Product on Cart":"No Product is available",product_details:product.length!==0?product:"No details are available"})  
})

}

//Available for ProductRoutes
export default getAllCartData;