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
var ProductListSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    categ_id: {
        type: Number,
        ref: "ProductCategory"
    },
    color_id: {
        type: Number,
        ref: "ProductColor"
    },
    prod_name: {
        type: String,
        required: true
    },
    prod_image: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String,
        required: true
    },
    prod_rating: {
        type: Number,
        required: true
    },
    prod_producer: {
        type: String,
        required: true
    },
    prod_cost: {
        type: Number,
        required: true
    },
    prod_stock: {
        type: Number,
        required: true
    },
    prod_created_at: {
        type: Date,
        default: Date.now
    },
    prod_dimension: {
        type: String
    },
    prod_material: {
        type: String
    }
});
var ProductListModel = mongoose.model('ProductList', ProductListSchema);
exports.default = ProductListModel;
