import postCustomerOrder from '../controllers/order/postCustomerOrder/postCustomerOrder'
import getCustomerOrder from '../controllers/order/getCustomerOrder/getCustomerOrder'
import getCustomerOrderInDetail from '../controllers/order/getCustomerOrder/getCustomeOrderInDetail'
import deleteAllCustomerOrders from '../controllers/order/deleteCustomerOrder/deleteAllCutomerOrder'
import deleteOrderByCustomerId from '../controllers/order/deleteCustomerOrder/deleteOrderByCustomerId'
import deleteOrderByCustomerAndOrderId from '../controllers/order/deleteCustomerOrder/deleteOrderByCustomerAndOrderId'
import verifyToken from '../configFiles/verifyTokenMiddleware'

export class OrderRoutes{
    
    public routes(app:any):void{
        app.route('/postCustomerOrder')
        .post(verifyToken,postCustomerOrder)

        app.route('/getCustomerOrder')
        .get(verifyToken,getCustomerOrder)

        app.route('/getCustomerOrderInDetail/:order_id')
        .get(verifyToken,getCustomerOrderInDetail)

        app.route('/deleteAllCustomerOrders')
        .delete(deleteAllCustomerOrders)

        app.route('/deleteOrderByCustomerId')
        .delete(verifyToken,deleteOrderByCustomerId)

        app.route('/deleteOrderByCustomerAndOrderId')
        .delete(verifyToken,deleteOrderByCustomerAndOrderId)
    }
}