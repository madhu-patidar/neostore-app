"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var productImages_1 = __importDefault(require("../../../models/products/productImages"));
//Add Product Category
var getProductImages = function (req, res) {
    productImages_1.default.find({})
        .then(function (result) {
        res.status(200).json({ success: true, category_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
//Available for ProductRoutes
exports.default = getProductImages;
