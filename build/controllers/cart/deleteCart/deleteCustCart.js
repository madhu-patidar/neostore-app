"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
//Update Products by id
var deleteCartByCustId = function (req, res) {
    var customer_id = parseInt(req.body.customer_id);
    var product_id = parseInt(req.body.product_id);
    if (customer_id == undefined) {
        res.status(404).json({ success: false, message: "Please Provide Category Id" });
    }
    else {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(404).json({ success: false, message: "No Data found to update" });
        }
        else {
            if (customer_id === parseInt(req.body.id)) {
                cartModel_1.default.find({ customer_id: customer_id, product_id: product_id }, function (err, result) {
                    if (err)
                        res.status(404).json({ success: false, error_message: err });
                    else if (result.length !== 0) {
                        cartModel_1.default.deleteOne({ customer_id: customer_id, product_id: product_id }, function (err) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                        res.status(200).json({ success: true, message: "Product Deleted" });
                    }
                    else {
                        res.status(404).json({ success: false, message: "Please enter correct data" });
                    }
                });
            }
            else {
                res.status(404).json({ success: false, message: "Customer id not matched" });
            }
        }
    }
};
//Available for ProductRoutes
exports.default = deleteCartByCustId;
