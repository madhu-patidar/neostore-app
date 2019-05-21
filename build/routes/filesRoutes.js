"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postFiles_PostgreSQL_1 = __importDefault(require("../controllers/files/postFiles/postFiles(PostgreSQL)"));
var getAllFiles_PostgreSQL_1 = __importDefault(require("../controllers/files/getFiles/getAllFiles(PostgreSQL)"));
var postFiles_MongoDB_1 = __importDefault(require("../controllers/files/postFiles/postFiles(MongoDB)"));
var getAllFiles_MongoDB_1 = __importDefault(require("../controllers/files/getFiles/getAllFiles(MongoDB)"));
var deleteFiles_PostgreSQl_1 = __importDefault(require("../controllers/files/deleteFiles/deleteFiles(PostgreSQl)"));
var deleteFiles_MongoDB_1 = __importDefault(require("../controllers/files/deleteFiles/deleteFiles(MongoDB)"));
var fileUpload_1 = __importDefault(require("../configFiles/fileUpload"));
var FilesRoutes = /** @class */ (function () {
    function FilesRoutes() {
    }
    FilesRoutes.prototype.routes = function (app) {
        app.route('/files')
            .post(fileUpload_1.default.array('multiple_files', 12), postFiles_PostgreSQL_1.default);
        app.route('/filesInMongo')
            .post(fileUpload_1.default.array('multiple_files', 12), postFiles_MongoDB_1.default);
        app.route('/getFiles')
            .get(getAllFiles_PostgreSQL_1.default);
        app.route('/getFilesFromMongo')
            .get(getAllFiles_MongoDB_1.default);
        app.route('/deleteAllFiles')
            .delete(deleteFiles_PostgreSQl_1.default);
        app.route('/deleteAllFilesFromMongo')
            .delete(deleteFiles_MongoDB_1.default);
    };
    return FilesRoutes;
}());
exports.FilesRoutes = FilesRoutes;
