"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var termsAndConditions_1 = __importDefault(require("../../../models/footer/termsAndConditions"));
var postAboutCompanyTerms = function (req, res) {
    var termsData = new termsAndConditions_1.default({
        fileName: req.file.filename
    });
    termsData.save()
        .then(function (result) {
        res.status(200).json({ success: true, message: "Data Inserted", termsAndConditions_details: result });
    })
        .catch(function (err) {
        res.status(200).json({ success: false, error_message: err });
    });
};
exports.default = postAboutCompanyTerms;
