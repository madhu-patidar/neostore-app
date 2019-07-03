"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../../../models/products/product_list"));
var sortByAscending = function (req, res) {
    var id = parseInt(req.params.customer_id);
    var customer_id = parseInt(req.body.id);
    if (id == customer_id) {
        product_list_1.default.aggregate([
            {
                $sort: {
                    product_name: 1
                }
            }
        ], function (err, result) {
            if (err)
                res.status(404).json({ success: false, message: 'Something went wrong', error_message: err });
            else {
                res.status(200).json({ success: true, message: 'Products in Ascending order', products: result });
            }
        });
    }
    else {
        res.status(200).json({ success: false, message: 'You are not authourised customer' });
    }
};
exports.default = sortByAscending;
