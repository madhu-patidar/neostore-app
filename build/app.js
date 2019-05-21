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
var express_1 = __importDefault(require("express")); //import express for server
var body_parser_1 = __importDefault(require("body-parser")); //body-parser for parsing data from front-end
var path_1 = __importDefault(require("path")); //use for defining path
var customerRoutes_1 = require("./routes/customerRoutes"); //@class of Cutomer Routing
var productRoutes_1 = require("./routes/productRoutes"); //@class of Product Routing
var cartRoutes_1 = require("./routes/cartRoutes"); //@class of Cart Routing
var filesRoutes_1 = require("./routes/filesRoutes"); //@class of Files Routing
var googleRoutes_1 = require("./routes/googleRoutes"); //@class of Google Routing
var facebookRoutes_1 = require("./routes/facebookRoutes"); //@class of Facebook Routing
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express")); //swagger for creating documentation
require("./configFiles/passport/passport-setup(Google)"); //configure passport google strategy
require("./configFiles/passport/passport-setup(Facebook)"); //configure passport facebook strategy
var cors_1 = __importDefault(require("cors")); //defining cors for handling cors error
var swaggerDocument = __importStar(require("./swagger.json")); //defining swagger document for initailising
var mongoose_1 = __importDefault(require("mongoose")); //use mongoose library for mongodb
var environment_variables_1 = require("./configFiles/environment_variables"); //use environment variables
var passport_1 = __importDefault(require("passport")); //use passport for handling different strategies
var socialkeys_1 = require("./configFiles/passport/socialkeys"); //keys which are containing credentials for passport strategies
var cookie_session_1 = __importDefault(require("cookie-session")); //maintaining cookie session
/**
* Create a main class which is managing all resopnsibilities of Application
* @class App
*/
var App = /** @class */ (function () {
    //Initialisation
    function App() {
        this.routeCustomer = new customerRoutes_1.CustomerRoutes();
        this.routeProduct = new productRoutes_1.ProductRoutes();
        this.routeCart = new cartRoutes_1.CartRoutes();
        this.routeFiles = new filesRoutes_1.FilesRoutes();
        this.routeGoogle = new googleRoutes_1.GoogleRoutes();
        this.routeFacebook = new facebookRoutes_1.FacebookRoutes();
        this.app = express_1.default();
        this.config();
        //this.mongooSetup()
        this.routeCustomer.routes(this.app);
        this.routeProduct.routes(this.app);
        this.routeCart.routes(this.app);
        this.routeFiles.routes(this.app);
        this.routeGoogle.routes(this.app);
        this.routeFacebook.routes(this.app);
    }
    //Configuration setup
    App.prototype.config = function () {
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cookie_session_1.default({
            maxAge: 24 * 60 * 60 * 1000,
            keys: [socialkeys_1.keys.session.cookieKey]
        }));
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
        this.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        //Make public upload directory to the front-end
        var publicDir = path_1.default.join(__dirname, '../uploads');
        this.app.use(express_1.default.static(publicDir));
    };
    //Mongoose Connection Setup
    App.prototype.mongooSetup = function () {
        mongoose_1.default.connect(environment_variables_1.URL, { useNewUrlParser: true, useFindAndModify: false })
            .then(function () { return console.log("MongoDB Connected Successfully"); })
            .catch(function (err) { return console.log(err); });
    };
    return App;
}());
exports.App = App;
exports.default = new App().app;
