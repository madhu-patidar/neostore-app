import {Request,Response} from 'express'
import ProductColorModel from '../../../models/products/product_color'

//Delete All Products
const deleteAllColors=(req:Request,res:Response)=>{
  
    ProductColorModel.deleteMany({})
    .then(result=>{
        res.status(200).json({success:result!==null?"true":"false",message:result!==null?"Categories Deleted":"No data is available", category_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })
}

//Available for ProductRoutes
export default deleteAllColors