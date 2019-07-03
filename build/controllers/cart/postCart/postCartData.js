"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
var cartData = function (req, res) {
    var customer_id = parseInt(req.body.customer_id);
    var product_id = parseInt(req.body.product_id);
    var quantity = parseInt(req.body.quantity);
    if (customer_id === parseInt(req.body.id)) {
        product_list_1.default.find({ _id: product_id }).select('product_cost')
            .then(function (result) {
            if (result.length !== 0) {
                cartModel_1.default.find({ customer_id: customer_id, product_id: product_id })
                    .then(function (cart) {
                    if (cart.length == 0) {
                        var newCart = new cartModel_1.default({
                            customer_id: parseInt(req.body.id),
                            product_id: product_id,
                            quantity: quantity,
                            product_cost: result[0].product_cost,
                            total_cost: result[0].product_cost * quantity
                        });
                        newCart.save()
                            .then(function (result) {
                            res.status(200).json({ success: true, message: "Product was added to your cart", cart_details: result });
                        })
                            .catch(function (err) {
                            res.status(404).json({ success: false, message: "Something went wrong", error_message: err.errmsg });
                        });
                    }
                    else {
                        res.status(404).json({ success: false, message: "This Product is already on your cart" });
                    }
                })
                    .catch(function (err) {
                    res.status(404).json({ success: false, message: "Something went wrong", error_message: err.errmsg });
                });
            }
            else {
                res.status(404).json({ success: false, message: "This Product is not available" });
            }
        })
            .catch(function (err) {
            res.status(404).json({ success: false, message: "Something went wrong", error_message: err.errmsg });
        });
    }
    else {
        res.status(404).json({ success: "false", message: "Customer id not matched" });
    }
};
exports.default = cartData;
