import passport from 'passport'
import client from '../database_postgresql'
import Customer from '../../models/customer/customer_model'
import connection from '../sequelize-postgres'

passport.serializeUser((user:any, done) => {
    console.log("   JJJ",user.customer_id)
    done(null,user.customer_id);
});

passport.deserializeUser((id, done) => {
    console.log("4444",id)
    /*client.query('select * from where id=$1',[id],(err,user)=>{
        if(user)
        done(null,user.rows)
    })*/
    connection.sync().then(()=>{
        Customer.findOne({where:{customer_id:id}})
        .then((result)=>{
            if(result!==null)
            done(null,result)
        })
    })
});

export default passport