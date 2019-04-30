import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import {CustomerRoutes} from './routes/customerRoutes'
import {ProductRoutes} from './routes/productRoutes'
import {CartRoutes} from './routes/cartRoutes'
import {FilesRoutes} from './routes/filesRoutes'
import {SocialRoutes} from './routes/socialRoutes'
import swaggerUi from 'swagger-ui-express'
import './configFiles/passport/passport-setup'
import cors from 'cors'
import * as swaggerDocument from './swagger.json'
import mongoose from 'mongoose'
import {URL} from './configFiles/environment_variables'
import passport from 'passport'
import {keys} from './configFiles/passport/socialkeys'
import cookieSession from 'cookie-session'

export class App{
    public app:express.Application
    public routeCustomer:CustomerRoutes=new CustomerRoutes()
    public routeProduct:ProductRoutes=new ProductRoutes()
    public routeCart:CartRoutes=new CartRoutes()
    public routeFiles:FilesRoutes=new FilesRoutes()
    public routeSocial:SocialRoutes=new SocialRoutes()
    
    //Initialisation
    constructor(){
        this.app=express()
        this.config()
        this.mongooSetup()
        this.routeCustomer.routes(this.app)
        this.routeProduct.routes(this.app)
        this.routeCart.routes(this.app)
        this.routeFiles.routes(this.app)
        this.routeSocial.routes(this.app)
    }
    
    //Configuration setup
    private config(){
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))
        this.app.use(cookieSession({
            maxAge:24*60*60*1000,
	        keys:[keys.session.cookieKey]
        }))
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        this.app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
        
        //Make public upload directory to the front-end
        const publicDir=path.join(__dirname,'../uploads')
        this.app.use(express.static(publicDir))
    }

    //Mongoose Connection Setup
    private mongooSetup():void{ 
        mongoose.connect(URL,{useNewUrlParser:true,useFindAndModify: false})
        .then(()=>console.log("MongoDB Connected Successfully"))
        .catch(err=>console.log(err))
    }
}

export default new App().app