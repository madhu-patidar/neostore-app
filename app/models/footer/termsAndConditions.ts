import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Category
 const FileSchema=new Schema({
    fileName:{
            type:String,
            required:true
    }
    
})

//Product Category Model
const TermsAndConditionsModel=mongoose.model('TermsAndConditions',FileSchema)

//Available for controller
export default TermsAndConditionsModel;