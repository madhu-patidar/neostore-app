import passport from 'passport'
import FacebookStrategy from 'passport-facebook'
import client from '../database_postgresql'
import {keys} from './socialkeys'

passport.serializeUser((user:any, done) => {
    done(null,user[0].id);
});

passport.deserializeUser((id, done) => {
    client.query('select * from neo_user where id=$1',[id],(err,user)=>{
        if(user)
        done(null,user.rows)
    })
});

passport.use(
    new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: keys.facebook.callbackURL
  },
  (accessToken:string, refreshToken:string, profile:any, done:any)=> {
    let facebookid=profile.id
    let name=profile.displayName.split(' ')
    let first_name=name[0]
    let last_name=name[name.length-1]
    let email=profile._json.email

   client.query('Select * from neo_user where facebookid=$1',[facebookid],(err,result)=>{
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
      
    })

  })
);