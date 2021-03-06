"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var termsAndConditions_1 = __importDefault(require("../../../models/footer/termsAndConditions"));
var getAboutCompanyTerms = function (req, res) {
    termsAndConditions_1.default.find({})
        .then(function (result) {
        if (result.length !== 0)
            res.status(200).json({ success: true, /*message:"All Categories",*/ termsAndConditions_details: result });
        else
            res.status(200).json({ success: false, /*message:"All Categories",*/ message: "Something went wrong" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
exports.default = getAboutCompanyTerms;
