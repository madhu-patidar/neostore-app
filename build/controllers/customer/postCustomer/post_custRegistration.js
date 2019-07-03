"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var sendEmail_1 = __importDefault(require("../../../configFiles/sendEmail"));
var welcome_message_1 = require("../../../configFiles/welcome-message");
//Register New Customer
var insertCustomerData = function (req, res) {
    var pass = req.body.pass;
    var confirm_pass = req.body.confirmPass;
    var hash_pass;
    var email = req.body.email;
    if (req.body == null) {
        res.status(404).json({ success: false, message: "Body can not be blank" });
    }
    var schema = joi_1.default.object().keys({
        u_email: joi_1.default.string()
            .email({ minDomainAtoms: 2 })
            .required(),
        u_pass: joi_1.default.string().required(),
        u_cofirmPass: joi_1.default.string().required(),
        u_MobNumber: joi_1.default.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),
        u_gender: joi_1.default.string().required()
    });
    joi_1.default.validate({
        u_email: req.body.email,
        u_pass: req.body.pass,
        u_cofirmPass: req.body.confirmPass,
        u_MobNumber: req.body.phone_no,
        u_gender: req.body.gender
    }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            if (pass.localeCompare(confirm_pass) == 0) {
                bcryptjs_1.default.genSalt(10, function (err, salt) {
                    bcryptjs_1.default.hash(pass, salt, function (err, hash) {
                        if (err)
                            res.status(404).json(err);
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
                            sequelize_postgres_1.default.sync().then(function () {
                                customer_model_1.default.findOne({ where: { email: req.body.email } })
                                    .then(function (result) {
                                    if (result == null) {
                                        return customer_model_1.default.create({
                                            email: req.body.email,
                                            password: hash_pass,
                                            phone_no: req.body.phone_no,
                                            gender: req.body.gender
                                        })
                                            .then(function (result) {
                                            if (result) {
                                                // Send Email
                                                sendEmail_1.default({
                                                    from: "sgshubham04@gmail.com",
                                                    to: email,
                                                    cc: "sgshubham04@gmail.com",
                                                    subject: "Welcome Greetings",
                                                    html: welcome_message_1.output
                                                });
                                                res.status(200).json({
                                                    success: true,
                                                    message: "New Customer was registered successfully"
                                                });
                                            }
                                        })
                                            .catch(function (err) {
                                            res.status(404).json({
                                                success: false,
                                                message: "Something went wrong"
                                            });
                                        });
                                    }
                                    else {
                                        res.status(404).json({
                                            success: false,
                                            message: "This email is already registered with us."
                                        });
                                    }
                                })
                                    .catch(function (err) {
                                    res.status(404).json({
                                        success: false,
                                        message: "Something went wrong",
                                        error_message: err.errors[0].message
                                    });
                                });
                            });
                        }
                    });
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: "Password and confirm passwod should be same"
                });
            }
        }
    });
};
//Available for Routes
exports.default = insertCustomerData;
