import ProductImagesModel from '../../../models/products/productImages'
import {Request,Response} from 'express'

//Add Product Category
const postProductImages=(req:Request,res:Response)=>{
    let newCategory=new ProductImagesModel({
        _id:req.body._id,
        category_name:req.body.category_name,
        product_image:req.file.filename
    })
    newCategory.save()
    .then(result=>{
        res.status(200).json({success:true,message:"Data was inserted successfully",product_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })

}

//Available for ProductRoutes
export default postProductImages;