"use strict";
//Setup Passport Google Strategy for login using google
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
//import client from '../database_postgresql'
var socialkeys_1 = require("./socialkeys");
require("./passport-middleware");
var customer_model_1 = __importDefault(require("../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../sequelize-postgres"));
passport_1.default.use(new passport_google_oauth20_1.default({
    clientID: socialkeys_1.keys.google.clientID,
    clientSecret: socialkeys_1.keys.google.clientSecret,
    callbackURL: socialkeys_1.keys.google.callbackURL
}, function (accessToken, refreshToken, profile, done) {
    var googleid = profile.id;
    var first_name = profile.name.givenName;
    var last_name = profile.name.familyName;
    var email = profile._json.email;
    /* client.query('Select * from neo_user where googleid=$1',[googleid],(err,result)=>{
        if(result.rows.length==0){
          client.query('Insert into neo_user(first_name,last_name,email,googleid) values($1,$2,$3,$4)',[first_name,last_name,email,googleid],(err,result)=>{
              if(result)
              console.log("Data Inserted")
          })
          client.query('Select * from neo_user where googleid=$1',[googleid],(err,result)=>{
            done(null,result.rows)
          })
      }
      else{
          console.log("Customer was already registered")
          done(null,result.rows)
      }
      
    })*/
    sequelize_postgres_1.default.sync().then(function () {
        customer_model_1.default.findOne({ where: { googleid: googleid } })
            .then(function (result) {
            if (result == null) {
                customer_model_1.default.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    googleid: googleid
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
