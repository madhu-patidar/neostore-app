import FileModel from '../../../models/files/fileModel'
import {Request,Response} from 'express'

//Get All files from Mongo
const getAllFilesFromMongo = (req:Request,res:Response)=>{

    FileModel.find({})
    .then(result=>{
        res.status(200).json({success:true,message:"All Files",file_details:result})
    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })

}

//Available for FileRoutes
export default getAllFilesFromMongo