import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

//Mongoose Schema for Product List
 const ProductListSchema=new Schema({
    _id:{
        type:Number,
        required:true
    },
    categ_id:{
        type:Number,
        ref:"ProductCategory"
    },
    color_id:{
        type:Number,
        ref:"ProductColor"
    },
    prod_name:{
        type:String,
        required:true  
    },
    prod_image:{
        type:String,
        required:true
    },
    prod_desc:{
        type:String,
        required:true
    },
    prod_rating:{
        type:Number,
        required:true
    },
    prod_producer:{
        type:String,
        required:true
    },
    prod_cost:{
        type:Number,
        required:true
    },
    prod_stock:{
        type:Number,
        required:true
    },
    prod_created_at:{
        type:Date,
        default:Date.now
    },
    prod_dimension:{
        type:String
    },
    prod_material:{
        type:String
    }
    
})

//Product List Model
const ProductListModel = mongoose.model('ProductList',ProductListSchema)

//Available for controller
export default ProductListModel