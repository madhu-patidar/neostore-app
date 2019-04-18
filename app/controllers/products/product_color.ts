import ProductColorModel from '../../models/products/product_color'
import {Request,Response} from 'express'

//Add Product Color
const productColor = (req:Request,res:Response)=>{
    let newColor=new ProductColorModel(req.body)
    newColor.save()
    .then(result=>{
        res.status(200).json({success:"true",message:"Data was inserted successfully",data:result})
    })
    .catch(err=>{
        res.status(404).json({success:"false",message:"Something went wrong",error_message:err.errmsg})
    })
}

//Available for Routes
export default productColor;