import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Joi from 'joi'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//Authenticate Customer
const customerAuthentication=(req:Request,res:Response)=>{
    let cust_data:any;
    let id:number;
    let customer_details:any=[]

    if(!req.body)
    res.status(404).json({success:"false",message:"Please enter your credentials"})
    else{
        const schema = Joi.object().keys({
            u_email:Joi.string().email({minDomainAtoms:2}).required(),
            u_pass:Joi.string().required()
        })
        Joi.validate({u_email:req.body.email,u_pass:req.body.pass},schema,(err,result)=>{
            if (err) {
                res.status(404).json({success:"false",error_message:err.message})
            }
            else{
                client.query('select * from neo_user where email=$1',[req.body.email])
                .then(customer => {
                    if (!customer)
                        res.status(404).send("User is not registered")
                    else {
                        //Here user_data is a object which has user_id, user_name, user_email and user_image
                        cust_data = customer.rows[0]
                        id=cust_data.id
                        customer_details.push({id:cust_data.id==null?'':cust_data.id,
                        first_name:cust_data.first_name==null?'':cust_data.first_name,
                        last_name:cust_data.last_name==null?'':cust_data.last_name,
                        email:cust_data.email==null?'':cust_data.email,
                        phone_no:cust_data.phone_no==null?'':cust_data.phone_no,
                        gender:cust_data.gender==null?'':cust_data.gender,
                        dob:cust_data.dob==null?'':cust_data.dob,
                        profile_img:cust_data.profile_img==null?'':cust_data.profile_img,
                        created_at:cust_data.created_at==null?'':cust_data.created_at

                        })
    
                        //Compare requested password with database password
                        bcrypt.compare(req.body.pass, cust_data.pass)
                            .then((result) => {
                                
                                if (result) {
                                    jwt.sign({id},'secretkey',{expiresIn:'30s'},(err:any,token:any)=>{
                                        
                                        res.status(200).json({ success:"true",message:"You have logged In",customer_details:customer_details,token:token})           
                                    })
                                    }
                                else res.status(404).json({success:"false",message:"Password is not matched"})
                            })
                    }
                })
                .catch(() => res.status(404).json({success:"false",message:"Email is not registered"}))
            }
        })
    }
}

//Available for Routes
export default customerAuthentication;