import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

//Delete Customer One Address
const deleteAddress= (req:Request,res:Response)=>{
    const id:number=parseInt(req.body.id)
    const id1:number=parseInt(req.body.address_id)

    
    if(req.body.address_id==undefined){
        res.status(404).json({success:"false",message:"Please provide your address id"})
    }
    else{
        /*client.query('Select id,address_id from customer_address where id=$1 and address_id=$2',[id,id1])
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
        })  */
        connection.sync().then(()=>{
            Address.destroy({where:{address_id:id1,customer_id:id}})
            .then((result:any)=>{
                if(result!==0)
                res.status(200).json({success:"true",message:"One Customer Address Deleted"})
                else
                res.status(404).json({success:false,message:"Address is not there. Please enter correct address id."})

            })
            .catch((err:any)=>{
                res.status(404).json({success:"false",error_message:err})

            })
        })  
        }
}

//Available for Routes
export default deleteAddress;