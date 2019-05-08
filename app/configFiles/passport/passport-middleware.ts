import passport from 'passport'
import client from '../database_postgresql'

passport.serializeUser((user:any, done) => {
    done(null,user[0].id);
});

passport.deserializeUser((id, done) => {
    client.query('select * from neo_user where id=$1',[id],(err,user)=>{
        if(user)
        done(null,user.rows)
    })
});

export default passport