import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

//Delete Customer One Address
const deleteAddress= (req:Request,res:Response)=>{
    const id:number=req.body.id
    const id1:number=req.body.address_id

    
    if(req.body.id=='undefined'){
        res.status(404).json({success:"false",message:"Please provide your address id"})
    }
    else{
        client.query('Select id,address_id from customer_address where id=$1 and address_id=$2',[id,id1])
        .then(result=>{
            if(result.rows.length!==0){
                client.query('delete from customer_address where address_id=$1 and id=$2',[id1,id])
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

//Available for Routes
export default deleteAddress;