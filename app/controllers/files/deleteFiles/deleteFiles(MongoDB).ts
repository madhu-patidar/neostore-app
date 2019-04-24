import {Request,Response} from 'express'
import FileModel from '../../../models/files/fileModel'

//Delete All Products
const deleteAllFilesFromMongo=(req:Request,res:Response)=>{
  
    FileModel.deleteMany({})
    .then(result=>{
        res.status(200).json({success:result!==null?true:false,message:result!==null?"All Files Deleted":"No data is available"})
    })
    .catch(err=>{
        res.status(404).json({success:false,error_message:err})
    })
}

//Available for ProductRoutes
export default deleteAllFilesFromMongo