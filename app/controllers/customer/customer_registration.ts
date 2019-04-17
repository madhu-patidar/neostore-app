import client from '../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Joi from 'joi'
import bcrypt from 'bcryptjs'

const insertCustomerData=(req:Request,res:Response)=>{
    let pass:string=req.body.cust_pass;
    let confirm_pass:string=req.body.cust_confirmPass;
    let hash_pass:string;
    console.log(req.body)
    if(!req.body)
    res.status(404).json({success:"false",message:"Body can not be blank"})
   const schema = Joi.object().keys({
        u_email:Joi.string().email({minDomainAtoms:2}).required(),
        u_pass:Joi.string().required(),
        u_cofirmPass:Joi.string().required(),
        u_MobNumber:Joi.string().regex(/^[0-9]+$/).min(10).max(10).required(),
        u_gender:Joi.string().required()
   })
   Joi.validate({u_email:req.body.cust_email,u_pass:req.body.cust_pass, u_cofirmPass:req.body.cust_confirmPass,u_MobNumber:req.body.cust_phone,u_gender:req.body.cust_gender},schema,(err,result)=>{
    if (err) {
        res.status(404).json({success:"false",error_message:err.message})
    }
    else{
        if(pass.localeCompare(confirm_pass)==0){
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(pass,salt,(err,hash)=>{
                    if (err)
                        res.status(404).json(err)
                    else{
                    hash_pass=hash
                    
                    client.query('Insert into neo_user(cust_email,cust_pass,cust_phone,cust_gender) values($1,$2,$3,$4)',[req.body.cust_email,hash_pass,req.body.cust_phone,req.body.cust_gender],(err,result)=>{
                        if(err){
                            res.status(404).json({success:"false",message:err})
                        }
                        else{
                            res.status(200).json({success:"true",message:"Customer was registered successfully"})
                        }
                    })
                    }
                })
            })         
        }
        else{
            res.status(404).json({success:"false",meesage:"Password and confirm passwod should be same"})
        }
    }
 
})

}

export default insertCustomerData;