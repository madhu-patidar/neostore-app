import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Update Products by id
const updateProductsById=(req:Request,res:Response)=>{
  const product_id=parseInt(req.params.product_id)

  if(product_id==undefined){
      res.status(404).json({success:false,message:"Please Provide Product Id"})
  }
  else{
    
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(404).json({success:false,message:"No Data found to update"})
      }
      else{
        ProductListModel.find({_id:product_id},(err,result)=>{
            if(err)
            res.status(404).json({success:false,error_message:err})
            else if(result.length!==0){
              if(req.body.product_name){
                  ProductListModel.findByIdAndUpdate(product_id,{product_name:req.body.product_name},(err,result)=>{
                    if(err)
                    res.status(404).json({success:false,error_message:err})
                })            
              }     
               if(req.body.category_id){
                ProductListModel.findByIdAndUpdate(product_id,{category_id:req.body.category_id},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })               
              }
              if(req.body.color_id){
                ProductListModel.findByIdAndUpdate(product_id,{color_id:req.body.color_id},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }         
              if(req.body.product_desc){
                ProductListModel.findByIdAndUpdate(product_id,{product_desc:req.body.product_desc},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              try{
                if(req.file.filename){
                  ProductListModel.findByIdAndUpdate(product_id,{product_image:req.file.filename},(err,result)=>{
                    if(err)
                    res.status(404).json({success:false,error_message:err})
                })
                }
              }
              catch(err){
              
              }

              if(req.body.product_rating){
                ProductListModel.findByIdAndUpdate(product_id,{product_rating:req.body.product_rating},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.product_producer){
                ProductListModel.findByIdAndUpdate(product_id,{product_producer:req.body.product_producer},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.product_cost){
                ProductListModel.findByIdAndUpdate(product_id,{product_cost:req.body.product_cost},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.product_stock){
                ProductListModel.findByIdAndUpdate(product_id,{product_stock:req.body.product_stock},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }
              if(req.body.product_dimension){
                ProductListModel.findByIdAndUpdate(product_id,{product_dimension:req.body.product_dimension},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }
              if(req.body.product_material){
                ProductListModel.findByIdAndUpdate(product_id,{product_material:req.body.product_material},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }
              
              res.status(200).json({success:true,message:"Product Updated"})
            }
            else{
                res.status(404).json({success:false,message:"Please enter correct Product id"})
            }
  
        })
      } 

  }
  
   
}

//Available for ProductRoutes
export default updateProductsById