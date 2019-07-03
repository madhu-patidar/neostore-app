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
var ProductSubImages = new Schema({
    _id: {
        type: Number,
        required: true
    },
    product_subImages: {
        type: [{ type: String }],
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});
//Product Category Model
var ProductSubImagesModel = mongoose.model('ProductSubImages', ProductSubImages);
//Available for controller
exports.default = ProductSubImagesModel;
