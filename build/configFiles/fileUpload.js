"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Setup for uploading files for user
var multer_1 = __importDefault(require("multer")); //Importing multer npm package
var path_1 = __importDefault(require("path")); //Importing path npm package
//Storing file on disk
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.resolve('uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
});
var upload = multer_1.default({
    storage: storage
});
//Exporting upload for other files to use it.
exports.default = upload;
