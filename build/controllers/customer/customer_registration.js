"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../configFiles/database_postgresql"));
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var insertCustomerData = function (req, res) {
    var pass = req.body.cust_pass;
    var confirm_pass = req.body.cust_confirmPass;
    var hash_pass;
    if (!req.body)
        res.status(404).json({ success: "false", message: "Body can not be blank" });
    var schema = joi_1.default.object().keys({
        u_email: joi_1.default.string().email({ minDomainAtoms: 2 }).required(),
        u_pass: joi_1.default.string().required(),
        u_cofirmPass: joi_1.default.string().required(),
        u_MobNumber: joi_1.default.string().regex(/^[0-9]+$/).min(10).max(10).required(),
        u_gender: joi_1.default.string().required()
    });
    joi_1.default.validate({ u_email: req.body.cust_email, u_pass: req.body.cust_pass, u_cofirmPass: req.body.cust_confirmPass, u_MobNumber: req.body.cust_phone, u_gender: req.body.cust_gender }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: "false", error_message: err.message });
        }
        else {
            if (pass.localeCompare(confirm_pass) == 0) {
                bcryptjs_1.default.genSalt(10, function (err, salt) {
                    bcryptjs_1.default.hash(pass, salt, function (err, hash) {
                        if (err)
                            res.status(404).json(err);
                        else {
                            hash_pass = hash;
                            database_postgresql_1.default.query('Insert into neo_user(cust_email,cust_pass,cust_phone,cust_gender) values($1,$2,$3,$4)', [req.body.cust_email, hash_pass, req.body.cust_phone, req.body.cust_gender], function (err, result) {
                                if (err) {
                                    res.status(404).json({ success: "false", message: err });
                                }
                                else {
                                    res.status(200).json({ success: "true", message: "Customer was registered successfully" });
                                }
                            });
                        }
                    });
                });
            }
            else {
                res.status(404).json({ success: "false", meesage: "Password and confirm passwod should be same" });
            }
        }
    });
};
exports.default = insertCustomerData;
