"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCheck = function (req, res, next) {
    if (req.isAuthenticated) {
        next();
    }
    else {
    }
};
