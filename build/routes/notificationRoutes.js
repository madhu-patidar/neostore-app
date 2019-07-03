"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var notification_1 = __importDefault(require("../controllers/push-notification/notification"));
var NotificationRoutes = /** @class */ (function () {
    function NotificationRoutes() {
    }
    NotificationRoutes.prototype.routes = function (app) {
        app.route('/sendNotification')
            .post(notification_1.default);
    };
    return NotificationRoutes;
}());
exports.NotificationRoutes = NotificationRoutes;
