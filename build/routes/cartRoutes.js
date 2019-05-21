"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postCartData_1 = __importDefault(require("../controllers/cart/postCart/postCartData"));
var getCustData_1 = __importDefault(require("../controllers/cart/getCart/getCustData"));
var getAllCartData_1 = __importDefault(require("../controllers/cart/getCart/getAllCartData"));
var updateQuantity_1 = __importDefault(require("../controllers/cart/updateCart/updateQuantity"));
var deleteCustCart_1 = __importDefault(require("../controllers/cart/deleteCart/deleteCustCart"));
var deleteAllCartData_1 = __importDefault(require("../controllers/cart/deleteCart/deleteAllCartData"));
var verifyTokenMiddleware_1 = __importDefault(require("../configFiles/verifyTokenMiddleware"));
var CartRoutes = /** @class */ (function () {
    function CartRoutes() {
    }
    CartRoutes.prototype.routes = function (app) {
        app.route('/addDataToCart')
            .post(verifyTokenMiddleware_1.default, postCartData_1.default);
        app.route('/getCustCartData/:customer_id')
            .get(verifyTokenMiddleware_1.default, getCustData_1.default);
        app.route('/getAllCartData')
            .get(getAllCartData_1.default);
        app.route('/updateQuantityByCustId')
            .put(verifyTokenMiddleware_1.default, updateQuantity_1.default);
        app.route('/deleteCartByCustId')
            .delete(verifyTokenMiddleware_1.default, deleteCustCart_1.default);
        app.route('/deleteAllCartData')
            .delete(deleteAllCartData_1.default);
    };
    return CartRoutes;
}());
exports.CartRoutes = CartRoutes;
