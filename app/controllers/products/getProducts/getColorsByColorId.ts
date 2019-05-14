import ProductColorModel from '../../../models/products/product_color'
import {Request,Response} from 'express'

//Get Colors By its Id
const getColorsByColorId=(req:Request,res:Response)=>{
    let color_id:number = req.params.color_id
    
    ProductColorModel.find({_id:color_id})
    .then(result=>{
        res.status(200).json({success:true,message:"Color Fetched",color_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })
    
    }
    
    //Available for ProductRoutes
    export default getColorsByColorId;