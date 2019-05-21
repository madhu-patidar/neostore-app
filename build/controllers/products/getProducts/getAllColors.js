"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_color_1 = __importDefault(require("../../../models/products/product_color"));
var getAllColors = function (req, res) {
    product_color_1.default.find({})
        .then(function (result) {
        res.status(200).json({ success: true, message: "All Colors", color_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
exports.default = getAllColors;
