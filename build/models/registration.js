"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../configFiles/database"));
var register_table = database_1.default.query('Create table user_registration (email_id text unique,password text,phone_no number,gender text');
exports.default = register_table;
