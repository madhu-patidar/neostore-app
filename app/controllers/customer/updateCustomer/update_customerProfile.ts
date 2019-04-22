import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Joi from 'joi'

//Update Customer Profile
const updateProfile=(req:Request,res:Response)=>{
    const id:number=parseInt(req.body.id)
    const id1:number=parseInt(req.body.customer_id)
    const schema = Joi.object().keys({
        u_Fname:Joi.string().regex(/^[A-Za-z]+$/).required(),
        u_Lname:Joi.string().regex(/^[A-Za-z]+$/).required(),
        u_email:Joi.string().email({minDomainAtoms:2}).required(),
        u_DOB:Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/).required(),
        u_phone:Joi.string().regex(/^[0-9]+$/).min(10).max(10).required(),
        u_gender:Joi.string().required(),
   })
   Joi.validate({u_Fname:req.body.first_name,u_Lname:req.body.last_name,u_email:req.body.email,u_DOB:req.body.dob,u_phone:req.body.phone_no,u_gender:req.body.gender},schema,(err,result)=>{
        if(err){
            res.status(404).json({success:"false",error_message:err.message})
        }
        else{
            if(id===id1){
            client.query('Update neo_user set first_name=$1,last_name=$2,email=$3,dob=$4,phone_no=$5,gender=$6,profile_img=$7 where id=$8',[req.body.first_name,req.body.last_name,req.body.email,req.body.dob,req.body.phone_no,req.body.gender,req.file.filename,id])
            .then(user=>{
                if(user){
                    client.query('Select id,first_name,last_name,email,dob,phone_no,gender,profile_img, created_at from neo_user where id=$1',[id],(err,result)=>{
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
        else{
            res.status(404).json({success:"false",message:"Customer id not matched"})

        }

        }
   })
}

//Available for Routes
export default updateProfile;