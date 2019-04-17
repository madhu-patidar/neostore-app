import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Routes } from './routes/customer_routes';
import swaggerUi from 'swagger-ui-express'
//import * as swaggerUi from 'swagger-ui-dist'
import * as swaggerDocument from './swagger.json'
import mongoose from 'mongoose'


export class App{
    public app:express.Application
    public routePrv:Routes=new Routes()
    
    constructor(){
        this.app=express();
        this.config();
        this.mongooSetup();
        this.routePrv.routes(this.app)
    }
    
    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
    }
    private mongooSetup():void{
        mongoose.connect("mongodb://localhost:27017/student")
        .then(()=>console.log("MongoDB Connected Successfully"))
        .catch(err=>console.log(err))
    }
}

export default new App().app