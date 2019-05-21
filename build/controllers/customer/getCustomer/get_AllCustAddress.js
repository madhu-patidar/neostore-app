"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var getCustomerAllAddress = function (req, res) {
    /*client.query('Select * from customer_address')
    .then(result=>{
        if(result){
            res.status(200).json({success:"true",customer_address:result.rows})
        }
        else
        res.status(404).json({success:"false",message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:"false",error_message:err})
    })*/
    sequelize_postgres_1.default.sync().then(function () {
        custAddress_model_1.default.findAll()
            .then(function (result) {
            if (result) {
                res.status(200).json({ success: true, customer_address: result });
            }
            else
                res.status(404).json({ success: false, message: "No data found" });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, error_message: err });
        });
    });
};
exports.default = getCustomerAllAddress;
