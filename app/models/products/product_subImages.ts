import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Category
 const ProductSubImages=new Schema({
    _id:{
        type:Number,
        required:true
    },
    product_subImages:{
        type:[{type:String}],
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now,
        required:true
    }
    
})

//Product Category Model
const ProductSubImagesModel=mongoose.model('ProductSubImages',ProductSubImages)

//Available for controller
export default ProductSubImagesModel;