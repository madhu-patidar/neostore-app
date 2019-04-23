import {Request,Response} from 'express'
import ProdCategoryModel from '../../../models/products/product_category'

//Delete category by id
const deleteCategoryById=(req:Request,res:Response)=>{
  
    const categ_id:number=parseInt(req.body.categ_id)

    ProdCategoryModel.findByIdAndRemove({_id:categ_id})
    .then(result=>{
        res.status(200).json({success:result!==null?"true":"false",message:result!==null?"Category Deleted":"No data is available", category_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })
}

//Available for ProductRoutes
export default deleteCategoryById