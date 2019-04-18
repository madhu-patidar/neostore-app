"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../models/products/product_list"));
var getAllProducts = function (req, res) {
    product_list_1.default.find({})
        .populate('categ_id')
        .populate('color_id')
        .exec(function (err, product) {
        if (err)
            res.status(404).json({ success: "false", error_message: err });
        else
            res.status(200).json({ success: "true", message: "All Products Data", data: product });
    });
};
exports.default = getAllProducts;
