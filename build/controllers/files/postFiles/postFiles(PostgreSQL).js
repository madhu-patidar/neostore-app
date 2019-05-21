"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../../configFiles/database_postgresql"));
//Add multiple files in PostgreSQL
var postFilesinPostgreSQL = function (req, res) {
    var fileArray = [];
    if (!req.files)
        res.status(404).json({ success: false, message: "Please select files" });
    else {
        var files = req.files;
        for (var i = 0; i < files.length; i++) {
            if (fileArray.indexOf(files[i].filename) == -1)
                fileArray.push(files[i].filename);
        }
        database_postgresql_1.default.query('Insert into files(fileName) values($1)', [fileArray], function (err, result) {
            if (err) {
                res.status(404).json({ success: false, message: err });
            }
            else {
                res.status(200).json({ success: true, message: "Files were uploaded successfully" });
            }
        });
    }
};
//Available for FileRoutes
exports.default = postFilesinPostgreSQL;
