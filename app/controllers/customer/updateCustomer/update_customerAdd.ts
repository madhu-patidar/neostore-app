//import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";


//Update Customer Profile
const updateAddress=(req:Request,res:Response)=>{
    const id1:number=parseInt(req.body.customer_id)
    const id2:number=parseInt(req.body.address_id)

if(id1===req.body.id){
  if(req.body.address==undefined && req.body.city==undefined && req.body.pincode==undefined && req.body.state==undefined && req.body.country==undefined){
    res.status(404).json({success:false,message:"Nothing to update"})
  }
else{
  connection.sync().then(()=>{
    if(req.body.address){
      Address.update({address:req.body.address},{where:{customer_id:id1,address_id:id2}})
      .then()
      .catch()
    }
    if(req.body.pincode){
      Address.update({pincode:req.body.pincode},{where:{customer_id:id1,address_id:id2}})
     
    }
    if(req.body.city){
      Address.update({city:req.body.city},{where:{customer_id:id1,address_id:id2}})
      .then()
      .catch()
    }
    if(req.body.state){
      Address.update({state:req.body.state},{where:{customer_id:id1,address_id:id2}})
      .then()
      .catch()
    }
    if(req.body.country){
      Address.update({country:req.body.country},{where:{customer_id:id1,address_id:id2}})
      .then()
      .catch()
    }
    res.status(200).json({success:true,message:"Address Updated"})
  })
   
    
  
}
    /*client.query('Select * from customer_address where id=$1 and address_id=$2',[id1,id2],(err,result)=>{
        if(err)
        res.status(404).json({success:"false",error_message:err})
        if(result.rows.length!==0){
            if(req.body.constructor === Object && Object.keys(req.body).length === 0){
                res.status(404).json({success:"false",message:"No Data found to update"})
              }
              else{
                  if(req.body.address){
                    client.query('Update customer_address set address=$1 where id=$2 and address_id=$3',[req.body.address,req.body.id,id2],(err,result)=>{
                        if(err)
                         res.status(404).json({success:"false",error_message:err})
                    })
                  }
                  if(req.body.pincode){
                    client.query('Update customer_address set pincode=$1 where id=$2 and address_id=$3',[req.body.pincode,req.body.id,id2],(err,result)=>{
                        if(err)
                         res.status(404).json({success:"false",error_message:err})
                    })

                  }
                  if(req.body.city){
                    client.query('Update customer_address set city=$1 where id=$2 and address_id=$3',[req.body.city,req.body.id,id2],(err,result)=>{
                        if(err)
                         res.status(404).json({success:"false",error_message:err})
                    })

                  }
                  if(req.body.state){
                    client.query('Update customer_address set state=$1 where id=$2 and address_id=$3',[req.body.state,req.body.id,id2],(err,result)=>{
                        if(err)
                         res.status(404).json({success:"false",error_message:err})
                    })

                  }
                  if(req.body.country){
                    client.query('Update customer_address set country=$1 where id=$2 and address_id=$3',[req.body.country,req.body.id,id2],(err,result)=>{
                        if(err)
                         res.status(404).json({success:"false",error_message:err})
                    })

                  }

            res.status(200).json({success:"false",message:"Your address is updated"})

              }
        }
        else{
            res.status(404).json({success:"false",message:"Please enter valid address id"})
        }
    })*/
}
else{
    res.status(404).json({success:"false",message:"Customer id not matched"})
}   
}

//Available for Routes
export default updateAddress;