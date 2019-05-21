"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../../configFiles/database_postgresql"));
//Delete All Files
var deleteAllFiles = function (req, res) {
    database_postgresql_1.default.query('delete from files')
        .then(function () {
        res.status(200).json({ success: true, message: "All Files Deleted" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for Routes
exports.default = deleteAllFiles;
