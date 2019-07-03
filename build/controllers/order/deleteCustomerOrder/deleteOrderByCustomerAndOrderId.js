"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orderModel_1 = __importDefault(require("../../../models/order/orderModel"));
//Delete All Orders
var deleteOrderByCustomerAndOrderId = function (req, res) {
    var customer_id = parseInt(req.body.id);
    var order_id = req.body.order_id;
    orderModel_1.default.deleteMany({ customer_id: customer_id, order_id: order_id })
        .then(function (result) {
        if (result.n !== 0)
            res.status(200).json({ success: result !== null ? true : false, message: result !== null ? "Orders were Deleted" : "No data is available", order_details: result !== null ? result : "No details are available" });
        else
            res.status(404).json({ success: false, message: "You did not add orders." });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for ProductRoutes
exports.default = deleteOrderByCustomerAndOrderId;
