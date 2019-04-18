import client from '../../configFiles/database_postgresql'
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
        Joi.validate({u_email:req.body.cust_email,u_pass:req.body.cust_pass},schema,(err,result)=>{
            if (err) {
                res.status(404).json({success:"false",error_message:err.message})
            }
            else{
                client.query('select * from neo_user where cust_email=$1',[req.body.cust_email])
                .then(user => {
                    if (!user)
                        res.status(404).send("User is not registered")
                    else {
                        //Here user_data is a object which has user_id, user_name, user_email and user_image
                        cust_data = user.rows[0]
                        id=cust_data.cust_id
                        customer_details.push({cust_id:cust_data.cust_id==null?'':cust_data.cust_id,
                                               cust_Fname:cust_data.cust_Fname==null?'':cust_data.cust_Fname,
                                               cust_Lname:cust_data.cust_Lname==null?'':cust_data.cust_Lname,
                                               cust_email:cust_data.cust_email==null?'':cust_data.cust_email,
                                               cust_phone:cust_data.cust_phone==null?'':cust_data.cust_phone,
                                               cust_gender:cust_data.cust_gender==null?'':cust_data.cust_gender,
                                               cust_dob:cust_data.cust_dob==null?'':cust_data.cust_dob,
                                               cust_image:cust_data.cust_image==null?'':cust_data.cust_image,
                                               cust_created_at:cust_data.cust_created_at==null?'':cust_data.cust_created_at

                        })
    
                        //Compare requested password with database password
                        bcrypt.compare(req.body.cust_pass, cust_data.cust_pass)
                            .then((result) => {
                                //Fetch feedback for loggedin user
                                if (result) {
                                    jwt.sign({id},'secretkey',(err:any,token:any)=>{
                                        res.status(200).json({ success:"true",message:"You have logged In",customer_details:customer_details,token:token })           
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