"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aboutCompany_1 = __importDefault(require("../../../models/footer/aboutCompany"));
var postAboutCompany = function (req, res) {
    var footerData = new aboutCompany_1.default(req.body);
    footerData.save()
        .then(function (result) {
        res.status(200).json({ success: true, message: "Data Inserted", details: result });
    })
        .catch(function (err) {
        res.status(200).json({ success: false, error_message: err });
    });
};
exports.default = postAboutCompany;
