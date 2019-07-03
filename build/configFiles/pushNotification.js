"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web_push_1 = __importDefault(require("web-push"));
// VAPID keys should only be generated only once.
var vapidKeys = web_push_1.default.generateVAPIDKeys();
web_push_1.default.setVapidDetails('mailto:shubham.gupta@neosofttech.com', vapidKeys.publicKey, vapidKeys.privateKey);
exports.default = web_push_1.default;
