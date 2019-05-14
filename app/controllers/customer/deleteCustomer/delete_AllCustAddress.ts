//import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

//Delete Customer All Address
const deleteAllAddress= (req:Request,res:Response)=>{
 
            /*client.query('delete from customer_address')
            .then(()=>{
                res.status(200).json({success:"true",message:"All Address Deleted"})
            })
            .catch(err=>{
                res.status(404).json({success:"false",error_message:err})

            })*/
            
            connection.sync().then(()=>{
                Address.destroy({where:{},truncate:false})
                .then((result:any)=>{
                    res.status(200).json({success:true,message:"All Customer Address Deleted"})
                })
                .catch((err:any)=>{
                    res.status(404).json({success:false,error_message:err})
    
                })
            }) 
}

//Available for Routes
export default deleteAllAddress;