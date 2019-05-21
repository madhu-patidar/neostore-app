"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Delete All Products
var deleteAllProducts = function (req, res) {
    product_list_1.default.deleteMany({})
        .then(function (result) {
        res.status(200).json({ success: result !== null ? true : false, message: result !== null ? "Product Deleted" : "No data is available", product_details: result !== null ? result : "No details are available" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for ProductRoutes
exports.default = deleteAllProducts;
