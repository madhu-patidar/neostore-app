import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { CustomerRoutes } from './routes/customer_routes'
import {ProductRoutes} from './routes/product_routes'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import * as swaggerDocument from './swagger.json'
import mongoose from 'mongoose'


export class App{
    public app:express.Application
    public routeCustomer:CustomerRoutes=new CustomerRoutes()
    public routeProduct:ProductRoutes=new ProductRoutes()
    
    //Initialisation
    constructor(){
        this.app=express()
        this.config()
        this.mongooSetup()
        this.routeCustomer.routes(this.app)
        this.routeProduct.routes(this.app)
    }
    
    //Configuration setup
    private config(){
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))
        this.app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
    }

    //Mongoose Connection Setup
    private mongooSetup():void{
        mongoose.connect("mongodb://localhost:27017/neostore",{useNewUrlParser:true,useFindAndModify: false})
        .then(()=>console.log("MongoDB Connected Successfully"))
        .catch(err=>console.log(err))
    }
}

export default new App().app