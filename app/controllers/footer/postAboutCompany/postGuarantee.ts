import GuaranteeModel from '../../../models/footer/guaranteeModel'
import {Request,Response} from 'express'

const postAboutCompanyGuaantee = (req:Request,res:Response)=>{
    
    let guaranteeData = new GuaranteeModel({
        fileName:req.file.filename
    })
    guaranteeData.save()
    .then(result=>{
        res.status(200).json({success:true, message:"Data Inserted",guarantee_details:result})
    })
    .catch(err=>{
        res.status(200).json({success:false,error_message:err})
    })

}

export default postAboutCompanyGuaantee