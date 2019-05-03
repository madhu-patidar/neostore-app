import postProductList from '../controllers/products/post_products/product_list'
import getProducts from '../controllers/products/get_Products/getProducts'
import getProductsByCategory from '../controllers/products/get_Products/getProductsByCategory'
import getProductsByColorandCateg from '../controllers/products/get_Products/getProductsByCategandColor'
import getProductsByProductId from '../controllers/products/get_Products/getProductByProductId'
import getProductsByColor from '../controllers/products/get_Products/getProductByColorId'
import deleteProductByProdId from '../controllers/products/delete_products/deleteProductById'
import deleteAllProducts from '../controllers/products/delete_products/deleteAllProducts'
import updateProductsById from '../controllers/products/update_products/updateProductById'
import updateProductRating from '../controllers/products/update_products/updateProductRating'
import postProductCategory from '../controllers/products/post_products/product_category'
import getAllCategory from '../controllers/products/get_Products/getAllCategory'
import getCategoriesByCategId from '../controllers/products/get_Products/getCategoriesById'
import deleteAllCategories from '../controllers/products/delete_products/deleteAllCategories'
import deleteCategoryById from '../controllers/products/delete_products/deleteCategoryById'
import updateCategoryById from '../controllers/products/update_products/updateCategoryById'
import postProductColor from '../controllers/products/post_products/product_color'
import getAllColors from '../controllers/products/get_Products/getAllColors'
import getColorsByColorId from '../controllers/products/get_Products/getColorsByColorId'
import deleteAllColors from '../controllers/products/delete_products/deleteAllColors'
import deleteColorById from '../controllers/products/delete_products/deleteColorById'
import updateColorById from '../controllers/products/update_products/updateColorById'
import upload from '../configFiles/fileUpload'
import verifyToken from '../configFiles/verifyTokenMiddleware'

/**
 * Creating class for defining all Product routing
 * @class ProductRoutes
 */
export class ProductRoutes{

    public routes(app:any):void{

        //Add Product Category
        app.route('/category')
        .post(postProductCategory)

        //Add Product Color
        app.route('/color')
        .post(postProductColor)

        //Add Product 
        app.route('/product')
        .post(upload.single('prod_image'),postProductList)

        //Get all Products
        app.route('/getAllProducts')
        .get(getProducts)

        //Get Products By its category
        app.route('/getProductByCateg/:categ_id')
        .get(getProductsByCategory)

        //Get Products By its Id
        app.route('/getProductByProdId/:prod_id')
        .get(getProductsByProductId)

        //Get Products By its color
        app.route('/getProductBycolor/:color_id')
        .get(getProductsByColor)

        //Get Products By its category and color
        app.route('/getProductByColor/:categ_id/:color_id')
        .get(getProductsByColorandCateg)

        //Get all Category of Products
        app.route('/getAllCategories')
        .get(getAllCategory)

        //Get Category by category id
        app.route('/getCategoryById/:categ_id')
        .get(getCategoriesByCategId)

        //Get all Color of Products
        app.route('/getAllColors')
        .get(getAllColors)

        //Get all Color of Products
        app.route('/getColorById/:color_id')
        .get(getColorsByColorId)

        //Delete Product By its product id
        app.route('/deleteProductByProdId')
        .delete(deleteProductByProdId)

        //Delete All Products
        app.route('/deleteAllProducts')
        .delete(deleteAllProducts)

        //Delete All Categories
        app.route('/deleteAllCategories')
        .delete(deleteAllCategories)

        //Delete All Colors
        app.route('/deleteAllColors')
        .delete(deleteAllColors)

        //Delete category By id
        app.route('/deleteCategoryByCategId')
        .delete(deleteCategoryById)

        //Delete color By id
        app.route('/deleteColorByColorId')
        .delete(deleteColorById)

        //Update Products By id
        app.route('/updateProductByProdId/:prod_id')
        .put(upload.single('prod_image'),updateProductsById)

        //Update Product Rating
        app.route('/updateProductRatingProdId')
        .put(verifyToken,updateProductRating)

        //Update Category By id
        app.route('/updateCategoryByCategId')
        .put(updateCategoryById)

        //Update Color By id
        app.route('/updateColorByColorId')
        .put(updateColorById)

    }
}