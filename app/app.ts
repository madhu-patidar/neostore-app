import express from 'express'                            //import express for server
import bodyParser from 'body-parser'                     //body-parser for parsing data from front-end
import path from 'path'                                  //use for defining path
import {CustomerRoutes} from './routes/customerRoutes'   //@class of Cutomer Routing
import {ProductRoutes} from './routes/productRoutes'     //@class of Product Routing
import {CartRoutes} from './routes/cartRoutes'           //@class of Cart Routing
import {FilesRoutes} from './routes/filesRoutes'         //@class of Files Routing
import {GoogleRoutes} from './routes/googleRoutes'       //@class of Google Routing
import {FacebookRoutes} from './routes/facebookRoutes'   //@class of Facebook Routing
import {FooterRoutes} from './routes/footerRoutes'
import swaggerUi from 'swagger-ui-express'               //swagger for creating documentation
import './configFiles/passport/passport-setup(Google)'   //configure passport google strategy
import './configFiles/passport/passport-setup(Facebook)' //configure passport facebook strategy
import cors from 'cors'                                  //defining cors for handling cors error
import * as swaggerDocument from './swagger.json'        //defining swagger document for initailising
import mongoose from 'mongoose'                          //use mongoose library for mongodb
import {URL} from './configFiles/environment_variables'  //use environment variables
import passport from 'passport'                          //use passport for handling different strategies
import {keys} from './configFiles/passport/socialkeys'   //keys which are containing credentials for passport strategies
import cookieSession from 'cookie-session'               //maintaining cookie session


/**
* Create a main class which is managing all resopnsibilities of Application
* @class App
*/
 class App{
    public app:express.Application
    public routeCustomer:CustomerRoutes=new CustomerRoutes()
    public routeProduct:ProductRoutes=new ProductRoutes()
    public routeCart:CartRoutes=new CartRoutes()
    public routeFiles:FilesRoutes=new FilesRoutes()
    public routeGoogle:GoogleRoutes=new GoogleRoutes()
    public routeFacebook:FacebookRoutes=new FacebookRoutes()
    public routeFooter:FooterRoutes=new FooterRoutes()
    
    //Initialisation
    constructor(){
        this.app=express()
        this.config()
        //this.mongooSetup()
        this.routeCustomer.routes(this.app)
        this.routeProduct.routes(this.app)
        this.routeCart.routes(this.app)
        this.routeFiles.routes(this.app)
        this.routeGoogle.routes(this.app)
        this.routeFacebook.routes(this.app)
        this.routeFooter.routes(this.app)
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