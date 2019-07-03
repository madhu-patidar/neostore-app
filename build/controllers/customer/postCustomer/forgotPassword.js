"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var sendEmail_1 = __importDefault(require("../../../configFiles/sendEmail"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var forgotPassword = function (req, res) {
    var email = req.body.email;
    var schema = joi_1.default.object().keys({
        u_email: joi_1.default.string()
            .email({ minDomainAtoms: 2 })
            .required()
    });
    joi_1.default.validate({ u_email: email }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            sequelize_postgres_1.default.sync().then(function () {
                customer_model_1.default.findOne({ where: { email: email } })
                    .then(function (result) {
                    if (result) {
                        jsonwebtoken_1.default.sign({ email: email }, "secretkey", function (err, token) {
                            var output = "\n                                <p><font size='4'><strong>You have requested for Forgot Password of NeoSTORE account.</strong></font></p>\n                                <p><font size='3'>Dont't worry, we will help you. Please follow below given instructions.</font></p>\n                                 <pre>1. Click on below given link, which will redirect you set password screen.</pre>\n                                 <pre>3. Enter your new password and confirm password and press submit button.\n                               </pre>\n                               <h4>Please click on below button for set your password.</h4>\n                               <button><a href=\"http://d644c063.ngrok.io/login\">Click here</a></button>\n                               <br>\n                               <br>\n                               <p><font color=\"black\" size='3'>Thank you for joining us.</font></p>\n                                 <img  src=\"https://d1hbpr09pwz0sk.cloudfront.net/logo_url/neosoft-technologies-377c095a\" height=50 width=140>\n                            ";
                            // Send Email
                            sendEmail_1.default({
                                from: "sgshubham04@gmail.com",
                                to: email,
                                cc: 'sgshubham04@gmail.com',
                                subject: 'Recover Account',
                                html: output
                            });
                            res
                                .status(200)
                                .json({
                                success: true,
                                message: "Check your mail for further instructions.",
                                token: token
                            });
                        });
                    }
                    else {
                        res
                            .status(404)
                            .json({
                            success: false,
                            message: "This email is not registered with our database."
                        });
                    }
                })
                    .catch(function (err) {
                    res
                        .status(404)
                        .json({
                        success: false,
                        message: "Something went wrong",
                        error_message: err
                    });
                });
            });
        }
    });
};
exports.default = forgotPassword;
