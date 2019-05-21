"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
var cartData = function (req, res) {
    var customer_id = parseInt(req.body.customer_id);
    if (customer_id === parseInt(req.body.id)) {
        var newCart = new cartModel_1.default({
            customer_id: parseInt(req.body.id),
            product_id: req.body.product_id,
            quantity: req.body.quantity
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
        res.status(404).json({ success: "false", message: "Customer id not matched" });
    }
};
exports.default = cartData;
