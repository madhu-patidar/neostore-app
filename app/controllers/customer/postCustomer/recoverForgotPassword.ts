import { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcryptjs";
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";

const recoverPassword = (req:Request,res:Response)=>{

    let email:string = req.body.email
    let newPass: string = req.body.newPass;
    let confirmPass:string = req.body.confirmPass;

    if (!req.body) {
        res.status(404).json({ success: false, message: "Body can not be blank" });
      }

      const schema = Joi.object().keys({
          u_pass:Joi.string().required(),
          u_confirmPass:Joi.string().equal(Joi.ref('u_pass')).required()
      })

      Joi.validate({u_pass:newPass,u_confirmPass:confirmPass},schema,(err,result)=>{
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
          }
          else{
              connection.sync().then(()=>{
                  Customer.findOne({where:{email:email}})
                  .then(result=>{
                      if(result){
                        bcrypt.genSalt(10,(err,salt)=>{
                            console.log("Salt>>",salt)
                            bcrypt.hash(newPass,salt,(err,hash)=>{
                                Customer.update({password:hash},{where:{email:email}})
                                .then(result=>{
                                    res.status(200).json({success:true,message:`Your account, registered with ${email} has been recovered successfully`})
                                })
                                .catch(err=>{
                                    res.status(404).json({success:false,message:'Something went wrong',error_message:err})
                                })
                            })
                        })


                      }
                      else{
                          res.status(404).json({success:true,message:"You are not a valis user"})
                      }
                  })
                  .catch(err=>{
                      res.status(404).json({success:false,message:'Something went wrong',error_message:err})
                  })
              })
          }
      })

}

export default recoverPassword