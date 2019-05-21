"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Delete Customer All Address
var deleteAllCustomer = function (req, res) {
    /*client.query('delete from neo_user')
    .then(()=>{
        res.status(200).json({success:"true",message:"All Customer Deleted"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})

    }) */
    sequelize_postgres_1.default.sync().then(function () {
        customer_model_1.default.destroy({ where: {}, truncate: false })
            .then(function () {
            res.status(200).json({ success: true, message: "All Customer Deleted" });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, error_message: err });
        });
    });
};
//Available for Routes
exports.default = deleteAllCustomer;
