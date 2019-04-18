"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../configFiles/database_postgresql"));
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var customerAuthentication = function (req, res) {
    var cust_data;
    var id;
    var customer_details = [];
    if (!req.body)
        res.status(404).json({ success: "false", message: "Please enter your credentials" });
    else {
        var schema = joi_1.default.object().keys({
            u_email: joi_1.default.string().email({ minDomainAtoms: 2 }).required(),
            u_pass: joi_1.default.string().required()
        });
        joi_1.default.validate({ u_email: req.body.cust_email, u_pass: req.body.cust_pass }, schema, function (err, result) {
            if (err) {
                res.status(404).json({ success: "false", error_message: err.message });
            }
            else {
                database_postgresql_1.default.query('select * from neo_user where cust_email=$1', [req.body.cust_email])
                    .then(function (user) {
                    if (!user)
                        res.status(404).send("User is not registered");
                    else {
                        //Here user_data is a object which has user_id, user_name, user_email and user_image
                        cust_data = user.rows[0];
                        id = cust_data.cust_id;
                        customer_details.push({ cust_id: cust_data.cust_id == null ? '' : cust_data.cust_id,
                            cust_Fname: cust_data.cust_Fname == null ? '' : cust_data.cust_Fname,
                            cust_Lname: cust_data.cust_Lname == null ? '' : cust_data.cust_Lname,
                            cust_email: cust_data.cust_email == null ? '' : cust_data.cust_email,
                            cust_phone: cust_data.cust_phone == null ? '' : cust_data.cust_phone,
                            cust_gender: cust_data.cust_gender == null ? '' : cust_data.cust_gender,
                            cust_dob: cust_data.cust_dob == null ? '' : cust_data.cust_dob,
                            cust_image: cust_data.cust_image == null ? '' : cust_data.cust_image,
                            cust_created_at: cust_data.cust_created_at == null ? '' : cust_data.cust_created_at
                        });
                        //Compare requested password with database password
                        bcryptjs_1.default.compare(req.body.cust_pass, cust_data.cust_pass)
                            .then(function (result) {
                            //Fetch feedback for loggedin user
                            if (result) {
                                jsonwebtoken_1.default.sign({ id: id }, 'secretkey', function (err, token) {
                                    res.status(200).json({ success: "true", message: "You have logged In", customer_details: customer_details, token: token });
                                });
                            }
                            else
                                res.status(404).json({ success: "false", message: "Password is not matched" });
                        });
                    }
                })
                    .catch(function () { return res.status(404).json({ success: "false", message: "Email is not registered" }); });
            }
        });
    }
};
exports.default = customerAuthentication;
