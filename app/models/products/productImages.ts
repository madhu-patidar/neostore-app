import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Category
 const ProductCategoryImages=new Schema({
    _id:{
        type:Number,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now,
        required:true
    }
    
})

//Product Category Model
const ProductImagesModel=mongoose.model('ProductImages',ProductCategoryImages)

//Available for controller
export default ProductImagesModel;