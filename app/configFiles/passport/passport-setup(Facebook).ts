import passport from 'passport'
import FacebookStrategy from 'passport-facebook'
//import client from '../database_postgresql'
import './passport-middleware'
import {keys} from './socialkeys'
import Customer from '../../models/customer/customer_model'
import connection from '../sequelize-postgres'

passport.use(
    new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: keys.facebook.callbackURL,
    profileFields: ['id', 'emails', 'name']
  },
  (accessToken:string, refreshToken:string, profile:any, done:any)=> {
    let facebookid=profile.id
    let first_name=profile._json.first_name
    let last_name=profile._json.last_name
    let email=profile._json.email

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
connection.sync().then(()=>{
  Customer.findOne({where:{facebookid:facebookid}})
  .then(result=>{
    if(result==null){
      Customer.create({
        first_name:first_name,
        last_name:last_name,
        email:email,
        facebookid:facebookid
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
);