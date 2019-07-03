"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orderModel_1 = __importDefault(require("../../../models/order/orderModel"));
var getCustomerOrder = function (req, res) {
    var customer_id = parseInt(req.body.id);
    var shipped = 0;
    var onTheWay = 0;
    var order_details = [];
    orderModel_1.default.find({ customer_id: customer_id })
        .then(function (result) {
        if (result.length == 0) {
            res
                .status(200)
                .json({ success: true, message: "You don't have orders" });
        }
        else {
            for (var i = 0; i < result.length; i++) {
                if (result[i].status == "Delivered" &&
                    result[i].isDelivered == true) {
                    shipped = shipped + 1;
                }
                else {
                    onTheWay = onTheWay + 1;
                }
                order_details.push({
                    order_id: result[i].order_id
                });
            }
            order_details.push({
                customer_id: customer_id,
                orders_shipped: shipped,
                orders_onTheWay: onTheWay
            });
            res
                .status(200)
                .json({
                success: true,
                message: "Your Order Details",
                order_details: order_details
            });
        }
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
exports.default = getCustomerOrder;
