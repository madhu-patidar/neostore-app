import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Category
 const FileSchema=new Schema({
    fileName:{
        type:[{type:String}],
        required:true
    }
    
})

//Product Category Model
const FileModel=mongoose.model('Files',FileSchema)

//Available for controller
export default FileModel;