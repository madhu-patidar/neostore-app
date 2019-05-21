"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
//import * aspassport from '../configFiles/passport/passport-middleware'
var socialLogin_1 = __importDefault(require("../controllers/socialCustomer/socialLogin"));
var auth_1 = require("../configFiles/passport/auth");
//Routes for facebook strategy
var FacebookRoutes = /** @class */ (function () {
    function FacebookRoutes() {
    }
    FacebookRoutes.prototype.routes = function (app) {
        //Redirect to facebook login page
        app.route('/auth/facebook')
            .get(passport_1.default.authenticate('facebook', {
            scope: ['email']
        }));
        //Redirect from facebook after authentication
        app.route('/auth/facebook/redirect')
            .get(passport_1.default.authenticate('facebook'), function (req, res) {
            res.redirect('/facebookprofile');
        });
        //Redirect to profile screen with customer response
        app.route('/facebookprofile')
            .get(auth_1.authCheck, socialLogin_1.default);
    };
    return FacebookRoutes;
}());
exports.FacebookRoutes = FacebookRoutes;
