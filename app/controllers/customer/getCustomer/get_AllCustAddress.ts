import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

const getCustomerAllAddress = (req:Request,res:Response)=>{
     
    /*client.query('Select * from customer_address')
    .then(result=>{
        if(result){
            res.status(200).json({success:"true",customer_address:result.rows})
        }
        else
        res.status(404).json({success:"false",message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })*/

    connection.sync().then(()=>{
        Address.findAll()
        .then((result:any)=>{
            if(result){
                res.status(200).json({success:true,customer_address:result})
            }
            else
            res.status(404).json({success:false,message:"No data found"})
        })
        .catch((err:any)=>{
            res.status(404).json({success:false,error_message:err})
        })

    })

}

export default getCustomerAllAddress