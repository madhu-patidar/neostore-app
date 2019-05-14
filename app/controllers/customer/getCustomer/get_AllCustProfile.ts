//import client from '../../../configFiles/database_postgresql'
import { Request, Response } from "express";
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";

const getAllCustomerProfile = (req: Request, res: Response) => {
  /*client.query('Select id,first_name,last_name,email,phone_no,gender,dob,profile_img,created_at from neo_user order by id')
    .then(result=>{
        if(result){    
            res.status(200).json({success:"true",customer_proile:result.rows})
        }
        else
        res.status(404).json({success:"false",message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })*/

  connection.sync().then(() => {
    Customer.findAll({
      attributes: {
        include: [
          "first_name",
          "last_name",
          "email",
          "dob",
          "phone_no",
          "gender",
          "profile_img"
        ],
        exclude: ["password", "googleid", "facebookid"]
      }
    })
    .then((result:any)=>{
        if(result){    
            res.status(200).json({success:true,customer_proile:result})
        }
        else
        res.status(404).json({success:false,message:"No data found"})
    })
    .catch((err:any)=>{
        res.status(404).json({success:false,error_message:err})
    });
  });
};

export default getAllCustomerProfile;
