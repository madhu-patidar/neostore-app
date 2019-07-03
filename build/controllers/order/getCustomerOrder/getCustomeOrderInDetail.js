"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orderModel_1 = __importDefault(require("../../../models/order/orderModel"));
var getCustomerOrderInDetail = function (req, res) {
    var order_id = req.params.order_id;
    var customer_id = parseInt(req.body.id);
    orderModel_1.default.find({ customer_id: customer_id, order_id: order_id })
        .populate('product_id')
        .then(function (result) {
        if (result.length !== 0) {
            res.status(200).json({ success: true, message: "Your Order Details", order_details: result });
        }
        else {
            res.status(200).json({ success: true, message: "Data not found" });
        }
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
exports.default = getCustomerOrderInDetail;
