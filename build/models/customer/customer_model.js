"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_postgres_1 = __importDefault(require("../../configFiles/sequelize-postgres"));
var sequelize_1 = require("sequelize");
var Customer = sequelize_postgres_1.default.define("customer", {
    customer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: sequelize_1.DataTypes.TEXT
    },
    last_name: {
        type: sequelize_1.DataTypes.TEXT
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.TEXT
    },
    phone_no: {
        type: sequelize_1.DataTypes.TEXT
    },
    gender: {
        type: sequelize_1.DataTypes.TEXT
    },
    dob: {
        type: sequelize_1.DataTypes.TEXT
    },
    profile_img: {
        type: sequelize_1.DataTypes.TEXT
    },
    googleid: {
        type: sequelize_1.DataTypes.TEXT
    },
    facebookid: {
        type: sequelize_1.DataTypes.TEXT
    }
}, { freezeTableName: false });
exports.default = Customer;
