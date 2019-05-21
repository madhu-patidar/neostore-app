import FooterModel from '../../../models/footer/aboutCompany'
import {Request,Response} from 'express'

const postAboutCompany = (req:Request,res:Response)=>{
    
    let footerData = new FooterModel(req.body)
    footerData.save()
    .then(result=>{
        res.status(200).json({success:true, message:"Data Inserted",details:result})
    })
    .catch(err=>{
        res.status(200).json({success:false,error_message:err})
    })

}

export default postAboutCompany