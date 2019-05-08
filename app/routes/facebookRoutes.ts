import {Request,Response} from 'express'
import passport from 'passport'
//import * aspassport from '../configFiles/passport/passport-middleware'
import loginBySocial from '../controllers/socialCustomer/socialLogin'
import {authCheck} from '../configFiles/passport/auth'

//Routes for facebook strategy
export class FacebookRoutes{

    public routes(app:any):void{
    
        //Redirect to facebook login page
        app.route('/auth/facebook')
        .get(passport.authenticate('facebook',{
            scope:['email']
        }))

        //Redirect from facebook after authentication
        app.route('/auth/facebook/redirect')
        .get(passport.authenticate('facebook'),(req:Request,res:Response)=>{
            res.redirect('/facebookprofile')
        })

        //Redirect to profile screen with customer response
        app.route('/facebookprofile')
        .get(authCheck,loginBySocial)
            
        

    }
}

