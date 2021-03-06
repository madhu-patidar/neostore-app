import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const cartSchema=new Schema({
    customer_id:{
        type:Number,
        required:true
    },
    product_id:{
        type:Number,
        ref:'ProductList',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    product_cost:{
        type:Number
    },
    total_cost:{
        type:String,
    }
})

const CartModel = mongoose.model('Cart',cartSchema)

export default CartModel
