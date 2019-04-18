"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imagesAllcategories = function (req, res) {
    if (!req.files)
        res.status(404).json({ success: "false", message: "Body can not be blank" });
    else {
        for (var i = 0; i < req.files.length; i++) {
        }
    }
};
exports.default = imagesAllcategories;
