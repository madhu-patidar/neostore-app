import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Footer=new Schema({
    about_company:{
        type:String
    },
    email:{
        type:String
    },
    phone_no:{
        type:String
    },
    address:{
        type:String
    }
})

const FooterModel = mongoose.model('FooterData',Footer)

export default FooterModel