"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postCustomerOrder_1 = __importDefault(require("../controllers/order/postCustomerOrder/postCustomerOrder"));
var getCustomerOrder_1 = __importDefault(require("../controllers/order/getCustomerOrder/getCustomerOrder"));
var getCustomeOrderInDetail_1 = __importDefault(require("../controllers/order/getCustomerOrder/getCustomeOrderInDetail"));
var deleteAllCutomerOrder_1 = __importDefault(require("../controllers/order/deleteCustomerOrder/deleteAllCutomerOrder"));
var deleteOrderByCustomerId_1 = __importDefault(require("../controllers/order/deleteCustomerOrder/deleteOrderByCustomerId"));
var deleteOrderByCustomerAndOrderId_1 = __importDefault(require("../controllers/order/deleteCustomerOrder/deleteOrderByCustomerAndOrderId"));
var verifyTokenMiddleware_1 = __importDefault(require("../configFiles/verifyTokenMiddleware"));
var OrderRoutes = /** @class */ (function () {
    function OrderRoutes() {
    }
    OrderRoutes.prototype.routes = function (app) {
        app.route('/postCustomerOrder')
            .post(verifyTokenMiddleware_1.default, postCustomerOrder_1.default);
        app.route('/getCustomerOrder')
            .get(verifyTokenMiddleware_1.default, getCustomerOrder_1.default);
        app.route('/getCustomerOrderInDetail/:order_id')
            .get(verifyTokenMiddleware_1.default, getCustomeOrderInDetail_1.default);
        app.route('/deleteAllCustomerOrders')
            .delete(deleteAllCutomerOrder_1.default);
        app.route('/deleteOrderByCustomerId')
            .delete(verifyTokenMiddleware_1.default, deleteOrderByCustomerId_1.default);
        app.route('/deleteOrderByCustomerAndOrderId')
            .delete(verifyTokenMiddleware_1.default, deleteOrderByCustomerAndOrderId_1.default);
    };
    return OrderRoutes;
}());
exports.OrderRoutes = OrderRoutes;
