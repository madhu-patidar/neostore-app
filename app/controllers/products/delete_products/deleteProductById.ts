import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Delete Product by its Product id
const deleteProductByProdId=(req:Request,res:Response)=>{
    const prod_id:number=req.params.prod_id

    ProductListModel.findByIdAndRemove({_id:prod_id})
    .then(result=>{
        res.status(200).json({success:result!==null?"true":"false",message:result!==null?"Product Deleted":"No data is available", product_details:result!==null?result:"No details are available"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })
}

//Available for ProductRoutes
export default deleteProductByProdId