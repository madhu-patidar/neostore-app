import client from '../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Joi from 'joi'

//Update Customer Profile
const updateProfile=(req:Request,res:Response)=>{
    const id:number=req.body.id
    const schema = Joi.object().keys({
        u_Fname:Joi.string().regex(/^[A-Za-z]+$/).required(),
        u_Lname:Joi.string().regex(/^[A-Za-z]+$/).required(),
        u_email:Joi.string().email({minDomainAtoms:2}).required(),
        u_DOB:Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/).required(),
        u_phone:Joi.string().regex(/^[0-9]+$/).min(10).max(10).required(),
        u_gender:Joi.string().required(),
   })
   Joi.validate({u_Fname:req.body.cust_Fname,u_Lname:req.body.cust_Lname,u_email:req.body.cust_email,u_DOB:req.body.cust_dob,u_phone:req.body.cust_phone,u_gender:req.body.cust_gender},schema,(err,result)=>{
        if(err){
            res.status(404).json({success:"false",error_message:err.message})

        }
        else{
            client.query('Update neo_user set cust_fname=$1,cust_lname=$2,cust_email=$3,cust_dob=$4,cust_phone=$5,cust_gender=$6,cust_image=$7 where cust_id=$8',[req.body.cust_Fname,req.body.cust_Lname,req.body.cust_email,req.body.cust_dob,req.body.cust_phone,req.body.cust_gender,req.file.filename,id])
            .then(user=>{
                if(user){
                    client.query('Select cust_id,cust_fname,cust_lname,cust_email,cust_dob,cust_phone,cust_gender,cust_image,cust_created_at from neo_user where cust_id=$1',[id],(err,result)=>{
                        if(result){
                            res.status(200).json({success:"true",message:"Updated profile",customer_details:result.rows})
                        }
                        else{
                        res.status(404).json({success:"false",erro_message:err})
                        }
                    })
                
                }
            })
            .catch(err=>{
                res.status(404).json({success:"false",message:err})
            })

        }
   })
}

//Available for Routes
export default updateProfile;