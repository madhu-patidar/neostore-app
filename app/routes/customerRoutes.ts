//For Customer Module
import insertCustomerData from '../controllers/customer/postCustomer/post_custRegistration'
import customerAuthentication from '../controllers/customer/postCustomer/post_custAuthentication'
import updateProfile from '../controllers/customer/updateCustomer/update_customerProfile'
import addAddress from '../controllers/customer/postCustomer/post_custAddress'
import deleteAddress from '../controllers/customer/deleteCustomer/delete_OneCustAddress'
import changePassword from '../controllers/customer/postCustomer/changePassword'
import forgotPassword from '../controllers/customer/postCustomer/forgotPassword'
import recoverPassword from '../controllers/customer/postCustomer/recoverForgotPassword'
import getCustomerProfile from '../controllers/customer/getCustomer/get_OneCustProfile'
import getAllCustomerProfile from '../controllers/customer/getCustomer/get_AllCustProfile'
import getCustomerAddress from '../controllers/customer/getCustomer/get_OneCustAddress'
import deleteAllAddress from '../controllers/customer/deleteCustomer/delete_AllCustAddress'
import getCustomerAllAddress from '../controllers/customer/getCustomer/get_AllCustAddress'
import deleteAllCustomer from '../controllers/customer/deleteCustomer/delete_AllCustProfile'
import deleteOneCustomer from '../controllers/customer/deleteCustomer/delete_OneCustProfile'
import updateAddress from '../controllers/customer/updateCustomer/update_customerAdd'
import updateAllCustomer from '../controllers/customer/updateCustomer/update_AllCustomer'

//Config files
import verifyToken from '../configFiles/verifyTokenMiddleware'
import upload from '../configFiles/fileUpload'
//import images_allCategories from '../controllers/imagesAllCategories'

export class CustomerRoutes{

    public routes(app:any):void{



        //Register New Customer
        app.route('/register')
        .post(insertCustomerData)


        //Authenticate Customer
        app.route('/login')
        .post(customerAuthentication)

        //Update Customer Profile
        app.route('/profile')
        .put(upload.single('profile_img'),verifyToken,updateProfile)

        //Add Customer Address
        app.route('/address')
        .post(verifyToken,addAddress)

         //Change Customer Password
         app.route('/changePassword')
         .post(verifyToken,changePassword)

         //Forgot Password
         app.route('/forgotPassword')
         .post(forgotPassword)

         //Change Forgot Password
         app.route('/recoverPassword')
         .post(verifyToken,recoverPassword)

        //Delete Customer Address
        app.route('/deladdress')
        .delete(verifyToken,deleteAddress)

        //Delete Customer 
        app.route('/delCustomer')
        .delete(verifyToken,deleteOneCustomer)

        //Delete All Customer Address
        app.route('/delAlladdress')
        .delete(deleteAllAddress)

        //Delete All Customer
        app.route('/delAllCustomer')
        .delete(deleteAllCustomer)
        
        //Get one Customer Profile
        app.route('/getCustProfile')
        .get(verifyToken,getCustomerProfile)

        //Get All Customer Profile
        app.route('/getAllCustProfile')
        .get(getAllCustomerProfile)

        //Get one Customer Address
        app.route('/getCustAddress')
        .get(verifyToken,getCustomerAddress)

        //Get All Customer Address
        app.route('/getCustAllAddress')
        .get(getCustomerAllAddress)

        //Update Customer Address
        app.route('/updateAddress')
        .put(verifyToken,updateAddress)

        app.route('/updateAllCustomer')
        .put(upload.single('profile_img'),updateAllCustomer)

    }

}