import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

//Delete Customer All Address
const deleteAllAddress= (req:Request,res:Response)=>{
 
            client.query('delete from customer_address')
            .then(()=>{
                res.status(200).json({success:"true",message:"All Address Deleted"})
            })
            .catch(err=>{
                res.status(404).json({success:"false",error_message:err})

            })       
}

//Available for Routes
export default deleteAllAddress;