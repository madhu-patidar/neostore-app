import postProductList from '../controllers/products/postProducts/product_list'
import getProducts from '../controllers/products/getProducts/getProducts'
import getProductsByCategory from '../controllers/products/getProducts/getProductsByCategory'
import getProductsByColorandCateg from '../controllers/products/getProducts/getProductsByCategandColor'
import getProductsByProductId from '../controllers/products/getProducts/getProductByProductId'
import getProductsByColor from '../controllers/products/getProducts/getProductByColorId'
import deleteProductByProdId from '../controllers/products/deleteProducts/deleteProductById'
import deleteAllProducts from '../controllers/products/deleteProducts/deleteAllProducts'
import updateProductsById from '../controllers/products/updateProducts/updateProductById'
import updateProductRating from '../controllers/products/updateProducts/updateProductRating'
import postProductCategory from '../controllers/products/postProducts/product_category'
import getAllCategory from '../controllers/products/getProducts/getAllCategory'
import getCategoriesByCategId from '../controllers/products/getProducts/getCategoriesById'
import deleteAllCategories from '../controllers/products/deleteProducts/deleteAllCategories'
import deleteCategoryById from '../controllers/products/deleteProducts/deleteCategoryById'
import updateCategoryById from '../controllers/products/updateProducts/updateCategoryById'
import postProductColor from '../controllers/products/postProducts/product_color'
import getAllColors from '../controllers/products/getProducts/getAllColors'
import getColorsByColorId from '../controllers/products/getProducts/getColorsByColorId'
import deleteAllColors from '../controllers/products/deleteProducts/deleteAllColors'
import deleteColorById from '../controllers/products/deleteProducts/deleteColorById'
import updateColorById from '../controllers/products/updateProducts/updateColorById'
import upload from '../configFiles/fileUpload'
import verifyToken from '../configFiles/verifyTokenMiddleware'
import postProductImages from '../controllers/products/postProducts/postProductImages'
import getProductImages from '../controllers/products/getProducts/getProductImages'
import topRatingProduct from '../controllers/products/postProducts/postTopRatingProduct'
import gettopRatingProduct from '../controllers/products/getProducts/getTopRatingProduct'
import postProductSubImages from '../controllers/products/postProducts/post_productSubImages'
import getAllProductSubImages from '../controllers/products/getProducts/getAllProductSubImages'

/**
 * Creating class for defining all Product routing
 * @class ProductRoutes
 */
export class ProductRoutes{

    public routes(app:any):void{


          //Top Product Images
          app.route('/topRatingProduct')
          .post(topRatingProduct)

          app.route('/defaultTopRatingProduct')
          .get(gettopRatingProduct)

        //Add Product Images
        app.route('/productImages')
        .post(upload.single('product_image'),postProductImages)

        //Add Product Sub Images
        app.route('/productSubImages')
        .post(upload.array('product_subImages',12),postProductSubImages)

        //Add Product Category
        app.route('/category')
        .post(postProductCategory)

        //Add Product Color
        app.route('/color')
        .post(postProductColor)

        //Add Product 
        app.route('/product')
        .post(upload.single('product_image'),postProductList)

        //Get all Products Images
        app.route('/getAllProductsImages')
        .get(getProductImages)

        //Get all Products Sub Images
        app.route('/getAllProductsSubImages')
        .get(getAllProductSubImages)

        //Get all Products
        app.route('/getAllProducts')
        .get(getProducts)

        //Get Products By its category
        app.route('/getProductByCateg/:category_id')
        .get(getProductsByCategory)

        //Get Products By its Id
        app.route('/getProductByProdId/:product_id')
        .get(getProductsByProductId)

        //Get Products By its color
        app.route('/getProductBycolor/:color_id')
        .get(getProductsByColor)

        //Get Products By its category and color
        app.route('/getProductByColor/:category_id/:color_id')
        .get(getProductsByColorandCateg)

        //Get all Category of Products
        app.route('/getAllCategories')
        .get(getAllCategory)

        //Get Category by category id
        app.route('/getCategoryById/:category_id')
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
        app.route('/updateProductByProdId/:product_id')
        .put(upload.single('product_image'),updateProductsById)

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
