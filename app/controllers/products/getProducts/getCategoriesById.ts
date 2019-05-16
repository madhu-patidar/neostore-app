import {Request,Response} from 'express'
import ProdCategoryModel from '../../../models/products/product_category'

//Get Products By its Id
const getCategoriesByCategId=(req:Request,res:Response)=>{
let category_id:number = parseInt(req.params.category_id)

ProdCategoryModel.find({_id:category_id})
.then(result=>{
    res.status(200).json({success:true,message:"Category Fetched",category_details:result})
})
.catch(err=>{
    res.status(404).json({success:false,message:"Something went wrong",error_message:err})
})

}

//Available for ProductRoutes
export default getCategoriesByCategId;