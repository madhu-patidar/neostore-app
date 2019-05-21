"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var Schema = mongoose.Schema;
//Mongoose Schema for Product List
var ProductListSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    category_id: {
        type: Number,
        ref: "ProductCategory"
    },
    color_id: {
        type: Number,
        ref: "ProductColor"
    },
    product_name: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    product_rating: {
        type: Number,
        required: true
    },
    product_producer: {
        type: String,
        required: true
    },
    product_cost: {
        type: Number,
        required: true
    },
    product_stock: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    product_dimension: {
        type: String
    },
    product_material: {
        type: String
    }
});
//Product List Model
var ProductListModel = mongoose.model('ProductList', ProductListSchema);
//Available for controller
exports.default = ProductListModel;
