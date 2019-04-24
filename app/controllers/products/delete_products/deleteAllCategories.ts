import {Request,Response} from 'express'
import ProdCategoryModel from '../../../models/products/product_category'

//Delete All Products
const deleteAllCategories=(req:Request,res:Response)=>{
  
    ProdCategoryModel.deleteMany({})
    .then(result=>{
        res.status(200).json({success:result!==null?"true":"false",message:result!==null?"Categories Deleted":"No data is available", category_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })
}

//Available for ProductRoutes
export default deleteAllCategories