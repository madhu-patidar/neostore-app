import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Color
 const ProductColorSchema=new Schema({
    _id:{
        type:Number,
        required:true
    },
    color_name:{
        type:String,
        required:true,
    },
    color_parent:{
        type:String,
        required:true,
    },
    color_code:{
        type:String,
        required:true
    }
})

//Product Color Model
const ProductColorModel = mongoose.model('ProductColor',ProductColorSchema)

//Available for controller
export default ProductColorModel
