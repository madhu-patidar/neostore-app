import {Request,Response} from 'express'
import jwt from 'jsonwebtoken';

const loginBySocial=(req:Request,res:Response)=>{

   let customer:any=[]
   let id:number=req.user[0].id
   jwt.sign({id},'secretKey',(err:any,token:string)=>{
      customer.push({
            id:req.user[0].id==null?'':req.user[0].id,
            first_name:req.user[0].first_name==null?'':req.user[0].first_name,
            last_name:req.user[0].last_name==null?'':req.user[0].last_name,
            email:req.user[0].email==null?'':req.user[0].email,
            phone_no:req.user[0].phone_no==null?'':req.user[0].phone_no,
            gender:req.user[0].gender==null?'':req.user[0].gender,
            dob:req.user[0].dob==null?'':req.user[0].dob,
            profile_img:req.user[0].profile_img==null?'':req.user[0].profile_img,
            created_at:req.user[0].created_at==null?'':req.user[0].created_at,
            token_value:token
      })
      res.status(200).json({success:true,data:customer})
   })

}

export default loginBySocial