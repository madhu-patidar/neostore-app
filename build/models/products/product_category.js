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
//Mongoose Schema for Product Category
var ProductCategorySchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});
//Product Category Model
var ProdCategoryModel = mongoose.model('ProductCategory', ProductCategorySchema);
//Available for controller
exports.default = ProdCategoryModel;
