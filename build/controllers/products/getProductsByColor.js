"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../models/products/product_list"));
var getProductsByColor = function (req, res) {
    var color_id = req.params.color_id;
    var categ_id = req.params.categ_id;
    product_list_1.default.find({ color_id: color_id, categ_id: categ_id })
        .populate('categ_id')
        .populate('color_id')
        .exec(function (err, product) {
        if (err)
            res.status(404).json({ success: "false", error_message: err });
        else
            res.status(200).json({ success: "true", message: "Product by category and color", data: product });
    });
};
exports.default = getProductsByColor;
