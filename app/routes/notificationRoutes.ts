import sendNotification from '../controllers/push-notification/notification'

export class NotificationRoutes{

    public routes(app:any):void{
        app.route('/sendNotification')
        .post(sendNotification)
    }

}