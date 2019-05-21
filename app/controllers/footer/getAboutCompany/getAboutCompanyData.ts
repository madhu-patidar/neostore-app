import FooterModel from '../../../models/footer/aboutCompany'
import {Request,Response} from 'express'

const getAboutCompany = (req:Request,res:Response)=>{

    FooterModel.find({})
    .then(result=>{
        if(result.length!==0)
        res.status(200).json({success:true,/*message:"All Categories",*/company_details:result})
        else
        res.status(200).json({success:false,/*message:"All Categories",*/message:"Something went wrong"})

    })
    .catch(err=>{
        res.status(404).json({success:false,message:"Something went wrong",error_message:err})
    })

}

export default getAboutCompany