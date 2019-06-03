import { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcryptjs";
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";
import sendEmail from "../../../configFiles/sendEmail";
import {output1} from '../../../configFiles/welcome-message'

const changePassword = (req: Request, res: Response) => {

  let oldPass: string = req.body.oldPass;
  let newPass: string = req.body.newPass;
  let confirmPass:string = req.body.confirmPass;
  let customer_id:number = req.body.id;
  let hash_pass: string;
  let email:string
  if (!req.body) {
    res.status(404).json({ success: false, message: "Body can not be blank" });
  }
  const schema = Joi.object().keys({
    u_pass: Joi.string().required(),
    u_confirmPass: Joi.string()
      .equal(Joi.ref("u_pass"))
      .required(),
    u_oldPass: Joi.string().required()
  });
  Joi.validate(
    { u_oldPass: oldPass, u_pass: newPass, u_confirmPass: confirmPass },
    schema,
    (err, result) => {
      if (err) {
        res.status(404).json({ success: false, error_message: err.message });
      } else {
        connection.sync().then(() => {
          Customer.findOne({ where: { customer_id: customer_id } }).then(
            result => {
              email=result.email
              bcrypt.compare(oldPass, result.password).then(result => {
                if (!result) {
                  res.status(404).json({
                    success: false,
                    message: "Your Password is not matched with our database"
                  });
                } else {
                  bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newPass, salt, (err, hash) => {
                      hash_pass = hash;

                      connection.sync().then(() => {
                        Customer.update(
                          {
                            password: hash_pass
                          },
                          { where: { customer_id: customer_id } }
                        )
                          .then(result => {
                            if (result){
                                 // Send Email
                             sendEmail({
                              from: "sgshubham04@gmail.com",
                              to: email,
                              cc:'sgshubham04@gmail.com',
                              subject: 'Change Password',
                              html: output1
                          });

                              res.status(200).json({
                                sucess: true,
                                message: "You have changed your password"
                              });
                            }
                          })
                          .catch(err => {
                            res.status(404).json({
                              success: false,
                              message: "Something went wrong",
                              error_message: err
                            });
                          });
                      });
                    });
                  });
                }
              })
              .catch(err=>{
                res.status(404).json({success:false,message:"Something went wrong",error_message:err})
              })
            }
          );
        });
      }
    }
  );
};

export default changePassword;
