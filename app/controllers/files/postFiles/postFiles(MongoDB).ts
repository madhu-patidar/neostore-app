import FileModel from '../../../models/files/fileModel'
import {Request,Response} from 'express'

//Add Multiple Files in MongoDB
const postFileInMongo=(req:Request,res:Response)=>{
    let fileArray:any[]=[]
    if(!req.files)
    res.status(404).json({success:false,message:"Please select files"})
    else{
        let files:any=req.files
    for(let i:number=0;i<files.length;i++){
        if(fileArray.indexOf(files[i].filename)==-1)
        fileArray.push(files[i].filename)
    }

    let newfiles=new FileModel({
        fileName:fileArray
    })

    newfiles.save()
    .then(result=>{
        res.status(200).json({success:true,message:"Files were uploaded successfully"})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })
}
   

}

//Available for FileRoutes
export default postFileInMongo