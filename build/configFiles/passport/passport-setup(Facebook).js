"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_facebook_1 = __importDefault(require("passport-facebook"));
//import client from '../database_postgresql'
require("./passport-middleware");
var socialkeys_1 = require("./socialkeys");
var customer_model_1 = __importDefault(require("../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../sequelize-postgres"));
passport_1.default.use(new passport_facebook_1.default({
    clientID: socialkeys_1.keys.facebook.clientID,
    clientSecret: socialkeys_1.keys.facebook.clientSecret,
    callbackURL: socialkeys_1.keys.facebook.callbackURL,
    profileFields: ['id', 'emails', 'name']
}, function (accessToken, refreshToken, profile, done) {
    var facebookid = profile.id;
    var first_name = profile._json.first_name;
    var last_name = profile._json.last_name;
    var email = profile._json.email;
    /*client.query('Select * from neo_user where facebookid=$1',[facebookid],(err,result)=>{
         if(result.rows.length==0){
           client.query('Insert into neo_user(first_name,last_name,email,facebookid) values($1,$2,$3,$4)',[first_name,last_name,email,facebookid],(err,result)=>{
               if(result)
               console.log("Data Inserted")
           })
           client.query('Select * from neo_user where facebookid=$1',[facebookid],(err,result)=>{
             done(null,result.rows)
           })
       }
       else{
           console.log("Customer was already registered")
           done(null,result.rows)
       }
       
     })*/
    sequelize_postgres_1.default.sync().then(function () {
        customer_model_1.default.findOne({ where: { facebookid: facebookid } })
            .then(function (result) {
            if (result == null) {
                customer_model_1.default.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    facebookid: facebookid
                })
                    .then(function (result) {
                    console.log("Data Inserted");
                    done(null, result);
                });
            }
            else {
                console.log("Customer was already registered");
                done(null, result);
            }
        });
    });
}));
