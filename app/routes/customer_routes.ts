//For Customer Module
import insertCustomerData from '../controllers/customer/customer_registration'
import customerAuthentication from '../controllers/customer/customer_authentication'
import updateProfile from '../controllers/customer/customer_updateProfile'
import addAddress from '../controllers/customer/customer_addAddress'
import deleteAddress from '../controllers/customer/customer_deleteAddress'

//Config files
import verifyToken from '../configFiles/verifyTokenMiddleware'
import upload from '../configFiles/fileUpload'
//import images_allCategories from '../controllers/imagesAllCategories'



export class CustomerRoutes{

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

       

    }

}