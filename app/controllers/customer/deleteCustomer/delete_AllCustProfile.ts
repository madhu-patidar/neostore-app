import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";

//Delete Customer All Address
const deleteAllCustomer= (req:Request,res:Response)=>{
 
            /*client.query('delete from neo_user')
            .then(()=>{
                res.status(200).json({success:"true",message:"All Customer Deleted"})
            })
            .catch(err=>{
                res.status(404).json({success:"false",error_message:err})

            }) */
            connection.sync().then(()=>{
                Customer.destroy({where:{},truncate:false})
                .then(()=>{
                    res.status(200).json({success:"true",message:"All Customer Deleted"})
                })
                .catch((err:any)=>{
                    res.status(404).json({success:"false",error_message:err})
    
                })
            })      
}

//Available for Routes
export default deleteAllCustomer;