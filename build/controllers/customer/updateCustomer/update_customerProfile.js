"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Update Customer Profile
var updateProfile = function (req, res) {
    var id = parseInt(req.body.id);
    var id1 = parseInt(req.body.customer_id);
    var schema = joi_1.default.object().keys({
        u_Fname: joi_1.default.string()
            .regex(/^[A-Za-z]+$/)
            .required(),
        u_Lname: joi_1.default.string()
            .regex(/^[A-Za-z]+$/)
            .required(),
        u_email: joi_1.default.string()
            .email({ minDomainAtoms: 2 })
            .required(),
        u_DOB: joi_1.default.string()
            .regex(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/)
            .required(),
        u_phone: joi_1.default.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),
        u_gender: joi_1.default.string().required()
    });
    joi_1.default.validate({
        u_Fname: req.body.first_name,
        u_Lname: req.body.last_name,
        u_email: req.body.email,
        u_DOB: req.body.dob,
        u_phone: req.body.phone_no,
        u_gender: req.body.gender
    }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            if (id === id1) {
                sequelize_postgres_1.default.sync().then(function () {
                    customer_model_1.default.update({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        dob: req.body.dob,
                        phone_no: req.body.phone_no,
                        gender: req.body.gender,
                        profile_img: req.file.filename
                    }, { where: { customer_id: id } })
                        .then(function (result) {
                        if (result) {
                            customer_model_1.default.findOne({
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
                                },
                                where: { customer_id: id }
                            })
                                .then(function (result) {
                                if (result !== null)
                                    res
                                        .status(200)
                                        .json({
                                        success: true,
                                        message: "Updated profile",
                                        customer_details: result
                                    });
                                else {
                                    res
                                        .status(404)
                                        .json({
                                        success: false,
                                        message: "Something went wrong"
                                    });
                                }
                            })
                                .catch(function (err) {
                                res
                                    .status(404)
                                    .json({ success: false, erro_message: err });
                            });
                        }
                    })
                        .catch(function (err) {
                        res.status(404).json({ success: false, erro_message: err });
                    });
                });
                /*client.query('Update neo_user set first_name=$1,last_name=$2,email=$3,dob=$4,phone_no=$5,gender=$6,profile_img=$7 where id=$8',[req.body.first_name,req.body.last_name,req.body.email,req.body.dob,req.body.phone_no,req.body.gender,req.file.filename,id])
                  .then(user=>{
                      if(user){
                          client.query('Select id,first_name,last_name,email,dob,phone_no,gender,profile_img, created_at from neo_user where id=$1',[id],(err,result)=>{
                              if(result){
                                  res.status(200).json({success:"true",message:"Updated profile",customer_details:result.rows})
                              }
                              else{
                              res.status(404).json({success:"false",erro_message:err})
                              }
                          })
                      
                      }
                  })
                  .catch(err=>{
                      res.status(404).json({success:"false",message:err})
                  })*/
            }
            else {
                res
                    .status(404)
                    .json({ success: false, message: "Customer id not matched" });
            }
        }
    });
};
//Available for Routes
exports.default = updateProfile;
