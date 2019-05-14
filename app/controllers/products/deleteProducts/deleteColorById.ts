import {Request,Response} from 'express'
import ProductColorModel from '../../../models/products/product_color'

//Delete color by id
const deleteColorById=(req:Request,res:Response)=>{
  
    const color_id:number=parseInt(req.body.color_id)

    ProductColorModel.findByIdAndRemove({_id:color_id})
    .then(result=>{
        res.status(200).json({success:result!==null?true:false,message:result!==null?"Color Deleted":"No data is available", color_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:false,error_message:err})
    })
}

//Available for ProductRoutes
export default deleteColorById