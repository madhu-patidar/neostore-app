import connection from "../../configFiles/sequelize-postgres";
import * as Sequelize from "sequelize";

const Customer = connection.define(
  "customer",
  {
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    first_name: {
      type: Sequelize.TEXT
    },

    last_name: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT,
      unique: true
    },
    password: {
      type: Sequelize.TEXT
    },
    phone_no: {
      type: Sequelize.TEXT
    },
    gender: {
      type: Sequelize.TEXT
    },
    dob: {
      type: Sequelize.TEXT
    },
    profile_img: {
      type: Sequelize.TEXT
    },
    googleid: {
      type: Sequelize.TEXT
    },
    facebookid: {
      type: Sequelize.TEXT
    }
  },
  { freezeTableName: false }
);

export default Customer;
