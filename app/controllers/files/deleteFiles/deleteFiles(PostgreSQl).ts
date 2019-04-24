import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

//Delete All Files
const deleteAllFiles= (req:Request,res:Response)=>{
 
            client.query('delete from files')
            .then(()=>{
                res.status(200).json({success:true,message:"All Files Deleted"})
            })
            .catch(err=>{
                res.status(404).json({success:false,error_message:err})

            })       
}

//Available for Routes
export default deleteAllFiles;