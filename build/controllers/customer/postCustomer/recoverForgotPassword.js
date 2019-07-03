"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var recoverPassword = function (req, res) {
    var email = req.body.email;
    var newPass = req.body.newPass;
    var confirmPass = req.body.confirmPass;
    if (!req.body) {
        res.status(404).json({ success: false, message: "Body can not be blank" });
    }
    var schema = joi_1.default.object().keys({
        u_pass: joi_1.default.string().required(),
        u_confirmPass: joi_1.default.string().equal(joi_1.default.ref('u_pass')).required()
    });
    joi_1.default.validate({ u_pass: newPass, u_confirmPass: confirmPass }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            sequelize_postgres_1.default.sync().then(function () {
                customer_model_1.default.findOne({ where: { email: email } })
                    .then(function (result) {
                    if (result) {
                        bcryptjs_1.default.genSalt(10, function (err, salt) {
                            console.log("Salt>>", salt);
                            bcryptjs_1.default.hash(newPass, salt, function (err, hash) {
                                customer_model_1.default.update({ password: hash }, { where: { email: email } })
                                    .then(function (result) {
                                    res.status(200).json({ success: true, message: "Your account, registered with " + email + " has been recovered successfully" });
                                })
                                    .catch(function (err) {
                                    res.status(404).json({ success: false, message: 'Something went wrong', error_message: err });
                                });
                            });
                        });
                    }
                    else {
                        res.status(404).json({ success: true, message: "You are not a valis user" });
                    }
                })
                    .catch(function (err) {
                    res.status(404).json({ success: false, message: 'Something went wrong', error_message: err });
                });
            });
        }
    });
};
exports.default = recoverPassword;
