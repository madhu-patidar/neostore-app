//import client from "../../../configFiles/database_postgresql";
import { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcryptjs";
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";



//Register New Customer
const insertCustomerData = (req: Request, res: Response) => {
  let pass: string = req.body.pass;
  let confirm_pass: string = req.body.confirmPass;
  let hash_pass: string;
  if (!req.body)
    res
      .status(404)
      .json({ success: "false", message: "Body can not be blank" });
  const schema = Joi.object().keys({
    u_email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    u_pass: Joi.string().required(),
    u_cofirmPass: Joi.string().required(),
    u_MobNumber: Joi.string()
      .regex(/^[0-9]+$/)
      .min(10)
      .max(10)
      .required(),
    u_gender: Joi.string().required()
  });
  Joi.validate(
    {
      u_email: req.body.email,
      u_pass: req.body.pass,
      u_cofirmPass: req.body.confirmPass,
      u_MobNumber: req.body.phone_no,
      u_gender: req.body.gender
    },
    schema,
    (err, result) => {
      if (err) {
        res.status(404).json({ success: "false", error_message: err.message });
      } else {
        if (pass.localeCompare(confirm_pass) == 0) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(pass, salt, (err, hash) => {
              if (err) res.status(404).json(err);
              else {
                hash_pass = hash;

                /*client.query('Insert into neo_user(email,pass,phone_no,gender) values($1,$2,$3,$4)',[req.body.email,hash_pass,req.body.phone_no,req.body.gender],(err,result)=>{
                        if(err){
                            res.status(404).json({success:"false",message:err})
                        }
                        else{
                            res.status(200).json({success:"true",message:"Customer was registered successfully"})
                        }
                    })*/
                connection.sync().then(() => {
                  Customer.findOne({ where: { email: req.body.email } })
                    .then((result) => {
                      if (result==null) {
                       return Customer.create({
                          email: req.body.email,
                          password: hash_pass,
                          phone_no: req.body.phone_no,
                          gender: req.body.gender
                        })
                          .then((result) => {
                            console.log("Insrt>>",result)
                            res
                              .status(200)
                              .json({
                                success: true,
                                message:
                                  "New Customer was registered successfully"
                              });
                          })
                          .catch((err: { errors: { message: string }[] }) => {
                            res
                              .status(404)
                              .json({
                                success: false,
                                message: "Something went wrong",
                              });
                          });
                      } else {
                        res
                          .status(404)
                          .json({
                            success: false,
                            message: "This email is already registered with us."
                          });
                      }
                    })
                    .catch((err: { errors: { message: string }[] }) => {
                      res
                        .status(404)
                        .json({
                          success: false,
                          message: "Something went wrong",
                          error_message: err.errors[0].message
                        });
                    });
                });
              
              }
            });
          });
        } else {
          res
            .status(404)
            .json({
              success: "false",
              message: "Password and confirm passwod should be same"
            });
        }
      }
    }
  );
};

//Available for Routes
export default insertCustomerData;
