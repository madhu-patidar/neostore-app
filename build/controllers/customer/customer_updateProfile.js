"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../configFiles/database_postgresql"));
var joi_1 = __importDefault(require("joi"));
var updateProfile = function (req, res) {
    var id = req.body.id;
    var schema = joi_1.default.object().keys({
        u_Fname: joi_1.default.string().regex(/^[A-Za-z]+$/).required(),
        u_Lname: joi_1.default.string().regex(/^[A-Za-z]+$/).required(),
        u_email: joi_1.default.string().email({ minDomainAtoms: 2 }).required(),
        u_DOB: joi_1.default.string().regex(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/).required(),
        u_phone: joi_1.default.string().regex(/^[0-9]+$/).min(10).max(10).required(),
        u_gender: joi_1.default.string().required(),
    });
    joi_1.default.validate({ u_Fname: req.body.cust_Fname, u_Lname: req.body.cust_Lname, u_email: req.body.cust_email, u_DOB: req.body.cust_dob, u_phone: req.body.cust_phone, u_gender: req.body.cust_gender }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: "false", error_message: err.message });
        }
        else {
            database_postgresql_1.default.query('Update neo_user set cust_fname=$1,cust_lname=$2,cust_email=$3,cust_dob=$4,cust_phone=$5,cust_gender=$6,cust_image=$7 where cust_id=$8', [req.body.cust_Fname, req.body.cust_Lname, req.body.cust_email, req.body.cust_dob, req.body.cust_phone, req.body.cust_gender, req.file.filename, id])
                .then(function (user) {
                if (user) {
                    database_postgresql_1.default.query('Select cust_id,cust_fname,cust_lname,cust_email,cust_dob,cust_phone,cust_gender,cust_image,cust_created_at from neo_user where cust_id=$1', [id], function (err, result) {
                        if (result) {
                            res.status(200).json({ success: "true", message: "Updated profile", customer_details: result.rows });
                        }
                        else {
                            res.status(404).json({ success: "false", erro_message: err });
                        }
                    });
                }
            })
                .catch(function (err) {
                res.status(404).json({ success: "false", message: err });
            });
        }
    });
};
exports.default = updateProfile;
