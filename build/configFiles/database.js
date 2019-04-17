"use strict";
//Setup for Database (PostgreSQL) connection
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
//Create client with parameters for connection
var client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    password: 'shubham96',
    database: 'developer_feedback',
    port: 5432,
});
//Create connection with PostgreSQL
client.connect()
    .then(function () { return console.log("Database Connected Successfully"); })
    .catch(function (err) { return console.log(err); });
//Exporting client for other files to use it.
exports.default = client;
