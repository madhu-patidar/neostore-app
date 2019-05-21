"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postAboutCompanyData_1 = __importDefault(require("../controllers/footer/postAboutCompany/postAboutCompanyData"));
var postTermsAndCondition_1 = __importDefault(require("../controllers/footer/postAboutCompany/postTermsAndCondition"));
var postGuarantee_1 = __importDefault(require("../controllers/footer/postAboutCompany/postGuarantee"));
var getAboutCompanyData_1 = __importDefault(require("../controllers/footer/getAboutCompany/getAboutCompanyData"));
var getTermsAndCondition_1 = __importDefault(require("../controllers/footer/getAboutCompany/getTermsAndCondition"));
var getGuarantee_1 = __importDefault(require("../controllers/footer/getAboutCompany/getGuarantee"));
var fileUpload_1 = __importDefault(require("../configFiles/fileUpload"));
var FooterRoutes = /** @class */ (function () {
    function FooterRoutes() {
    }
    FooterRoutes.prototype.routes = function (app) {
        app.route('/postData')
            .post(postAboutCompanyData_1.default);
        app.route('/postTermsAndConditions')
            .post(fileUpload_1.default.single('fileName'), postTermsAndCondition_1.default);
        app.route('/postGuarantee')
            .post(fileUpload_1.default.single('fileName'), postGuarantee_1.default);
        app.route('/getData')
            .get(getAboutCompanyData_1.default);
        app.route('/getTermsAndConditions')
            .get(getTermsAndCondition_1.default);
        app.route('/getGuarantee')
            .get(getGuarantee_1.default);
    };
    return FooterRoutes;
}());
exports.FooterRoutes = FooterRoutes;
