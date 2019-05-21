"use strict";
//Setup for Database (PostgreSQL) connection
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var environment_variables_1 = require("./environment_variables");
//Create client with parameters for connection
var client = new pg_1.Client({
    user: environment_variables_1.user,
    host: environment_variables_1.host,
    password: environment_variables_1.password,
    database: environment_variables_1.database,
    port: environment_variables_1.port
});
//Create connection with PostgreSQL
// client.connect()
// .then(()=>console.log("PostgreSQL Connected Successfully"))
// .catch(err=>console.log(err))
//Exporting client for other files to use it.
exports.default = client;
