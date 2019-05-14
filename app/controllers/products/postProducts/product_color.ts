import ProductColorModel from '../../../models/products/product_color'
import {Request,Response} from 'express'

//Add Product Color
const postProductColor = (req:Request,res:Response)=>{
    let newColor=new ProductColorModel(req.body)
    newColor.save()
    .then(result=>{
        res.status(200).json({success:true,message:"Data was inserted successfully",product_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err.errmsg})
    })
}

//Available for ProductRoutes
export default postProductColor;