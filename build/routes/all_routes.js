"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//For Customer Module
var customer_registration_1 = __importDefault(require("../controllers/customer/customer_registration"));
var customer_authentication_1 = __importDefault(require("../controllers/customer/customer_authentication"));
var customer_updateProfile_1 = __importDefault(require("../controllers/customer/customer_updateProfile"));
var customer_addAddress_1 = __importDefault(require("../controllers/customer/customer_addAddress"));
var customer_deleteAddress_1 = __importDefault(require("../controllers/customer/customer_deleteAddress"));
//For Product Module
var product_category_1 = __importDefault(require("../controllers/products/product_category"));
var product_color_1 = __importDefault(require("../controllers/products/product_color"));
var product_list_1 = __importDefault(require("../controllers/products/product_list"));
var getProducts_1 = __importDefault(require("../controllers/products/getProducts"));
var getProductsByCategory_1 = __importDefault(require("../controllers/products/getProductsByCategory"));
var getProductsByColor_1 = __importDefault(require("../controllers/products/getProductsByColor"));
//Config files
var verifyTokenMiddleware_1 = __importDefault(require("../configFiles/verifyTokenMiddleware"));
var fileUpload_1 = __importDefault(require("../configFiles/fileUpload"));
//import images_allCategories from '../controllers/imagesAllCategories'
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/register')
            .post(customer_registration_1.default);
        // app.route('/images_allCategories')
        // .post(upload.array('product_images',12),images_allCategories)
        app.route('/login')
            .post(customer_authentication_1.default);
        app.route('/profile')
            .post(fileUpload_1.default.single('profile_image'), verifyTokenMiddleware_1.default, customer_updateProfile_1.default);
        app.route('/address')
            .post(verifyTokenMiddleware_1.default, customer_addAddress_1.default);
        app.route('/deladdress/:id')
            .post(verifyTokenMiddleware_1.default, customer_deleteAddress_1.default);
        app.route('/category')
            .post(product_category_1.default);
        app.route('/color')
            .post(product_color_1.default);
        app.route('/product')
            .post(fileUpload_1.default.single('prod_image'), product_list_1.default);
        app.route('/getAllProducts')
            .get(getProducts_1.default);
        app.route('/getProductByCateg/:categ_id')
            .get(getProductsByCategory_1.default);
        app.route('/getProductByColor/:categ_id/:color_id')
            .get(getProductsByColor_1.default);
    };
    return Routes;
}());
exports.Routes = Routes;
