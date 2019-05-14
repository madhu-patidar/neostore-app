//import client from "../../../configFiles/database_postgresql";
import { Request, Response } from "express";
import Joi from "joi";
import Address from "../../../models/customer/custAddress_model";
import connection from "../../../configFiles/sequelize-postgres";

//Add Customer Address
const addAddress = (req: Request, res: Response) => {
  const id: number = parseInt(req.body.id);

  const schema = Joi.object().keys({
    u_id: Joi.number()
      .integer()
      .required(),
    u_address: Joi.string()
      .min(3)
      .max(200)
      .required(),
    u_pincode: Joi.string()
      .regex(/^[0-9]+$/)
      .min(6)
      .max(6)
      .required(),
    u_city: Joi.string().required(),
    u_state: Joi.string().required(),
    u_country: Joi.string().required()
  });

  Joi.validate(
    {
      u_id: id,
      u_address: req.body.address,
      u_pincode: req.body.pincode,
      u_city: req.body.city,
      u_state: req.body.state,
      u_country: req.body.country
    },
    schema,
    (err, result) => {
      if (err) {
        res.status(404).json({ success: "false", error_message: err.message });
      } else {
        /*client.query('Insert into customer_address(id,address,pincode,city,state,country) values($1,$2,$3,$4,$5,$6)',[id,req.body.address,req.body.pincode,req.body.city,req.body.state,req.body.country])
        .then(()=>{
            client.query('Select * from customer_address where id=$1',[id],(err,result)=>{
                if(err)
                res.status(404).json({success:"false",error_message:err})
                else{
                    res.status(200).json({success:"true",message:"Updated Address",customer_address:result.rows})
                }
            })
        })
        .catch((err)=>{
            res.status(404).json({success:"false",error_message:err})
        })*/
        connection.sync().then(()=>{
            Address.create({
                customer_id:req.body.id,
                address: req.body.address,
                pincode: req.body.pincode,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
              })
                .then((result) => {
                  res.status(200).json({
                    success: true,
                    message: "Customer Address was registered successfully",
                    address:result
                  });
                })
                .catch((err: { errors: { message: string }[] }) => {
                  res.status(404).json({
                    success: false,
                    message: "Something went wrong",
                    error_message: err
                  });
                });
        })
        
      }
    }
  );
};

//Available for Routes
export default addAddress;
