"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//MongoDB Credential
exports.URL = process.env.mongoURL;
//Server Port
exports.PORT = process.env.PORT;
//PostgreSQL Credentials
exports.user = process.env.user;
exports.host = process.env.host;
exports.password = process.env.password;
exports.database = process.env.database;
exports.port = process.env.port;
