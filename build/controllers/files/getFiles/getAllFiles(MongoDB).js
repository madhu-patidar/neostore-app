"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileModel_1 = __importDefault(require("../../../models/files/fileModel"));
//Get All files from Mongo
var getAllFilesFromMongo = function (req, res) {
    fileModel_1.default.find({})
        .then(function (result) {
        res.status(200).json({ success: true, message: "All Files", file_details: result });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
    });
};
//Available for FileRoutes
exports.default = getAllFilesFromMongo;
