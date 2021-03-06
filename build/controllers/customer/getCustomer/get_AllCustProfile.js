"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var getAllCustomerProfile = function (req, res) {
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
    sequelize_postgres_1.default.sync().then(function () {
        customer_model_1.default.findAll({
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
            .then(function (result) {
            if (result) {
                res.status(200).json({ success: true, customer_proile: result });
            }
            else
                res.status(404).json({ success: false, message: "No data found" });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, error_message: err });
        });
    });
};
exports.default = getAllCustomerProfile;
