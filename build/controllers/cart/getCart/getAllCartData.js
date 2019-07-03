"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
//Get Products By its color
var getAllCartData = function (req, res) {
    //Fetch data first from Product collection then category and color collection
    cartModel_1.default.find()
        .populate([{ path: 'product_id', populate: { path: 'category_id' } }])
        .populate([{ path: 'product_id', populate: { path: 'color_id' } }])
        .populate([{ path: 'product_id', populate: { path: '_id' } }])
        .exec(function (err, product) {
        if (err)
            res.status(404).json({ success: false, error_message: err });
        else
            res.status(200).json({ success: product.length !== 0 ? true : false, message: product.length !== 0 ? "Product on Cart" : "No Product is available", product_details: product.length !== 0 ? product : "No details are available" });
    });
};
//Available for ProductRoutes
exports.default = getAllCartData;
