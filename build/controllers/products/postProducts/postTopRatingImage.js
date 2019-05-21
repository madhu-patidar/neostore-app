"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
var topRatingImage = function (req, res) {
    product_list_1.default.aggregate([
        {
            $sort: {
                product_rating: -1
            }
        },
        {
            $group: {
                _id: "$categ_id",
                products: { $push: "$$ROOT" }
            }
        },
        {
            $project: {
                DashboardProducts: {
                    $slice: ["$products", 1]
                }
            }
        }
    ], function (err, result) {
        if (err)
            res.status(404).json({ success: false, error_message: err });
        else {
            res.status(200).json({ success: true, products: result });
        }
    });
};
exports.default = topRatingImage;
