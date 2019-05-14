import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'


//Update Customer Profile
const updateAllCustomer=(req:Request,res:Response)=>{
            if(req.body.constructor === Object && Object.keys(req.body).length === 0){
                res.status(404).json({success:false,message:"No Data found to update"})
              }
              else{
                  if(req.body.first_name){
                    client.query('Update neo_user set first_name=$1 ',[req.body.first_name],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })
                  }
                  if(req.body.last_name){
                    client.query('Update neo_user set last_name=$1 ',[req.body.last_name],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  if(req.body.email){
                    client.query('Update neo_user set email=$1 ',[req.body.email],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  if(req.body.phone_no){
                    client.query('Update neo_user set phone_no=$1 ',[req.body.phone_no],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  if(req.body.gender){
                    client.query('Update neo_user set gender=$1 ',[req.body.gender],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  if(req.body.dob){
                    client.query('Update neo_user set dob=$1 ',[req.body.dob],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  try{
                  if(req.file.filename){
                    client.query('Update neo_user set profile_img=$1 ',[req.file.filename],(err,result)=>{
                        if(err)
                         res.status(404).json({success:false,error_message:err})
                    })

                  }
                  }
                  catch(err){}
            res.status(200).json({success:false,message:"All Customer were updated"})

              }  
}

//Available for Routes
export default updateAllCustomer;