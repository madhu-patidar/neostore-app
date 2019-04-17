import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Routes } from './routes/customer_routes';
import swaggerUi from 'swagger-ui-express'
//import * as swaggerUi from 'swagger-ui-dist'
import * as swaggerDocument from './swagger.json'


export class App{
    public app:express.Application
    public routePrv:Routes=new Routes()
    
    constructor(){
        this.app=express();
        this.config();
        this.routePrv.routes(this.app)
    }
    
    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
    // let swaggerUi1 = swaggerUi.absolutePath();
    // this.app.use('/swagger',express.static(swaggerUi))
    // this.app.use("/openapi-data", express.static("./data/openapi/"));
    // this.app.use("/docs", express.static("./public/swagger"));
    }
}

export default new App().app