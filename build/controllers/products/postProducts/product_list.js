"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
//Add Product Category
var postProductList = function (req, res) {
    var newProduct = new product_list_1.default({
        _id: req.body._id,
        category_id: req.body.category_id,
        color_id: req.body.color_id,
        product_name: req.body.product_name,
        product_image: req.file.filename,
        product_desc: req.body.product_desc,
        product_rating: req.body.product_rating,
        product_producer: req.body.product_producer,
        product_cost: req.body.product_cost,
        product_stock: req.body.product_stock,
        product_dimension: req.body.product_dimension,
        product_material: req.body.product_material
    });
    newProduct.save()
        .then(function (result) {
        res.status(200).json({ success: true, message: "Data was inserted successfully", product_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
//Available for ProductRoutes
exports.default = postProductList;
