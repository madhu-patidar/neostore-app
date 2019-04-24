import client from '../../../configFiles/database_postgresql'
import {Request,Response} from 'express'

//Get All files from PostgreSQL
const getAllFiles = (req:Request,res:Response)=>{
    let data:any
    let store:any
    let fileArray:any[]=[]
    client.query('Select * from files')
    .then(result=>{
        if(result){
            for(let i:number=0;i<result.rows.length;i++){
                data=result.rows[i]
                let file=data.filename
                let fileId=data.id
               
             store=file.split(',')
             if(fileArray.indexOf(fileId)==-1){             
                fileArray.push({
                 id:fileId,
                 filename:store
             })
             
            }
        
  }    
        res.status(200).json({success:true,file_details:fileArray})
    }
        else
        res.status(404).json({success:false,message:"No data found"})
    })
    .catch(err=>{
        res.status(404).json({success:false,error_message:err})
    })

}

//Available for FileRoutes
export default getAllFiles