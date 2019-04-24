import {Request,Response} from 'express'
import client from '../../../configFiles/database_postgresql'

//Add multiple files in PostgreSQL
const postFilesinPostgreSQL=(req:Request,res:Response)=>{
    let fileArray:any[]=[]
    if(!req.files)
    res.status(404).json({success:"false",message:"Please select files"})
    else{
        let files:any=req.files
    for(let i:number=0;i<files.length;i++){
        if(fileArray.indexOf(files[i].filename)==-1)
        fileArray.push(files[i].filename)
    }
        client.query('Insert into files(fileName) values($1)',[fileArray],(err,result)=>{
        if(err){
            res.status(404).json({success:false,message:err})
        }
        else{
            res.status(200).json({success:true,message:"Files were uploaded successfully"})
        }
    })
}

}

//Available for FileRoutes
export default postFilesinPostgreSQL;