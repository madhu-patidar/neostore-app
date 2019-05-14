import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Update Products by id
const updateProductsById=(req:Request,res:Response)=>{
  const prod_id=parseInt(req.params.prod_id)

  if(prod_id==undefined){
      res.status(404).json({success:false,message:"Please Provide Product Id"})
  }
  else{
    
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(404).json({success:false,message:"No Data found to update"})
      }
      else{
        ProductListModel.find({_id:prod_id},(err,result)=>{
            if(err)
            res.status(404).json({success:false,error_message:err})
            else if(result.length!==0){
              if(req.body.prod_name){
                  ProductListModel.findByIdAndUpdate(prod_id,{prod_name:req.body.prod_name},(err,result)=>{
                    if(err)
                    res.status(404).json({success:false,error_message:err})
                })            
              }     
               if(req.body.categ_id){
                ProductListModel.findByIdAndUpdate(prod_id,{categ_id:req.body.categ_id},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })               
              }
              if(req.body.color_id){
                ProductListModel.findByIdAndUpdate(prod_id,{color_id:req.body.color_id},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }         
              if(req.body.prod_desc){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_desc:req.body.prod_desc},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              try{
                if(req.file.filename){
                  ProductListModel.findByIdAndUpdate(prod_id,{prod_image:req.file.filename},(err,result)=>{
                    if(err)
                    res.status(404).json({success:false,error_message:err})
                })
                }
              }
              catch(err){
              
              }

              if(req.body.prod_rating){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_rating:req.body.prod_rating},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.prod_producer){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_producer:req.body.prod_producer},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.prod_cost){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_cost:req.body.prod_cost},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
              if(req.body.prod_stock){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_stock:req.body.prod_stock},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }
              if(req.body.prod_dimension){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_dimension:req.body.prod_dimension},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              }
              if(req.body.prod_material){
                ProductListModel.findByIdAndUpdate(prod_id,{prod_material:req.body.prod_material},(err,result)=>{
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