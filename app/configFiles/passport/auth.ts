import {Request,Response,NextFunction} from 'express'

export const authCheck=(req:Request,res:Response,next:NextFunction)=>{
    if(req.isAuthenticated){
        next();
    } 
    else {       
    }
}