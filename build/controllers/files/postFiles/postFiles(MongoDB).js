"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileModel_1 = __importDefault(require("../../../models/files/fileModel"));
//Add Multiple Files in MongoDB
var postFileInMongo = function (req, res) {
    var fileArray = [];
    if (!req.files)
        res.status(404).json({ success: false, message: "Please select files" });
    else {
        var files = req.files;
        for (var i = 0; i < files.length; i++) {
            if (fileArray.indexOf(files[i].filename) == -1)
                fileArray.push(files[i].filename);
        }
        var newfiles = new fileModel_1.default({
            fileName: fileArray
        });
        newfiles.save()
            .then(function (result) {
            res.status(200).json({ success: true, message: "Files were uploaded successfully" });
        })
            .catch(function (err) {
            res.status(404).json({ success: false, message: "Something went wrong", error_message: err });
        });
    }
};
//Available for FileRoutes
exports.default = postFileInMongo;
