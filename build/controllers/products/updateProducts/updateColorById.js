"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_color_1 = __importDefault(require("../../../models/products/product_color"));
//Update Color by id
var updateColorById = function (req, res) {
    var color_id = parseInt(req.body.color_id);
    if (color_id == undefined) {
        res.status(404).json({ success: false, message: "Please Provide Color Id" });
    }
    else {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(404).json({ success: false, message: "No Data found to update" });
        }
        else {
            product_color_1.default.find({ _id: color_id }, function (err, result) {
                if (err)
                    res.status(404).json({ success: false, error_message: err });
                else if (result.length !== 0) {
                    if (req.body.color_parent) {
                        product_color_1.default.findByIdAndUpdate(color_id, { color_parent: req.body.color_parent }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.color_name) {
                        product_color_1.default.findByIdAndUpdate(color_id, { color_name: req.body.color_name }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    if (req.body.color_code) {
                        product_color_1.default.findByIdAndUpdate(color_id, { color_code: req.body.color_code }, function (err, result) {
                            if (err)
                                res.status(404).json({ success: false, error_message: err });
                        });
                    }
                    res.status(200).json({ success: true, message: "Color Updated" });
                }
                else {
                    res.status(404).json({ success: false, message: "Please enter correct Color id" });
                }
            });
        }
    }
};
//Available for ProductRoutes
exports.default = updateColorById;
