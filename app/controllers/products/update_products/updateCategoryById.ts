import {Request,Response} from 'express'
import ProdCategoryModel from '../../../models/products/product_category'

//Update Products by id
const updateCategoryById=(req:Request,res:Response)=>{
    const categ_id:number=parseInt(req.body.categ_id)
  
    if(categ_id==undefined){
        res.status(404).json({success:"false",message:"Please Provide Category Id"})
    }
    else{
      
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(404).json({success:"false",message:"No Data found to update"})
        }
        else{
            ProdCategoryModel.find({_id:categ_id},(err,result)=>{
              if(err)
              res.status(404).json({success:"false",error_message:err})
              else if(result.length!==0){
                if(req.body.category_name){
                    ProdCategoryModel.findByIdAndUpdate(categ_id,{category_name:req.body.category_name},(err,result)=>{
                        if(err)
                        res.status(404).json({success:"false",error_message:err})
                    })
                               
                }            
                res.status(200).json({success:"true",message:"Category Updated"})
              }
              else{
                  res.status(404).json({success:"false",message:"Please enter correct Category id"})
              }
    
          })
        } 
    }    
  }
  
  //Available for ProductRoutes
  export default updateCategoryById