"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileModel_1 = __importDefault(require("../../../models/files/fileModel"));
//Delete All Products
var deleteAllFilesFromMongo = function (req, res) {
    fileModel_1.default.deleteMany({})
        .then(function (result) {
        res.status(200).json({ success: result !== null ? true : false, message: result !== null ? "All Files Deleted" : "No data is available" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for ProductRoutes
exports.default = deleteAllFilesFromMongo;
