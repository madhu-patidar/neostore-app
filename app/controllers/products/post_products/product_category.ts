import ProdCategoryModel from '../../../models/products/product_category'
import {Request,Response} from 'express'

//Add Product Category
const postProductCategory=(req:Request,res:Response)=>{
    let newCategory=new ProdCategoryModel({
        
    })
    newCategory.save()
    .then(result=>{
        res.status(200).json({success:"true",message:"Data was inserted successfully",product_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:"false",message:"Something went wrong",error_message:err.errmsg})
    })

}

//Available for ProductRoutes
export default postProductCategory;