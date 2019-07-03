"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var loginBySocial = function (req, res) {
    var customer = [];
    var id = req.user.customer_id;
    jsonwebtoken_1.default.sign({ id: id }, 'secretKey', function (err, token) {
        customer.push({
            id: req.user.customer_id == null ? '' : req.user.customer_id,
            first_name: req.user.first_name == null ? '' : req.user.first_name,
            last_name: req.user.last_name == null ? '' : req.user.last_name,
            email: req.user.email == null ? '' : req.user.email,
            phone_no: req.user.phone_no == null ? '' : req.user.phone_no,
            gender: req.user.gender == null ? '' : req.user.gender,
            dob: req.user.dob == null ? '' : req.user.dob,
            profile_img: req.user.profile_img == null ? '' : req.user.profile_img,
            createdAt: req.user.createdAt == null ? '' : req.user.createdAt,
            updatedAt: req.user.updatedAt == null ? '' : req.user.updatedAt,
            token_value: token
        });
        res.status(200).json({ success: true, data: customer });
    });
};
exports.default = loginBySocial;
