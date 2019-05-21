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
//Mongoose Schema for Product Color
var ProductColorSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    color_name: {
        type: String,
        required: true,
    },
    color_parent: {
        type: String,
        required: true,
    },
    color_code: {
        type: String,
        required: true
    }
});
//Product Color Model
var ProductColorModel = mongoose.model('ProductColor', ProductColorSchema);
//Available for controller
exports.default = ProductColorModel;
