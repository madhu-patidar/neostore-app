//Setup for verify token which is sent by logged-in user
import {Request,Response,NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'

const verifyToken=(req:Request,res:Response,next:NextFunction)=>{ 
  //const token=<any>req.headers['authorization'];
    let token:string=""
    let bearerHeader:any= req.headers['authorization']
    if(typeof bearerHeader!== 'undefined'){
        let bearer = bearerHeader.split(' ')
        let bearerToken=bearer[1]
         token= bearerToken

         jwt.verify(token,'secretkey',(err:any,authdata:any) => {
          if(!err){
            req.body.id=authdata.id
            next()
          }
          else{
            res.sendStatus(403)
          }      
        })

    }
    else{
      res.status(403).json({success:"false",message:"Not a valid user"})
    } 


}

//Exporting verifyToken for other files to use it.
export default verifyToken;
