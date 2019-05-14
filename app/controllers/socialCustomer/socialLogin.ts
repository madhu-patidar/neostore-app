import {Request,Response} from 'express'
import jwt from 'jsonwebtoken';

const loginBySocial=(req:Request,res:Response)=>{

   let customer:any=[]
   let id:number=req.user.customer_id
   jwt.sign({id},'secretKey',(err:any,token:string)=>{
      customer.push({
            id:req.user.customer_id==null?'':req.user.customer_id,
            first_name:req.user.first_name==null?'':req.user.first_name,
            last_name:req.user.last_name==null?'':req.user.last_name,
            email:req.user.email==null?'':req.user.email,
            phone_no:req.user.phone_no==null?'':req.user.phone_no,
            gender:req.user.gender==null?'':req.user.gender,
            dob:req.user.dob==null?'':req.user.dob,
            profile_img:req.user.profile_img==null?'':req.user.profile_img,
            created_at:req.user.createdAt==null?'':req.user.createdAt,
            updated_at:req.user.updatedAt==null?'':req.user.updatedAt,
            token_value:token
      })
      res.status(200).json({success:true,data:customer})
   })

}

export default loginBySocial