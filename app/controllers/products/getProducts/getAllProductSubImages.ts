import ProductSubImagesModel from '../../../models/products/product_subImages'
import {Request,Response} from 'express'

const getAllProductSubImages = (req:Request,res:Response)=>{

    ProductSubImagesModel.find({})
    .then(result=>{
        res.status(200).json({success:true,message:"All Product Sub-Images",product_subImages:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })

}

export default getAllProductSubImages