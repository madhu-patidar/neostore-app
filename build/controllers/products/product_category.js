"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_category_1 = __importDefault(require("../../models/products/product_category"));
var productCategory = function (req, res) {
    var newCategory = new product_category_1.default(req.body);
    newCategory.save()
        .then(function (result) {
        res.status(200).json({ success: "true", message: "Data was inserted successfully", data: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: "false", message: "Something went wrong", error_message: err.errmsg });
    });
};
exports.default = productCategory;
