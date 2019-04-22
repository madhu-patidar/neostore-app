import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

//Delete Customer All Address
const deleteOneCustomer= (req:Request,res:Response)=>{
    const id1:number=req.body.id
    const id2:number=parseInt(req.body.customer_id)
 console.log(id1,id2)

    if(id1===id2){
            client.query('delete from neo_user where id=$1',[id1])
            .then(()=>{
                res.status(200).json({success:"true",message:"One Customer Deleted"})
            })
            .catch(err=>{
                res.status(404).json({success:"false",error_message:err})

            })  
        }
        else{
            res.status(404).json({success:"false",message:"Customer id not matched"})
        }     
}

//Available for Routes
export default deleteOneCustomer;