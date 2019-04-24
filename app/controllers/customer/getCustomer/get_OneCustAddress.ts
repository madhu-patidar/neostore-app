import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

const getCustomerAddress = (req:Request,res:Response)=>{
     const cust_id:number = parseInt(req.body.id)
     
    client.query('Select * from customer_address where id=$1',[cust_id])
    .then(result=>{
        if(result){
            res.status(200).json({success:"true",customer_address:result.rows})
        }
        else
        res.status(404).json({success:"false",message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })

}

export default getCustomerAddress