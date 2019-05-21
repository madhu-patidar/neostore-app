"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Update Products by id
var updateProductRating = function (req, res) {
    var product_id = parseInt(req.body.product_id);
    if (product_id == undefined) {
        res.status(404).json({ success: false, message: "Please Provide Product Id" });
    }
    else {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(404).json({ success: false, message: "No Data found to update" });
        }
        else {
            product_list_1.default.find({ _id: product_id }, function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
                else if (result.length !== 0) {
                    if (req.body.product_rating) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_rating: req.body.product_rating }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    res.status(200).json({ success: true, message: "Product Rating Updated" });
                }
                else {
                    res.status(404).json({ success: false, message: "Please enter correct Product id" });
                }
            });
        }
    }
};
//Available for ProductRoutes
exports.default = updateProductRating;
