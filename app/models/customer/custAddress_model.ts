import connection from "../../configFiles/sequelize-postgres";
import * as Sequelize from "sequelize";

const Address = connection.define('cust_address',{
    address_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    customer_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'customers',
            key:'customer_id'
        },
        onDelete: 'CASCADE'
    },
    address:{
        type:Sequelize.TEXT
    },
    pincode:{
        type:Sequelize.INTEGER
    },
    city:{
        type:Sequelize.TEXT
    },
    state:{
        type:Sequelize.TEXT
    },
    country:{
        type:Sequelize.TEXT
    }
},{freezeTableName:false})

export default Address