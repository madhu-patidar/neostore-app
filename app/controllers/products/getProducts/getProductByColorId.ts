import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Get Products By its color
const getProductsByColor=(req:Request,res:Response)=>{
let color_id:number = req.params.color_id

ProductListModel.find({color_id:color_id})
.populate('_id')
.populate('category_id')
.populate('color_id')
.exec((err,product)=>{     
    if(err)
    res.status(404).json({success:false,error_message:err})
    else
    res.status(200).json({success:product.length!==0?true:false,message:product.length!==0?"Product by color":"No Product is available",product_details:product.length!==0?product:"No details are available"})  
})
}

//Available for ProductRoutes
export default getProductsByColor;