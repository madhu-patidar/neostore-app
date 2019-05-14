import ProductColorModel from '../../../models/products/product_color'
import {Request,Response} from 'express'

//Update Color by id
const updateColorById=(req:Request,res:Response)=>{
    const color_id:number=parseInt(req.body.color_id)
  
    if(color_id==undefined){
        res.status(404).json({success:false,message:"Please Provide Color Id"})
    }
    else{
      
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(404).json({success:false,message:"No Data found to update"})
        }
        else{
            ProductColorModel.find({_id:color_id},(err,result)=>{
              if(err)
              res.status(404).json({success:false,error_message:err})
              else if(result.length!==0){
                if(req.body.color_parent){
                    ProductColorModel.findByIdAndUpdate(color_id,{color_parent:req.body.color_parent},(err,result)=>{
                        if(err)
                        res.status(404).json({success:false,error_message:err})
                    })
                               
                }
                if(req.body.color_name){
                    ProductColorModel.findByIdAndUpdate(color_id,{color_name:req.body.color_name},(err,result)=>{
                        if(err)
                        res.status(404).json({success:false,error_message:err})
                    })
                               
                }
                if(req.body.color_code){
                    ProductColorModel.findByIdAndUpdate(color_id,{color_code:req.body.color_code},(err,result)=>{
                        if(err)
                        res.status(404).json({success:false,error_message:err})
                    })
                               
                }            
                res.status(200).json({success:true,message:"Color Updated"})
              }
              else{
                  res.status(404).json({success:false,message:"Please enter correct Color id"})
              }
    
          })
        }

    }     
  }
  
  //Available for ProductRoutes
  export default updateColorById