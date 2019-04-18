"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../configFiles/database_postgresql"));
var deleteAddress = function (req, res) {
    var id = req.body.id;
    var id1 = req.params.id;
    if (req.params.id == 'undefined') {
        res.status(404).json({ success: "false", message: "Please provide your address id" });
    }
    else {
        database_postgresql_1.default.query('Select cust_id,address_id from customer_address where cust_id=$1 and address_id=$2', [id, id1])
            .then(function (result) {
            if (result.rows.length !== 0) {
                database_postgresql_1.default.query('delete from customer_address where address_id=$1 and cust_id=$2', [id1, id])
                    .then(function () {
                    res.status(200).json({ success: "true", message: "Address Deleted" });
                });
            }
            else {
                res.status(404).json({ success: "false", message: "Please provide correct id" });
            }
        });
    }
};
exports.default = deleteAddress;
