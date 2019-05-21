import TermsAndConditionsModel from '../../../models/footer/termsAndConditions'
import {Request,Response} from 'express'

const postAboutCompanyTerms = (req:Request,res:Response)=>{

    let termsData = new TermsAndConditionsModel({
        fileName:req.file.filename
    })
    termsData.save()
    .then(result=>{
        res.status(200).json({success:true, message:"Data Inserted",termsAndConditions_details:result})
    })
    .catch(err=>{
        res.status(200).json({success:false,error_message:err})
    })

}

export default postAboutCompanyTerms