"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_color_1 = __importDefault(require("../../../models/products/product_color"));
//Get Colors By its Id
var getColorsByColorId = function (req, res) {
    var color_id = req.params.color_id;
    product_color_1.default.find({ _id: color_id })
        .then(function (result) {
        res.status(200).json({ success: true, message: "Color Fetched", color_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
//Available for ProductRoutes
exports.default = getColorsByColorId;
