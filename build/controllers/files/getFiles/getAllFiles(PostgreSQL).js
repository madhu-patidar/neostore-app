"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_postgresql_1 = __importDefault(require("../../../configFiles/database_postgresql"));
//Get All files from PostgreSQL
var getAllFiles = function (req, res) {
    var data;
    var store;
    var fileArray = [];
    database_postgresql_1.default.query('Select * from files')
        .then(function (result) {
        if (result) {
            for (var i = 0; i < result.rows.length; i++) {
                data = result.rows[i];
                var file = data.filename;
                var fileId = data.id;
                store = file.split(',');
                if (fileArray.indexOf(fileId) == -1) {
                    fileArray.push({
                        id: fileId,
                        filename: store
                    });
                }
            }
            res.status(200).json({ success: true, file_details: fileArray });
        }
        else
            res.status(404).json({ success: false, message: "No data found" });
    })
        .catch(function (err) {
        res.status(404).json({ success: false, error_message: err });
    });
};
//Available for FileRoutes
exports.default = getAllFiles;
