import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

const getCustomerProfile = (req:Request,res:Response)=>{
     const cust_id:number = req.body.id

    client.query('Select id,first_name,last_name,email,phone_no,gender,dob,profile_img,created_at from neo_user where cust_id=$1',[cust_id])
    .then(result=>{
        if(result){    
            res.status(200).json({success:"true",customer_proile:result.rows})
        }
        else
        res.status(404).json({success:"false",message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })

}

export default getCustomerProfile