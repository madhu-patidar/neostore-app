"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var environment_variables_1 = require("./environment_variables");
var connection = new sequelize_1.Sequelize(environment_variables_1.database, environment_variables_1.user, environment_variables_1.password, {
    dialect: 'postgres',
    host: environment_variables_1.host,
    logging: false
});
exports.default = connection;
