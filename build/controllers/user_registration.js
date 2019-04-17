"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var insertUserData = function (req, res) {
    var pass = req.body.pass;
    var confirm_pass = req.body.confirm_pass;
    var hash_pass;
    if (!req.body)
        res.status(404).json({ success: "false", message: "Body can not be blank" });
    var schema = joi_1.default.object().keys({
        u_email: joi_1.default.string().email({ minDomainAtoms: 2 }).required(),
        u_pass: joi_1.default.string().required(),
        u_cofirmPass: joi_1.default.string().required(),
        u_MobNumber: joi_1.default.string().regex(/^[0-9]+$/).required(),
        u_gender: joi_1.default.string().required()
    });
    joi_1.default.validate({ u_email: req.body.email, u_pass: req.body.pass, u_cofirmPass: req.body.confirm_pass, u_u_MobNumber: req.body.phone, u_gender: req.body.gender }, schema, function (err, result) {
        if (err) {
            res.status(404).json({ success: "false", error_message: err.details });
        }
        else {
            if (pass.localeCompare(confirm_pass) == 0) {
                bcryptjs_1.default.genSalt(10, function (err, salt) {
                    bcryptjs_1.default.hash(pass, salt, function (err, hash) {
                        if (err)
                            res.status(404).json(err);
                        else
                            hash_pass = hash;
                    });
                });
                console.log("Encryption>>" + hash_pass);
            }
            else {
                res.status(404).json({ success: "false", meesage: "Password and confirm passwod should be same" });
            }
        }
    });
};
exports.default = insertUserData;
