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
var changePassword = function (req, res) {
    var oldPass = req.body.oldPass;
    var newPass = req.body.newPass;
    var confirmPass = req.body.confirmPass;
    var customer_id = req.body.id;
    var hash_pass;
    var email;
    if (!req.body) {
        res.status(404).json({ success: false, message: "Body can not be blank" });
    }
    var schema = joi_1.default.object().keys({
        u_pass: joi_1.default.string().required(),
        u_confirmPass: joi_1.default.string()
            .equal(joi_1.default.ref("u_pass"))
            .required(),
        u_oldPass: joi_1.default.string().required()
    });
    joi_1.default.validate({ u_oldPass: oldPass, u_pass: newPass, u_confirmPass: confirmPass }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            sequelize_postgres_1.default.sync().then(function () {
                customer_model_1.default.findOne({ where: { customer_id: customer_id } }).then(function (result) {
                    email = result.email;
                    bcryptjs_1.default.compare(oldPass, result.password).then(function (result) {
                        if (!result) {
                            res.status(404).json({
                                success: false,
                                message: "Your Password is not matched with our database"
                            });
                        }
                        else {
                            bcryptjs_1.default.genSalt(10, function (err, salt) {
                                bcryptjs_1.default.hash(newPass, salt, function (err, hash) {
                                    hash_pass = hash;
                                    sequelize_postgres_1.default.sync().then(function () {
                                        customer_model_1.default.update({
                                            password: hash_pass
                                        }, { where: { customer_id: customer_id } })
                                            .then(function (result) {
                                            if (result) {
                                                // Send Email
                                                sendEmail_1.default({
                                                    from: "sgshubham04@gmail.com",
                                                    to: email,
                                                    cc: 'sgshubham04@gmail.com',
                                                    subject: 'Change Password',
                                                    html: welcome_message_1.output1
                                                });
                                                res.status(200).json({
                                                    sucess: true,
                                                    message: "You have changed your password"
                                                });
                                            }
                                        })
                                            .catch(function (err) {
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
                        .catch(function (err) {
                        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
                    });
                });
            });
        }
    });
};
exports.default = changePassword;
