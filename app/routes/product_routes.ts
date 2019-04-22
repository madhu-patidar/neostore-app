
//Post Product
import postProductList from '../controllers/products/post_products/product_list'

//Get Products
import getProducts from '../controllers/products/get_Products/getProducts'
import getProductsByCategory from '../controllers/products/get_Products/getProductsByCategory'
import getProductsByColor from '../controllers/products/get_Products/getProductsByColor'
import getProductsByProductId from '../controllers/products/get_Products/getProductByProductId'

//Delete Products
import deleteProductByProdId from '../controllers/products/delete_products/deleteProductById'
import deleteAllProducts from '../controllers/products/delete_products/deleteAllProducts'

//Update Products
import updateProductsById from '../controllers/products/update_products/updateProductById'
import updateProductRating from '../controllers/products/update_products/updateProductRating'

//Post Product category
import postProductCategory from '../controllers/products/post_products/product_category'

//Get Product Category
import getAllCategory from '../controllers/products/get_Products/getAllCategory'
import getCategoriesByCategId from '../controllers/products/get_Products/getCategoriesById'

//Delete Product Category
import deleteAllCategories from '../controllers/products/delete_products/deleteAllCategories'
import deleteCategoryById from '../controllers/products/delete_products/deleteCategoryById'

//Update Product category
import updateCategoryById from '../controllers/products/update_products/updateCategoryById'

//Post Product Color
import postProductColor from '../controllers/products/post_products/product_color'

//Get Product Color
import getAllColors from '../controllers/products/get_Products/getAllColors'
import getColorsByColorId from '../controllers/products/get_Products/getColorsByColorId'

//Delete Product Color
import deleteAllColors from '../controllers/products/delete_products/deleteAllColors'
import deleteColorById from '../controllers/products/delete_products/deleteColorById'

//Update Product Color
import updateColorById from '../controllers/products/update_products/updateColorById'

//Config files
import upload from '../configFiles/fileUpload'
import verifyToken from '../configFiles/verifyTokenMiddleware'

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

        //Get Products By its category and color
        app.route('/getProductByColor/:categ_id/:color_id')
        .get(getProductsByColor)

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
        app.route('/deleteProductByProdId/:prod_id')
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
        app.route('/deleteCategoryByCategId/:categ_id')
        .delete(deleteCategoryById)

        //Delete color By id
        app.route('/deleteColorByColorId/:color_id')
        .delete(deleteColorById)

        //Update Products By id
        app.route('/updateProductByProdId/:prod_id')
        .put(upload.single('prod_image'),updateProductsById)

        //Update Product Rating
        app.route('/updateProductRatingProdId/:prod_id')
        .put(verifyToken,updateProductsById)

        //Update Category By id
        app.route('/updateCategoryByCategId/:categ_id')
        .put(updateCategoryById)

        //Update Color By id
        app.route('/updateColorByColorId/:color_id')
        .put(updateColorById)
    

    }
}