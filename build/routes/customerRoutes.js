"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//For Customer Module
var post_custRegistration_1 = __importDefault(require("../controllers/customer/postCustomer/post_custRegistration"));
var post_custAuthentication_1 = __importDefault(require("../controllers/customer/postCustomer/post_custAuthentication"));
var update_customerProfile_1 = __importDefault(require("../controllers/customer/updateCustomer/update_customerProfile"));
var post_custAddress_1 = __importDefault(require("../controllers/customer/postCustomer/post_custAddress"));
var delete_OneCustAddress_1 = __importDefault(require("../controllers/customer/deleteCustomer/delete_OneCustAddress"));
var changePassword_1 = __importDefault(require("../controllers/customer/postCustomer/changePassword"));
var forgotPassword_1 = __importDefault(require("../controllers/customer/postCustomer/forgotPassword"));
var recoverForgotPassword_1 = __importDefault(require("../controllers/customer/postCustomer/recoverForgotPassword"));
var get_OneCustProfile_1 = __importDefault(require("../controllers/customer/getCustomer/get_OneCustProfile"));
var get_AllCustProfile_1 = __importDefault(require("../controllers/customer/getCustomer/get_AllCustProfile"));
var get_OneCustAddress_1 = __importDefault(require("../controllers/customer/getCustomer/get_OneCustAddress"));
var delete_AllCustAddress_1 = __importDefault(require("../controllers/customer/deleteCustomer/delete_AllCustAddress"));
var get_AllCustAddress_1 = __importDefault(require("../controllers/customer/getCustomer/get_AllCustAddress"));
var delete_AllCustProfile_1 = __importDefault(require("../controllers/customer/deleteCustomer/delete_AllCustProfile"));
var delete_OneCustProfile_1 = __importDefault(require("../controllers/customer/deleteCustomer/delete_OneCustProfile"));
var update_customerAdd_1 = __importDefault(require("../controllers/customer/updateCustomer/update_customerAdd"));
var update_AllCustomer_1 = __importDefault(require("../controllers/customer/updateCustomer/update_AllCustomer"));
//Config files
var verifyTokenMiddleware_1 = __importDefault(require("../configFiles/verifyTokenMiddleware"));
var fileUpload_1 = __importDefault(require("../configFiles/fileUpload"));
//import images_allCategories from '../controllers/imagesAllCategories'
var CustomerRoutes = /** @class */ (function () {
    function CustomerRoutes() {
    }
    CustomerRoutes.prototype.routes = function (app) {
        //Register New Customer
        app.route('/register')
            .post(post_custRegistration_1.default);
        //Authenticate Customer
        app.route('/login')
            .post(post_custAuthentication_1.default);
        //Update Customer Profile
        app.route('/profile')
            .put(fileUpload_1.default.single('profile_img'), verifyTokenMiddleware_1.default, update_customerProfile_1.default);
        //Add Customer Address
        app.route('/address')
            .post(verifyTokenMiddleware_1.default, post_custAddress_1.default);
        //Change Customer Password
        app.route('/changePassword')
            .post(verifyTokenMiddleware_1.default, changePassword_1.default);
        //Forgot Password
        app.route('/forgotPassword')
            .post(forgotPassword_1.default);
        //Change Forgot Password
        app.route('/recoverPassword')
            .post(verifyTokenMiddleware_1.default, recoverForgotPassword_1.default);
        //Delete Customer Address
        app.route('/deladdress')
            .delete(verifyTokenMiddleware_1.default, delete_OneCustAddress_1.default);
        //Delete Customer 
        app.route('/delCustomer')
            .delete(verifyTokenMiddleware_1.default, delete_OneCustProfile_1.default);
        //Delete All Customer Address
        app.route('/delAlladdress')
            .delete(delete_AllCustAddress_1.default);
        //Delete All Customer
        app.route('/delAllCustomer')
            .delete(delete_AllCustProfile_1.default);
        //Get one Customer Profile
        app.route('/getCustProfile')
            .get(verifyTokenMiddleware_1.default, get_OneCustProfile_1.default);
        //Get All Customer Profile
        app.route('/getAllCustProfile')
            .get(get_AllCustProfile_1.default);
        //Get one Customer Address
        app.route('/getCustAddress')
            .get(verifyTokenMiddleware_1.default, get_OneCustAddress_1.default);
        //Get All Customer Address
        app.route('/getCustAllAddress')
            .get(get_AllCustAddress_1.default);
        //Update Customer Address
        app.route('/updateAddress')
            .put(verifyTokenMiddleware_1.default, update_customerAdd_1.default);
        app.route('/updateAllCustomer')
            .put(fileUpload_1.default.single('profile_img'), update_AllCustomer_1.default);
    };
    return CustomerRoutes;
}());
exports.CustomerRoutes = CustomerRoutes;
