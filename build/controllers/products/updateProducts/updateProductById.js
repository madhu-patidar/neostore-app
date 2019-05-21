"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Update Products by id
var updateProductsById = function (req, res) {
    var product_id = parseInt(req.params.product_id);
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
                    if (req.body.product_name) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_name: req.body.product_name }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.category_id) {
                        product_list_1.default.findByIdAndUpdate(product_id, { category_id: req.body.category_id }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.color_id) {
                        product_list_1.default.findByIdAndUpdate(product_id, { color_id: req.body.color_id }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_desc) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_desc: req.body.product_desc }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    try {
                        if (req.file.filename) {
                            product_list_1.default.findByIdAndUpdate(product_id, { product_image: req.file.filename }, function (err, result) {
                                if (err)
                                    res.status(404).json({ success: false, error_message: err });
                            });
                        }
                    }
                    catch (err) {
                    }
                    if (req.body.product_rating) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_rating: req.body.product_rating }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_producer) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_producer: req.body.product_producer }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_cost) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_cost: req.body.product_cost }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_stock) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_stock: req.body.product_stock }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_dimension) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_dimension: req.body.product_dimension }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.product_material) {
                        product_list_1.default.findByIdAndUpdate(product_id, { product_material: req.body.product_material }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    res.status(200).json({ success: true, message: "Product Updated" });
                }
                else {
                    res.status(404).json({ success: false, message: "Please enter correct Product id" });
                }
            });
        }
    }
};
//Available for ProductRoutes
exports.default = updateProductsById;
