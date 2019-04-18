//For Customer Module
import insertCustomerData from '../controllers/customer/customer_registration'
import customerAuthentication from '../controllers/customer/customer_authentication'
import updateProfile from '../controllers/customer/customer_updateProfile'
import addAddress from '../controllers/customer/customer_addAddress'
import deleteAddress from '../controllers/customer/customer_deleteAddress'

//For Product Module
import productCategory from '../controllers/products/product_category'
import productColor from '../controllers/products/product_color'
import productList from '../controllers/products/product_list'
import getProducts from '../controllers/products/getProducts'
import getProductsByCategory from '../controllers/products/getProductsByCategory'
import getProductsByColor from '../controllers/products/getProductsByColor'

//Config files
import verifyToken from '../configFiles/verifyTokenMiddleware'
import upload from '../configFiles/fileUpload'
//import images_allCategories from '../controllers/imagesAllCategories'



export class Routes{

    public routes(app:any):void{

        //Register New Customer
        app.route('/register')
        .post(insertCustomerData)

        // app.route('/images_allCategories')
        // .post(upload.array('product_images',12),images_allCategories)

        //Authenticate Customer
        app.route('/login')
        .post(customerAuthentication)

        //Update Customer Profile
        app.route('/profile')
        .post(upload.single('profile_image'),verifyToken,updateProfile)

        //Add Customer Address
        app.route('/address')
        .post(verifyToken,addAddress)

        //Delete Customer Address
        app.route('/deladdress/:id')
        .post(verifyToken,deleteAddress)

        //Add Product Category
        app.route('/category')
        .post(productCategory)

        //Add Product Color
        app.route('/color')
        .post(productColor)

        //Add Product 
        app.route('/product')
        .post(upload.single('prod_image'),productList)

        //Get all Products
        app.route('/getAllProducts')
        .get(getProducts)

        //Get Products By its category
        app.route('/getProductByCateg/:categ_id')
        .get(getProductsByCategory)

        //Get Products By its category and color
        app.route('/getProductByColor/:categ_id/:color_id')
        .get(getProductsByColor)

    }

}