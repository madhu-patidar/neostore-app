"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var domain_1 = __importDefault(require("domain"));
var mongoose_1 = __importDefault(require("mongoose"));
var environment_variables_1 = require("./configFiles/environment_variables");
var database_postgresql_1 = __importDefault(require("./configFiles/database_postgresql"));
var sequelize_postgres_1 = __importDefault(require("./configFiles/sequelize-postgres"));
var d = domain_1.default.create();
//const PORT=process.env.PORT||5000
d.on("error", function (err) {
    console.log("error, but oh well " + err.message);
});
//Server is running on PORT 5000
d.run(function () {
    app_1.default.listen(environment_variables_1.PORT, function () {
        console.log("Server is running on " + environment_variables_1.PORT);
        //Mongoose Connection Setup
        mongoose_1.default
            .connect(environment_variables_1.URL, { useNewUrlParser: true, useFindAndModify: false })
            .then(function () { return console.log("MongoDB Connection has been established successfully."); })
            .catch(function (err) { return console.log(err); });
        //Create connection with PostgreSQL
        database_postgresql_1.default
            .connect()
            .then(function () { return console.log("PostgreSQL Connection has been established successfully."); })
            .catch(function (err) { return console.log(err); });
        sequelize_postgres_1.default
            .authenticate()
            .then(function () {
            console.log("PostgreSQL Connection using Sequelize has been established successfully.");
        })
            .catch(function (err) {
            console.error("Unable to connect to the database:", err);
        });
    });
});
