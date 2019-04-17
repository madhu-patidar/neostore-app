import insertCustomerData from '../controllers/customer/customer_registration'
import upload from '../configFiles/fileUpload'
import images_allCategories from '../controllers/imagesAllCategories'
import customerAuthentication from '../controllers/customer/customer_authentication'
import updateProfile from '../controllers/customer/customer_updateProfile'
import addAddress from '../controllers/customer/customer_addAddress'
import deleteAddress from '../controllers/customer/customer_deleteAddress'
import verifyToken from '../configFiles/verifyTokenMiddleware'

export class Routes{

    public routes(app:any):void{
        app.route('/register')
        .post(insertCustomerData)

        app.route('/images_allCategories')
        .post(upload.array('product_images',12),images_allCategories)

        app.route('/login')
        .post(customerAuthentication)

        app.route('/profile')
        .post(upload.single('profile_image'),verifyToken,updateProfile)

        app.route('/address')
        .post(verifyToken,addAddress)

        app.route('/deladdress/:id')
        .post(verifyToken,deleteAddress)
    }

}