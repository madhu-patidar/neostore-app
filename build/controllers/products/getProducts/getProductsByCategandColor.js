"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Get Products By its category and color
var getProductsByColorandCateg = function (req, res) {
    var color_id = req.params.color_id;
    var category_id = req.params.category_id;
    product_list_1.default.find({ color_id: color_id, category_id: category_id })
        .populate('category_id')
        .populate('color_id')
        .exec(function (err, product) {
        if (err)
            res.status(404).json({ success: false, error_message: err });
        else
            res.status(200).json({ success: product.length !== 0 ? true : false, message: product.length !== 0 ? "Product by category and color" : "No Data is available", product_details: product.length !== 0 ? product : "No details are available" });
    });
};
//Available for ProductRoutes
exports.default = getProductsByColorandCateg;
