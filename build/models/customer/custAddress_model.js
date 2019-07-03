"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_postgres_1 = __importDefault(require("../../configFiles/sequelize-postgres"));
var sequelize_1 = require("sequelize");
// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
var Address = sequelize_postgres_1.default.define('cust_address', {
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'customer_id'
        },
        onDelete: 'CASCADE'
    },
    address: {
        type: sequelize_1.DataTypes.TEXT
    },
    pincode: {
        type: sequelize_1.DataTypes.INTEGER
    },
    city: {
        type: sequelize_1.DataTypes.TEXT
    },
    state: {
        type: sequelize_1.DataTypes.TEXT
    },
    country: {
        type: sequelize_1.DataTypes.TEXT
    }
}, { freezeTableName: false });
exports.default = Address;
