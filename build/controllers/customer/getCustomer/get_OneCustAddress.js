"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
var getCustomerAddress = function (req, res) {
    var customer_id = parseInt(req.body.id);
    /*client.query('Select * from customer_address where id=$1',[cust_id])
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
        custAddress_model_1.default.findAll({ where: { customer_id: customer_id } })
            .then(function (result) {
            if (result.length !== 0) {
                res.status(200).json({ success: true, customer_address: result });
            }
            else
                res.status(404).json({ success: false, message: "You did not add any address. Please add atleast one address." });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, error_message: err });
        });
    });
};
exports.default = getCustomerAddress;
