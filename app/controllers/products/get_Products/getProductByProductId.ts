import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Get Products By its Id
const getProductsByProductId=(req:Request,res:Response)=>{
let prod_id:number = req.params.prod_id

ProductListModel.find({_id:prod_id})
.then(result=>{
    res.status(200).json({success:"true",message:"Product Fetched",product_details:result})
})
.catch(err=>{
    res.status(404).json({success:"false",message:"Something went wrong",error_message:err})
})

}

//Available for ProductRoutes
export default getProductsByProductId;