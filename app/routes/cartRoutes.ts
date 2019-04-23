import cartData from '../controllers/cart/postCart/postCartData'
import getCustomerCartData from '../controllers/cart/getCart/getCustData'
import getAllCartData from '../controllers/cart/getCart/getAllCartData'
import updateQuantityByCustId from '../controllers/cart/updateCart/updateQuantity'
import deleteCartByCustId from '../controllers/cart/deleteCart/deleteCustCart'
import deleteAllCartData from '../controllers/cart/deleteCart/deleteAllCartData'
import verifyToken from '../configFiles/verifyTokenMiddleware'

export class CartRoutes{

    public routes(app:any):void{
        app.route('/addDataToCart')
        .post(verifyToken,cartData)   
    
        app.route('/getCustCartData/:customer_id')
        .get(verifyToken,getCustomerCartData)

        app.route('/getAllCartData')
        .get(getAllCartData)

        app.route('/updateQuantityByCustId')
        .put(verifyToken,updateQuantityByCustId)

        app.route('/deleteCartByCustId')
        .delete(verifyToken,deleteCartByCustId)

        app.route('/deleteAllCartData')
        .delete(deleteAllCartData)
    }
}