"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Delete Customer One Address
var deleteAddress = function (req, res) {
    var id = parseInt(req.body.id);
    var id1 = parseInt(req.body.address_id);
    if (req.body.address_id == undefined) {
        res.status(404).json({ success: false, message: "Please provide your address id" });
    }
    else {
        /*client.query('Select id,address_id from customer_address where id=$1 and address_id=$2',[id,id1])
        .then(result=>{
            if(result.rows.length!==0){
                client.query('delete from customer_address where address_id=$1 and id=$2',[id1,id])
            .then(()=>{
                res.status(200).json({success:"true",message:"Address Deleted"})
            })
            }
            else{
                res.status(404).json({success:"false",message:"Please provide correct id"})
            }
        })  */
        sequelize_postgres_1.default.sync().then(function () {
            custAddress_model_1.default.destroy({ where: { address_id: id1, customer_id: id } })
                .then(function (result) {
                if (result !== 0)
                    res.status(200).json({ success: true, message: "One Customer Address Deleted" });
                else
                    res.status(404).json({ success: false, message: "Address is not there. Please enter correct address id." });
            })
                .catch(function (err) {
                res.status(404).json({ success: false, error_message: err });
            });
        });
    }
};
//Available for Routes
exports.default = deleteAddress;
