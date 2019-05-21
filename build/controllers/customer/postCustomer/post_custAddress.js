"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Add Customer Address
var addAddress = function (req, res) {
    var id = parseInt(req.body.id);
    var schema = joi_1.default.object().keys({
        u_id: joi_1.default.number()
            .integer()
            .required(),
        u_address: joi_1.default.string()
            .min(3)
            .max(200)
            .required(),
        u_pincode: joi_1.default.string()
            .regex(/^[0-9]+$/)
            .min(6)
            .max(6)
            .required(),
        u_city: joi_1.default.string().required(),
        u_state: joi_1.default.string().required(),
        u_country: joi_1.default.string().required()
    });
    joi_1.default.validate({
        u_id: id,
        u_address: req.body.address,
        u_pincode: req.body.pincode,
        u_city: req.body.city,
        u_state: req.body.state,
        u_country: req.body.country
    }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: false, error_message: err.message });
        }
        else {
            /*client.query('Insert into customer_address(id,address,pincode,city,state,country) values($1,$2,$3,$4,$5,$6)',[id,req.body.address,req.body.pincode,req.body.city,req.body.state,req.body.country])
            .then(()=>{
                client.query('Select * from customer_address where id=$1',[id],(err,result)=>{
                    if(err)
                    res.status(404).json({success:"false",error_message:err})
                    else{
                        res.status(200).json({success:"true",message:"Updated Address",customer_address:result.rows})
                    }
                })
            })
            .catch((err)=>{
                res.status(404).json({success:"false",error_message:err})
            })*/
            sequelize_postgres_1.default.sync().then(function () {
                custAddress_model_1.default.create({
                    customer_id: req.body.id,
                    address: req.body.address,
                    pincode: req.body.pincode,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country
                })
                    .then(function (result) {
                    res.status(200).json({
                        success: true,
                        message: "Customer Address was registered successfully",
                        address: result
                    });
                })
                    .catch(function (err) {
                    res.status(404).json({
                        success: false,
                        message: "Something went wrong",
                        error_message: err
                    });
                });
            });
        }
    });
};
//Available for Routes
exports.default = addAddress;
