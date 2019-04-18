import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product Category
 const ProductCategorySchema=new Schema({
    _id:{
        type:Number,
        required:true
    },
    category_name:{
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
const ProdCategoryModel=mongoose.model('ProductCategory',ProductCategorySchema)

//Available for controller
export default ProdCategoryModel;