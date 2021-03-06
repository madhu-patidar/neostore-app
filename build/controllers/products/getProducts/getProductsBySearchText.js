"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Get all Products by Search Text
var getAllProductsBySearchText = function (req, res) {
    var text = req.params.text;
    product_list_1.default.find({ product_name: { $regex: text } })
        .populate('_id')
        .populate('category_id')
        .populate('color_id')
        .exec(function (err, product) {
        if (err)
            res.status(404).json({ success: false, error_message: err });
        else
            res.status(200).json({ success: product.length !== 0 ? true : false, message: product.length !== 0 ? "All Products Data" : "No Data is available", product_details: product.length !== 0 ? product : "No details are available" });
    });
};
//Available for ProductRoutes
exports.default = getAllProductsBySearchText;
