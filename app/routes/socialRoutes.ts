import {Request,Response,NextFunction} from 'express'
import passport from 'passport'
import loginByGoogle from '../controllers/socialCustomer/socialLogin'
import {authCheck} from '../configFiles/passport/auth'

//Routes for google strategy
export class SocialRoutes{

    public routes(app:any):void{
    
        //Redirect to google login page
        app.route('/auth/google')
        .get(passport.authenticate('google',{
            scope:['profile','email']
        }))

        //Redirect from google after authentication
        app.route('/auth/google/redirect')
        .get(passport.authenticate('google'),(req:Request,res:Response)=>{
            res.redirect('/profile')
        })

        //Redirect to profile screen with customer response
        app.route('/profile')
        .get(authCheck,loginByGoogle)
            
        

    }
}

