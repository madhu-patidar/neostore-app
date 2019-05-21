"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var verifyToken = function (req, res, next) {
    //const token=<any>req.headers['authorization'];
    var token = "";
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(' ');
        var bearerToken = bearer[1];
        token = bearerToken;
        jwt.verify(token, 'secretkey', function (err, authdata) {
            if (!err) {
                req.body.id = authdata.id;
                next();
            }
            else {
                res.sendStatus(403);
            }
        });
    }
    else {
        res.status(403).json({ success: false, message: "Not a valid user" });
    }
};
//Exporting verifyToken for other files to use it.
exports.default = verifyToken;
