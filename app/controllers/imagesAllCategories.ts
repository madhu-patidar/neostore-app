import {Request,Response} from 'express'

const imagesAllcategories=(req:Request,res:Response)=>{

    if(!req.files)
    res.status(404).json({success:"false",message:"Body can not be blank"})
    else{
    for(let i:number=0;i<req.files.length;i++){
   
    }
}

}

export default imagesAllcategories;