//Setup for Database (PostgreSQL) connection

import {Client} from 'pg'
import {user,host,password,database,port} from './environment_variables'


//Create client with parameters for connection
const client = new Client({
    user:user,
    host:host,
    password:password,
    database:database,
    port:port
})

//Create connection with PostgreSQL
// client.connect()
// .then(()=>console.log("PostgreSQL Connected Successfully"))
// .catch(err=>console.log(err))

//Exporting client for other files to use it.
export default client;