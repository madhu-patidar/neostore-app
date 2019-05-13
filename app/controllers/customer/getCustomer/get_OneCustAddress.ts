import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

const getCustomerAddress = (req:Request,res:Response)=>{
     const cust_id:number = parseInt(req.body.id)
     
    /*client.query('Select * from customer_address where id=$1',[cust_id])
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
        Address.findAll({where:{customer_id:cust_id}})
        .then((result:any)=>{
            if(result){
                res.status(200).json({success:"true",customer_address:result})
            }
            else
            res.status(404).json({success:"false",message:"No data found"})
        })
        .catch((err:any)=>{
            res.status(404).json({success:"false",error_message:err})
        })
    })

}

export default getCustomerAddress