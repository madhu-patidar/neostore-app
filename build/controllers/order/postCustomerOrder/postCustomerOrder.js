"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orderModel_1 = __importDefault(require("../../../models/order/orderModel"));
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
var postCustomerOrder = function (req, res) {
    var customer_id = parseInt(req.body.id);
    var status = 'In Progress';
    var isDelivered = false;
    var count = 0;
    var order_id = 0;
    cartModel_1.default.find({ customer_id: customer_id })
        .then(function (cart) {
        if (cart.length !== 0) {
            orderModel_1.default.aggregate([{
                    $sort: {
                        order_id: -1
                    }
                }], function (err, result) {
                if (result.length !== 0) {
                    var id = result[0].order_id;
                    var charId = id.split('');
                    var lastid = parseInt(charId[charId.length - 1]);
                    var sum = lastid + 1;
                    order_id = 'OR0' + sum;
                }
                else {
                    order_id = 'OR0'.concat(count + 1);
                }
                var _loop_1 = function (i) {
                    orderModel_1.default.find({ customer_id: customer_id, product_id: cart[i].product_id })
                        .then(function (order_data) {
                        if (order_data.length == 0) {
                            var newOrder = new orderModel_1.default({
                                order_id: order_id,
                                customer_id: customer_id,
                                product_id: cart[i].product_id,
                                quantity: cart[i].quantity,
                                product_cost: cart[i].product_cost,
                                status: status,
                                isDelivered: isDelivered,
                                total_cost: cart[i].total_cost
                            });
                            newOrder.save()
                                .then(function (result) {
                                //res.status(200).json({success:true,message:"Your Orders were added successfully"})
                            });
                        }
                    })
                        .catch(function (err) {
                        res.status(404).json({ success: false, message: 'Something went wrong', error_message: err });
                    });
                };
                for (var i = 0; i < cart.length; i++) {
                    _loop_1(i);
                }
                res.status(200).json({ success: true, message: "Your Orders were added successfully" });
            });
        }
        else {
            res.status(404).json({ success: false, message: 'You did not add any single product on cart' });
        }
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: 'Something went wrong', error_message: err });
    });
};
exports.default = postCustomerOrder;
