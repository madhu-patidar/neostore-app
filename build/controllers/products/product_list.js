"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../models/products/product_list"));
var productList = function (req, res) {
    var newProduct = new product_list_1.default({
        _id: req.body._id,
        categ_id: req.body.categ_id,
        color_id: req.body.color_id,
        prod_name: req.body.prod_name,
        prod_image: req.file.filename,
        prod_desc: req.body.prod_desc,
        prod_rating: req.body.prod_rating,
        prod_producer: req.body.prod_producer,
        prod_cost: req.body.prod_cost,
        prod_stock: req.body.prod_stock,
        prod_created_at: req.body.prod_created_at,
        prod_dimension: req.body.prod_dimension,
        prod_material: req.body.prod_material
    });
    newProduct.save()
        .then(function (result) {
        res.status(200).json({ success: "true", message: "Data was inserted successfully", data: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: "false", message: "Something went wrong", error_message: err });
    });
};
exports.default = productList;
