"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_category_1 = __importDefault(require("../../../models/products/product_category"));
//Update Products by id
var updateCategoryById = function (req, res) {
    var category_id = parseInt(req.body.category_id);
    if (category_id == undefined) {
        res.status(404).json({ success: false, message: "Please Provide Category Id" });
    }
    else {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(404).json({ success: false, message: "No Data found to update" });
        }
        else {
            product_category_1.default.find({ _id: category_id }, function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
                else if (result.length !== 0) {
                    if (req.body.category_name) {
                        product_category_1.default.findByIdAndUpdate(category_id, { category_name: req.body.category_name }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    res.status(200).json({ success: true, message: "Category Updated" });
                }
                else {
                    res.status(404).json({ success: false, message: "Please enter correct Category id" });
                }
            });
        }
    }
};
//Available for ProductRoutes
exports.default = updateCategoryById;
