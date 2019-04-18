import ProdCategoryModel from '../../models/products/product_category'
import {Request,Response} from 'express'

//Add Product Category
const productCategory=(req:Request,res:Response)=>{
    let newCategory=new ProdCategoryModel(req.body)
    newCategory.save()
    .then(result=>{
        res.status(200).json({success:"true",message:"Data was inserted successfully",data:result})
    })
    .catch(err=>{
        res.status(404).json({success:"false",message:"Something went wrong",error_message:err.errmsg})
    })

}

//Available for Routes
export default productCategory;