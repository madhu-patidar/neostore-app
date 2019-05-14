//Setup Passport Google Strategy for login using google

import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
//import client from '../database_postgresql'
import {keys} from './socialkeys'
import './passport-middleware'
import Customer from '../../models/customer/customer_model'
import connection from '../sequelize-postgres'


passport.use(
    new GoogleStrategy({
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:keys.google.callbackURL
    },(accessToken:string,refreshToken:string,profile:any,done:any)=>{
       
        let googleid=profile.id
        let first_name=profile.name.givenName
        let last_name=profile.name.familyName
        let email=profile._json.email
       
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

        connection.sync().then(()=>{
            Customer.findOne({where:{googleid:googleid}})
            .then(result=>{
              if(result==null){
                Customer.create({
                  first_name:first_name,
                  last_name:last_name,
                  email:email,
                  googleid:googleid
                })
                .then((result)=>{
                  console.log("Data Inserted")
                 done(null,result)
                  })
              }
              else{
                console.log("Customer was already registered")
                done(null,result)
            }
            })
          })
        

    })
)
