"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_registration_1 = __importDefault(require("../controllers/user_registration"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/register')
            .post(user_registration_1.default);
    };
    return Routes;
}());
exports.Routes = Routes;
