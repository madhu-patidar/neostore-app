"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var rotating_file_stream_1 = __importDefault(require("rotating-file-stream"));
var logDirectory = path_1.default.join(__dirname, '../logs');
// ensure log directory exists
fs_1.default.existsSync(logDirectory) || fs_1.default.mkdirSync(logDirectory);
var generator = function () {
    var d = new Date();
    var month = d.toLocaleString('en-us', { month: 'long' });
    var year = d.getFullYear();
    return month + "-" + year + "/" + d.toDateString() + "-" + "-log-api.log";
};
// create a rotating write stream
var accessLogStream = rotating_file_stream_1.default(generator, {
    interval: '1d',
    path: logDirectory,
});
exports.default = accessLogStream;
