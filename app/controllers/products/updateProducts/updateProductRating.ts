import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

//Update Products by id
const updateProductRating=(req:Request,res:Response)=>{
  const product_id=parseInt(req.body.product_id)
 

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
              if(req.body.product_rating){
                ProductListModel.findByIdAndUpdate(product_id,{product_rating:req.body.product_rating},(err,result)=>{
                  if(err)
                  res.status(404).json({success:false,error_message:err})
              })
              } 
      
              res.status(200).json({success:true,message:"Product Rating Updated"})
            }
            else{
                res.status(404).json({success:false,message:"Please enter correct Product id"})
            }
  
        })
      } 

  }
  
   
}

//Available for ProductRoutes
export default updateProductRating