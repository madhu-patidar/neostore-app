import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

const getCustomerAddress = (req:Request,res:Response)=>{
     const customer_id:number = parseInt(req.body.id)
     
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
        Address.findAll({where:{customer_id:customer_id}})
        .then((result:any)=>{
            if(result.length!==0){
                res.status(200).json({success:true,customer_address:result})
            }
            else
            res.status(404).json({success:false,message:"You did not add any address. Please add atleast one address."})
        })
        .catch((err:any)=>{
            res.status(404).json({success:false,error_message:err})
        })
    })

}

export default getCustomerAddress