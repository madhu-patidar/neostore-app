import postCustomerOrder from '../controllers/order/postCustomerOrder/postCustomerOrder'
import getCustomerOrder from '../controllers/order/getCustomerOrder/getCustomerOrder'
import getCustomerOrderInDetail from '../controllers/order/getCustomerOrder/getCustomeOrderInDetail'
import verifyToken from '../configFiles/verifyTokenMiddleware'

export class OrderRoutes{
    
    public routes(app:any):void{
        app.route('/postCustomerOrder')
        .post(verifyToken,postCustomerOrder)

        app.route('/getCustomerOrder')
        .get(verifyToken,getCustomerOrder)

        app.route('/getCustomerOrderInDetail/:order_id')
        .get(verifyToken,getCustomerOrderInDetail)
    }
}