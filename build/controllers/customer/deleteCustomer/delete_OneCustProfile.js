"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = __importDefault(require("../../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Delete Customer All Address
var deleteOneCustomer = function (req, res) {
    var id1 = parseInt(req.body.id);
    var id2 = parseInt(req.body.customer_id);
    if (id1 === id2) {
        /* client.query('delete from neo_user where id=$1',[id1])
         .then(()=>{
             res.status(200).json({success:"true",message:"One Customer Deleted"})
         })
         .catch(err=>{
             res.status(404).json({success:"false",error_message:err})

         }) */
        sequelize_postgres_1.default.sync().then(function () {
            customer_model_1.default.destroy({ where: { customer_id: id1 } })
                .then(function () {
                res.status(200).json({ success: true, message: "One Customer Deleted" });
            })
                .catch(function (err) {
                res.status(404).json({ success: false, error_message: err });
            });
        });
    }
    else {
        res.status(404).json({ success: false, message: "Customer id not matched" });
    }
};
//Available for Routes
exports.default = deleteOneCustomer;
