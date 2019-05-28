import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'


//Get all Products
const getAllProducts=(req:Request,res:Response)=>{

  ProductListModel.find({})
  .populate('_id')
  .populate('category_id')
  .populate('color_id')
  .exec((err,product)=>{
    if(err)
    res.status(404).json({success:false,error_message:err})
    else
    res.status(200).json({success:product.length!==0?true:false,message:product.length!==0?"All Products Data":"No Data is available",product_details:product.length!==0?product:"No details are available"})
})
}

//Available for ProductRoutes
export default getAllProducts;