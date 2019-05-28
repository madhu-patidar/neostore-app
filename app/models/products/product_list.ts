import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product List
 const ProductListSchema=new Schema({
    _id:{
        type:Number,
        required:true,
        ref:'ProductSubImages'
    },
    category_id:{
        type:Number,
        ref:"ProductCategory"
    },
    color_id:{
        type:Number,
        ref:"ProductColor"
    },
    product_name:{
        type:String,
        required:true  
    },
    product_image:{
        type:String,
        required:true
    },
    product_desc:{
        type:String,
        required:true
    },
    product_rating:{
        type:Number,
        required:true
    },
    product_producer:{
        type:String,
        required:true
    },
    product_cost:{
        type:Number,
        required:true
    },
    product_stock:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    product_dimension:{
        type:String
    },
    product_material:{
        type:String
    }
    
})

//Product List Model
const ProductListModel = mongoose.model('ProductList',ProductListSchema)

//Available for controller
export default ProductListModel