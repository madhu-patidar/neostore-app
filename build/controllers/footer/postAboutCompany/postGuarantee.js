"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var guaranteeModel_1 = __importDefault(require("../../../models/footer/guaranteeModel"));
var postAboutCompanyGuaantee = function (req, res) {
    var guaranteeData = new guaranteeModel_1.default({
        fileName: req.file.filename
    });
    guaranteeData.save()
        .then(function (result) {
        res.status(200).json({ success: true, message: "Data Inserted", guarantee_details: result });
    })
        .catch(function (err) {
        res.status(200).json({ success: false, error_message: err });
    });
};
exports.default = postAboutCompanyGuaantee;
