"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../configFiles/database_postgresql"));
var joi_1 = __importDefault(require("joi"));
var addAddress = function (req, res) {
    var id = req.body.id;
    var schema = joi_1.default.object().keys({
        u_id: joi_1.default.number().integer().required(),
        u_address: joi_1.default.string().min(3).max(200).required(),
        u_pincode: joi_1.default.string().regex(/^[0-9]+$/).min(6).max(6).required(),
        u_city: joi_1.default.string().required(),
        u_state: joi_1.default.string().required(),
        u_country: joi_1.default.string().required(),
    });
    joi_1.default.validate({ u_id: id, u_address: req.body.cust_address, u_pincode: req.body.cust_pincode, u_city: req.body.cust_city, u_state: req.body.cust_state, u_country: req.body.cust_country }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: "false", error_message: err.message });
        }
        else {
            database_postgresql_1.default.query('Insert into customer_address(cust_id,cust_address,cust_pincode,cust_city,cust_state,cust_country) values($1,$2,$3,$4,$5,$6)', [id, req.body.cust_address, req.body.cust_pincode, req.body.cust_city, req.body.cust_state, req.body.cust_country])
                .then(function () {
                database_postgresql_1.default.query('Select * from customer_address where cust_id=$1', [id], function (err, result) {
                    if (err)
                        res.status(404).json({ success: "false", error_message: err });
                    else {
                        res.status(200).json({ success: "true", message: "Updated Address", customer_address: result.rows });
                    }
                });
            })
                .catch(function (err) {
                res.status(404).json({ success: "false", error_message: err });
            });
        }
    });
};
exports.default = addAddress;
