import client from '../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Joi from 'joi'

//Add Customer Address
const addAddress= (req:Request,res:Response)=>{
    const id:number=req.body.id

    const schema = Joi.object().keys({
        u_id:Joi.number().integer().required(),
        u_address:Joi.string().min(3).max(200).required(),
        u_pincode:Joi.string().regex(/^[0-9]+$/).min(6).max(6).required(),
        u_city:Joi.string().required(),
        u_state:Joi.string().required(),
        u_country:Joi.string().required(),
   })

   Joi.validate({u_id:id,u_address:req.body.cust_address,u_pincode:req.body.cust_pincode,u_city:req.body.cust_city,u_state:req.body.cust_state,u_country:req.body.cust_country},schema,(err,result)=>{
    if(err){
        res.status(404).json({success:"false",error_message:err.message})
    }
    else{

        client.query('Insert into customer_address(cust_id,cust_address,cust_pincode,cust_city,cust_state,cust_country) values($1,$2,$3,$4,$5,$6)',[id,req.body.cust_address,req.body.cust_pincode,req.body.cust_city,req.body.cust_state,req.body.cust_country])
        .then(()=>{
            client.query('Select * from customer_address where cust_id=$1',[id],(err,result)=>{
                if(err)
                res.status(404).json({success:"false",error_message:err})
                else{
                    res.status(200).json({success:"true",message:"Updated Address",customer_address:result.rows})
                }
            })
        })
        .catch((err)=>{
            res.status(404).json({success:"false",error_message:err})
        })
    }
   })



}

//Available for Routes
export default addAddress;