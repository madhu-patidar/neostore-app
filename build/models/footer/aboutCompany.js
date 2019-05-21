"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var Footer = new Schema({
    about_company: {
        type: String
    },
    email: {
        type: String
    },
    phone_no: {
        type: String
    },
    address: {
        type: String
    }
});
var FooterModel = mongoose_1.default.model('FooterData', Footer);
exports.default = FooterModel;
