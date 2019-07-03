"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    entry: path_1.default.resolve("./server.ts"),
    target: "node",
    mode: "development",
    output: {
        filename: "webpack.ts",
        path: path_1.default.resolve("../dist"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"] ///< what type of file extensions to compile (source file)
    },
};
