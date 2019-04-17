//Setup for Database (PostgreSQL) connection

import {Client} from 'pg'

//Create client with parameters for connection
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'shubham96',
    database: 'neostore',
    port: 5432,
})

//Create connection with PostgreSQL
client.connect()
.then(()=>console.log("Database Connected Successfully"))
.catch(err=>console.log(err))

//Exporting client for other files to use it.
export default client;