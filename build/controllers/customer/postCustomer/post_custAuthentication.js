"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Authenticate Customer
var customerAuthentication = function (req, res) {
    var customer;
    var id;
    var customer_details = [];
    if (!req.body)
        res
            .status(404)
            .json({ success: false, message: "Please enter your credentials" });
    else {
        var schema = joi_1.default.object().keys({
            u_email: joi_1.default.string()
                .email({ minDomainAtoms: 2 })
                .required(),
            u_pass: joi_1.default.string().required()
        });
        joi_1.default.validate({ u_email: req.body.email, u_pass: req.body.pass }, schema, function (err, result) {
            if (err) {
                res
                    .status(404)
                    .json({ success: false, error_message: err.message });
            }
            else {
                sequelize_postgres_1.default.sync().then(function () {
                    customer_model_1.default.findOne({ where: { email: req.body.email } })
                        .then(function (result) {
                        if (result == null) {
                            res.status(404).send("Customer is not registered");
                        }
                        else {
                            //Here user_data is a object which has user_id, user_name, user_email and user_image
                            customer = result;
                            id = customer.customer_id;
                            customer_details.push({
                                id: customer.customer_id == null ? "" : customer.customer_id,
                                first_name: customer.first_name == null ? "" : customer.first_name,
                                last_name: customer.last_name == null ? "" : customer.last_name,
                                email: customer.email == null ? "" : customer.email,
                                phone_no: customer.phone_no == null ? "" : customer.phone_no,
                                gender: customer.gender == null ? "" : customer.gender,
                                dob: customer.dob == null ? "" : customer.dob,
                                profile_img: customer.profile_img == null ? "" : customer.profile_img,
                                createdAt: customer.createdAt == null ? "" : customer.createdAt,
                                updatedAt: customer.updatedAt == null ? "" : customer.updatedAt
                            });
                            //Compare requested password with database password
                            bcryptjs_1.default
                                .compare(req.body.pass, customer.password)
                                .then(function (result) {
                                if (result) {
                                    jsonwebtoken_1.default.sign({ id: id }, "secretkey", 
                                    // { expiresIn: "30s" },
                                    function (err, token) {
                                        res
                                            .status(200)
                                            .json({
                                            success: true,
                                            message: "You have logged In",
                                            customer_details: customer_details,
                                            token: token
                                        });
                                    });
                                }
                                else
                                    res
                                        .status(404)
                                        .json({
                                        success: false,
                                        message: "Password is not matched"
                                    });
                            });
                        }
                    })
                        .catch(function () {
                        return res
                            .status(404)
                            .json({
                            success: false,
                            message: "Email is not registered"
                        });
                    });
                });
                /* client.query('select * from neo_user where email=$1',[req.body.email])
                      .then(customer => {
                          if (!customer)
                              res.status(404).send("User is not registered")
                          else {
                              //Here user_data is a object which has user_id, user_name, user_email and user_image
                              cust_data = customer.rows[0]
                              id=cust_data.id
                              customer_details.push({id:cust_data.id==null?'':cust_data.id,
                              first_name:cust_data.first_name==null?'':cust_data.first_name,
                              last_name:cust_data.last_name==null?'':cust_data.last_name,
                              email:cust_data.email==null?'':cust_data.email,
                              phone_no:cust_data.phone_no==null?'':cust_data.phone_no,
                              gender:cust_data.gender==null?'':cust_data.gender,
                              dob:cust_data.dob==null?'':cust_data.dob,
                              profile_img:cust_data.profile_img==null?'':cust_data.profile_img,
                              created_at:cust_data.created_at==null?'':cust_data.created_at
      
                              })
          
                              //Compare requested password with database password
                              bcrypt.compare(req.body.pass, cust_data.pass)
                                  .then((result) => {
                                      
                                      if (result) {
                                          jwt.sign({id},'secretkey',{expiresIn:'30s'},(err:any,token:any)=>{
                                              
                                              res.status(200).json({ success:"true",message:"You have logged In",customer_details:customer_details,token:token})
                                          })
                                          }
                                      else res.status(404).json({success:"false",message:"Password is not matched"})
                                  })
                          }
                      })
                      .catch(() => res.status(404).json({success:"false",message:"Email is not registered"}))*/
            }
        });
    }
};
//Available for Routes
exports.default = customerAuthentication;
