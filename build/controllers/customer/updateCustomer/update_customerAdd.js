"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custAddress_model_1 = __importDefault(require("../../../models/customer/custAddress_model"));
var sequelize_postgres_1 = __importDefault(require("../../../configFiles/sequelize-postgres"));
//Update Customer Profile
var updateAddress = function (req, res) {
    var id1 = parseInt(req.body.customer_id);
    var id2 = parseInt(req.body.address_id);
    if (id1 === req.body.id) {
        if (req.body.address == undefined && req.body.city == undefined && req.body.pincode == undefined && req.body.state == undefined && req.body.country == undefined) {
            res.status(404).json({ success: false, message: "Nothing to update" });
        }
        else {
            sequelize_postgres_1.default.sync().then(function () {
                if (req.body.address) {
                    custAddress_model_1.default.update({ address: req.body.address }, { where: { customer_id: id1, address_id: id2 } });
                }
                if (req.body.pincode) {
                    custAddress_model_1.default.update({ pincode: req.body.pincode }, { where: { customer_id: id1, address_id: id2 } });
                }
                if (req.body.city) {
                    custAddress_model_1.default.update({ city: req.body.city }, { where: { customer_id: id1, address_id: id2 } });
                }
                if (req.body.state) {
                    custAddress_model_1.default.update({ state: req.body.state }, { where: { customer_id: id1, address_id: id2 } });
                }
                if (req.body.country) {
                    custAddress_model_1.default.update({ country: req.body.country }, { where: { customer_id: id1, address_id: id2 } });
                }
                res.status(200).json({ success: true, message: "Address Updated" });
            });
        }
        /*client.query('Select * from customer_address where id=$1 and address_id=$2',[id1,id2],(err,result)=>{
            if(err)
            res.status(404).json({success:"false",error_message:err})
            if(result.rows.length!==0){
                if(req.body.constructor === Object && Object.keys(req.body).length === 0){
                    res.status(404).json({success:"false",message:"No Data found to update"})
                  }
                  else{
                      if(req.body.address){
                        client.query('Update customer_address set address=$1 where id=$2 and address_id=$3',[req.body.address,req.body.id,id2],(err,result)=>{
                            if(err)
                             res.status(404).json({success:"false",error_message:err})
                        })
                      }
                      if(req.body.pincode){
                        client.query('Update customer_address set pincode=$1 where id=$2 and address_id=$3',[req.body.pincode,req.body.id,id2],(err,result)=>{
                            if(err)
                             res.status(404).json({success:"false",error_message:err})
                        })
    
                      }
                      if(req.body.city){
                        client.query('Update customer_address set city=$1 where id=$2 and address_id=$3',[req.body.city,req.body.id,id2],(err,result)=>{
                            if(err)
                             res.status(404).json({success:"false",error_message:err})
                        })
    
                      }
                      if(req.body.state){
                        client.query('Update customer_address set state=$1 where id=$2 and address_id=$3',[req.body.state,req.body.id,id2],(err,result)=>{
                            if(err)
                             res.status(404).json({success:"false",error_message:err})
                        })
    
                      }
                      if(req.body.country){
                        client.query('Update customer_address set country=$1 where id=$2 and address_id=$3',[req.body.country,req.body.id,id2],(err,result)=>{
                            if(err)
                             res.status(404).json({success:"false",error_message:err})
                        })
    
                      }
    
                res.status(200).json({success:"false",message:"Your address is updated"})
    
                  }
            }
            else{
                res.status(404).json({success:"false",message:"Please enter valid address id"})
            }
        })*/
    }
    else {
        res.status(404).json({ success: "false", message: "Customer id not matched" });
    }
};
//Available for Routes
exports.default = updateAddress;
