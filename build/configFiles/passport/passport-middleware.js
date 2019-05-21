"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var customer_model_1 = __importDefault(require("../../models/customer/customer_model"));
var sequelize_postgres_1 = __importDefault(require("../sequelize-postgres"));
passport_1.default.serializeUser(function (user, done) {
    done(null, user.customer_id);
});
passport_1.default.deserializeUser(function (id, done) {
    /*client.query('select * from where id=$1',[id],(err,user)=>{
        if(user)
        done(null,user.rows)
    })*/
    sequelize_postgres_1.default.sync().then(function () {
        customer_model_1.default.findOne({ where: { customer_id: id } })
            .then(function (result) {
            if (result !== null)
                done(null, result);
        });
    });
});
exports.default = passport_1.default;
