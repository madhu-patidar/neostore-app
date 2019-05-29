import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const orderSchema=new Schema({
    order_id:{
        type:String,
        required:true
    },
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
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    isDelivered:{
        type:Boolean,
        required:true
    },
    total_cost:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const OrderModel = mongoose.model('Order',orderSchema)

export default OrderModel
