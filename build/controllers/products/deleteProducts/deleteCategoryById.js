"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_category_1 = __importDefault(require("../../../models/products/product_category"));
//Delete category by id
var deleteCategoryById = function (req, res) {
    var category_id = parseInt(req.body.category_id);
    product_category_1.default.findByIdAndRemove({ _id: category_id })
        .then(function (result) {
        res.status(200).json({ success: result !== null ? true : false, message: result !== null ? "Category Deleted" : "No data is available", category_details: result !== null ? result : "No details are available" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for ProductRoutes
exports.default = deleteCategoryById;
