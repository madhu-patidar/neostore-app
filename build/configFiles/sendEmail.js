"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sendmail_1 = __importDefault(require("sendmail"));
//Setup for sendmail package
var emailSender = sendmail_1.default({
    silent: false
});
var sendEmail = function (options) {
    return new Promise(function (resolve, reject) {
        emailSender(options, function (err, reply) {
            // if error happened or returned code is now started with 2**
            if (err || !reply.startsWith("2")) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
};
exports.default = sendEmail;
