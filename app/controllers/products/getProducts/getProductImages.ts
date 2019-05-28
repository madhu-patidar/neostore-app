import ProductImagesModel from '../../../models/products/productImages'
import {Request,Response} from 'express'


//Add Product Category
const getProductImages=(req:Request,res:Response)=>{

    ProductImagesModel.find({})
    .then(result=>{
        res.status(200).json({success:true,message:"All Product Images",product_images:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    }) 

}

//Available for ProductRoutes
export default getProductImages;