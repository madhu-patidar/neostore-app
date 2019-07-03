"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_1 = __importDefault(require("../controllers/products/postProducts/product_list"));
var getProducts_1 = __importDefault(require("../controllers/products/getProducts/getProducts"));
var getProductsByCategory_1 = __importDefault(require("../controllers/products/getProducts/getProductsByCategory"));
var getProductsByCategandColor_1 = __importDefault(require("../controllers/products/getProducts/getProductsByCategandColor"));
var getProductByProductId_1 = __importDefault(require("../controllers/products/getProducts/getProductByProductId"));
var getProductByColorId_1 = __importDefault(require("../controllers/products/getProducts/getProductByColorId"));
var deleteProductById_1 = __importDefault(require("../controllers/products/deleteProducts/deleteProductById"));
var deleteAllProducts_1 = __importDefault(require("../controllers/products/deleteProducts/deleteAllProducts"));
var updateProductById_1 = __importDefault(require("../controllers/products/updateProducts/updateProductById"));
var updateProductRating_1 = __importDefault(require("../controllers/products/updateProducts/updateProductRating"));
var product_category_1 = __importDefault(require("../controllers/products/postProducts/product_category"));
var getAllCategory_1 = __importDefault(require("../controllers/products/getProducts/getAllCategory"));
var getCategoriesById_1 = __importDefault(require("../controllers/products/getProducts/getCategoriesById"));
var deleteAllCategories_1 = __importDefault(require("../controllers/products/deleteProducts/deleteAllCategories"));
var deleteCategoryById_1 = __importDefault(require("../controllers/products/deleteProducts/deleteCategoryById"));
var updateCategoryById_1 = __importDefault(require("../controllers/products/updateProducts/updateCategoryById"));
var product_color_1 = __importDefault(require("../controllers/products/postProducts/product_color"));
var getAllColors_1 = __importDefault(require("../controllers/products/getProducts/getAllColors"));
var getColorsByColorId_1 = __importDefault(require("../controllers/products/getProducts/getColorsByColorId"));
var deleteAllColors_1 = __importDefault(require("../controllers/products/deleteProducts/deleteAllColors"));
var deleteColorById_1 = __importDefault(require("../controllers/products/deleteProducts/deleteColorById"));
var updateColorById_1 = __importDefault(require("../controllers/products/updateProducts/updateColorById"));
var fileUpload_1 = __importDefault(require("../configFiles/fileUpload"));
var verifyTokenMiddleware_1 = __importDefault(require("../configFiles/verifyTokenMiddleware"));
var postProductImages_1 = __importDefault(require("../controllers/products/postProducts/postProductImages"));
var getProductImages_1 = __importDefault(require("../controllers/products/getProducts/getProductImages"));
var postTopRatingProduct_1 = __importDefault(require("../controllers/products/postProducts/postTopRatingProduct"));
var getTopRatingProduct_1 = __importDefault(require("../controllers/products/getProducts/getTopRatingProduct"));
var post_productSubImages_1 = __importDefault(require("../controllers/products/postProducts/post_productSubImages"));
var getAllProductSubImages_1 = __importDefault(require("../controllers/products/getProducts/getAllProductSubImages"));
var getProductsBySearchText_1 = __importDefault(require("../controllers/products/getProducts/getProductsBySearchText"));
var sortProductsByDescending_1 = __importDefault(require("../controllers/products/getProducts/sortProductsByDescending"));
var sortProductsByAscending_1 = __importDefault(require("../controllers/products/getProducts/sortProductsByAscending"));
/**
 * Creating class for defining all Product routing
 * @class ProductRoutes
 */
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
    }
    ProductRoutes.prototype.routes = function (app) {
        //Top Product Images
        app.route('/topRatingProduct')
            .post(postTopRatingProduct_1.default);
        app.route('/defaultTopRatingProduct')
            .get(getTopRatingProduct_1.default);
        //Add Product Images
        app.route('/productImages')
            .post(fileUpload_1.default.single('product_image'), postProductImages_1.default);
        //Add Product Sub Images
        app.route('/productSubImages')
            .post(fileUpload_1.default.array('product_subImages', 12), post_productSubImages_1.default);
        //Add Product Category
        app.route('/category')
            .post(product_category_1.default);
        //Add Product Color
        app.route('/color')
            .post(product_color_1.default);
        //Add Product 
        app.route('/product')
            .post(fileUpload_1.default.single('product_image'), product_list_1.default);
        //Get all Products in Descending Order
        app.route('/getAllProductsInDescending/:customer_id')
            .get(verifyTokenMiddleware_1.default, sortProductsByDescending_1.default);
        //Get all Products in Ascending Order
        app.route('/getAllProductsInAscending/:customer_id')
            .get(verifyTokenMiddleware_1.default, sortProductsByAscending_1.default);
        //Get all Products Images
        app.route('/getAllProductsImages')
            .get(getProductImages_1.default);
        //Get all Products Sub Images
        app.route('/getAllProductsSubImages')
            .get(getAllProductSubImages_1.default);
        //Get all Products
        app.route('/getAllProducts')
            .get(getProducts_1.default);
        //Get Products by Search Text
        app.route('/getProductBySearchText/:text')
            .get(getProductsBySearchText_1.default);
        //Get Products By its category
        app.route('/getProductByCateg/:category_id')
            .get(getProductsByCategory_1.default);
        //Get Products By its Id
        app.route('/getProductByProdId/:product_id')
            .get(getProductByProductId_1.default);
        //Get Products By its color
        app.route('/getProductBycolor/:color_id')
            .get(getProductByColorId_1.default);
        //Get Products By its category and color
        app.route('/getProductByColor/:category_id/:color_id')
            .get(getProductsByCategandColor_1.default);
        //Get all Category of Products
        app.route('/getAllCategories')
            .get(getAllCategory_1.default);
        //Get Category by category id
        app.route('/getCategoryById/:category_id')
            .get(getCategoriesById_1.default);
        //Get all Color of Products
        app.route('/getAllColors')
            .get(getAllColors_1.default);
        //Get all Color of Products
        app.route('/getColorById/:color_id')
            .get(getColorsByColorId_1.default);
        //Delete Product By its product id
        app.route('/deleteProductByProdId')
            .delete(deleteProductById_1.default);
        //Delete All Products
        app.route('/deleteAllProducts')
            .delete(deleteAllProducts_1.default);
        //Delete All Categories
        app.route('/deleteAllCategories')
            .delete(deleteAllCategories_1.default);
        //Delete All Colors
        app.route('/deleteAllColors')
            .delete(deleteAllColors_1.default);
        //Delete category By id
        app.route('/deleteCategoryByCategId')
            .delete(deleteCategoryById_1.default);
        //Delete color By id
        app.route('/deleteColorByColorId')
            .delete(deleteColorById_1.default);
        //Update Products By id
        app.route('/updateProductByProdId/:product_id')
            .put(fileUpload_1.default.single('product_image'), updateProductById_1.default);
        //Update Product Rating
        app.route('/updateProductRatingProdId')
            .put(verifyTokenMiddleware_1.default, updateProductRating_1.default);
        //Update Category By id
        app.route('/updateCategoryByCategId')
            .put(updateCategoryById_1.default);
        //Update Color By id
        app.route('/updateColorByColorId')
            .put(updateColorById_1.default);
    };
    return ProductRoutes;
}());
exports.ProductRoutes = ProductRoutes;
