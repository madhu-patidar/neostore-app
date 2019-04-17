import client from '../../configFiles/database'
import {Request,Response} from 'express'


const deleteAddress= (req:Request,res:Response)=>{
    const id:number=req.body.id
    const id1:number=req.params.id
 
    

    if(req.params.id=='undefined'){
        res.status(404).json({success:"false",message:"Please provide your address id"})
    }
    else{
        client.query('Select cust_id,address_id from customer_address where cust_id=$1 and address_id=$2',[id,id1])
        .then(result=>{
            if(result.rows.length!==0){
                client.query('delete from customer_address where address_id=$1 and cust_id=$2',[id1,id])
            .then(()=>{
                res.status(200).json({success:"true",message:"Address Deleted"})
            })
            }
            else{
                res.status(404).json({success:"false",message:"Please provide correct id"})
            }
        })    
        }
}

export default deleteAddress;