"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var socialLogin_1 = __importDefault(require("../controllers/socialCustomer/socialLogin"));
var auth_1 = require("../configFiles/passport/auth");
//Routes for google strategy
var GoogleRoutes = /** @class */ (function () {
    function GoogleRoutes() {
    }
    GoogleRoutes.prototype.routes = function (app) {
        //Redirect to google login page
        app.route('/auth/google')
            .get(passport_1.default.authenticate('google', {
            scope: ['profile', 'email']
        }));
        //Redirect from google after authentication
        app.route('/auth/google/redirect')
            .get(passport_1.default.authenticate('google'), function (req, res) {
            res.redirect('/googleprofile');
        });
        //Redirect to profile screen with customer response
        app.route('/googleprofile')
            .get(auth_1.authCheck, socialLogin_1.default);
    };
    return GoogleRoutes;
}());
exports.GoogleRoutes = GoogleRoutes;
