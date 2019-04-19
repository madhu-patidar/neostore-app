import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Get Products By its category
const getProductsByCategory=(req:Request,res:Response)=>{
let categ_id:number = req.params.categ_id

ProductListModel.find({categ_id:categ_id})
.populate('categ_id')
.populate('color_id')
.exec((err,product)=>{     
    if(err)
    res.status(404).json({success:"false",error_message:err})
    else
    res.status(200).json({success:product.length!==0?"true":"false",message:product.length!==0?"Product by category":"No Product is available",product_details:product.length!==0?product:"No details are available"})  
})
}

//Available for ProductRoutes
export default getProductsByCategory;