"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var all_routes_1 = require("./routes/all_routes");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//import * as swaggerUi from 'swagger-ui-dist'
var swaggerDocument = __importStar(require("./swagger.json"));
var mongoose_1 = __importDefault(require("mongoose"));
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new all_routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.mongooSetup();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    };
    App.prototype.mongooSetup = function () {
        mongoose_1.default.connect("mongodb://localhost:27017/neostore", { useNewUrlParser: true })
            .then(function () { return console.log("MongoDB Connected Successfully"); })
            .catch(function (err) { return console.log(err); });
    };
    return App;
}());
exports.App = App;
exports.default = new App().app;
