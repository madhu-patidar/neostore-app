"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../../configFiles/database_postgresql"));
//Update Customer Profile
var updateAllCustomer = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(404).json({ success: false, message: "No Data found to update" });
    }
    else {
        if (req.body.first_name) {
            database_postgresql_1.default.query('Update neo_user set first_name=$1 ', [req.body.first_name], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        if (req.body.last_name) {
            database_postgresql_1.default.query('Update neo_user set last_name=$1 ', [req.body.last_name], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        if (req.body.email) {
            database_postgresql_1.default.query('Update neo_user set email=$1 ', [req.body.email], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        if (req.body.phone_no) {
            database_postgresql_1.default.query('Update neo_user set phone_no=$1 ', [req.body.phone_no], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        if (req.body.gender) {
            database_postgresql_1.default.query('Update neo_user set gender=$1 ', [req.body.gender], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        if (req.body.dob) {
            database_postgresql_1.default.query('Update neo_user set dob=$1 ', [req.body.dob], function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
            });
        }
        try {
            if (req.file.filename) {
                database_postgresql_1.default.query('Update neo_user set profile_img=$1 ', [req.file.filename], function (err, result) {
                    if (err)
                        res.status(404).json({ success: false, error_message: err });
                });
            }
        }
        catch (err) { }
        res.status(200).json({ success: false, message: "All Customer were updated" });
    }
};
//Available for Routes
exports.default = updateAllCustomer;
