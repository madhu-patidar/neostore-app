import ProdCategoryModel from '../../../models/products/product_category'
import {Request,Response} from 'express'

const getAllCategory = (req:Request,res:Response)=>{

    ProdCategoryModel.find({})
    .then(result=>{
        res.status(200).json({success:"true",message:"All Categories",category_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:"false",message:"Something went wrong",error_message:err})
    })

}

export default getAllCategory