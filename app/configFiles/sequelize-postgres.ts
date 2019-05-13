import {Sequelize} from 'sequelize'
import {user,host,password,database} from './environment_variables'


const connection = new Sequelize(database,user,password,{
    dialect:'postgres',
    host:host,
    logging:false
})



export default connection;