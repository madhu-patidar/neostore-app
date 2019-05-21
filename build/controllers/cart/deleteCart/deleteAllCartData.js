"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartModel_1 = __importDefault(require("../../../models/cart/cartModel"));
//Delete All Cart Products
var deleteAllCartData = function (req, res) {
    cartModel_1.default.deleteMany({})
        .then(function (result) {
        res.status(200).json({ success: result !== null ? true : false, /*message:result!==null?"Cart Data Deleted":"No data is available",*/ cart_data: result !== null ? result : "No details are available" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for ProductRoutes
exports.default = deleteAllCartData;
