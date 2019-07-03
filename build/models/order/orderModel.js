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
var orderSchema = new Schema({
    order_id: {
        type: String,
        required: true
    },
    customer_id: {
        type: Number,
        required: true
    },
    product_id: {
        type: Number,
        ref: 'ProductList',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    product_cost: {
        type: Number
    },
    status: {
        type: String,
        required: true
    },
    isDelivered: {
        type: Boolean,
        required: true
    },
    total_cost: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
var OrderModel = mongoose.model('Order', orderSchema);
exports.default = OrderModel;
