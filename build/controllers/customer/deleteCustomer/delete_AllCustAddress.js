"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Delete Customer All Address
var deleteAllAddress = function (req, res) {
    /*client.query('delete from customer_address')
    .then(()=>{
        res.status(200).json({success:"true",message:"All Address Deleted"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})

    })*/
    sequelize_postgres_1.default.sync().then(function () {
        custAddress_model_1.default.destroy({ where: {}, truncate: false })
            .then(function (result) {
            res.status(200).json({ success: true, message: "All Customer Address Deleted" });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, error_message: err });
        });
    });
};
//Available for Routes
exports.default = deleteAllAddress;
