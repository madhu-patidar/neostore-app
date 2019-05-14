import ProductColorModel from '../../../models/products/product_color'
import {Request,Response} from 'express'

const getAllColors= (req:Request,res:Response)=>{

    ProductColorModel.find({})
    .then(result=>{
        res.status(200).json({success:true,message:"All Colors",color_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })

}

export default getAllColors