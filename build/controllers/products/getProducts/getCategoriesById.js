"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_category_1 = __importDefault(require("../../../models/products/product_category"));
//Get Products By its Id
var getCategoriesByCategId = function (req, res) {
    var category_id = parseInt(req.params.category_id);
    product_category_1.default.find({ _id: category_id })
        .then(function (result) {
        res.status(200).json({ success: true, message: "Category Fetched", category_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
//Available for ProductRoutes
exports.default = getCategoriesByCategId;
