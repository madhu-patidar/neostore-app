import connection from "../../configFiles/sequelize-postgres";
import {Model, DataTypes, BuildOptions } from "sequelize";

//In typescript, Please follow below approach for defining model. This is all according to the sequelize documentation.

// We need to declare an interface for our model that is basically what our class would be
interface CustomerModel extends Model {
    customer_id:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    phone_no:number;
    gender:string;
    dob:string;
    profile_img:string;
    googleid:number;
    facebookid:number;
  }

  // Need to declare the static model so `findOne` etc. use correct types.
type CustomerModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CustomerModel;
  }

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
const Customer = <CustomerModelStatic>connection.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    first_name: {
      type: DataTypes.TEXT
    },

    last_name: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT,
      unique: true
    },
    password: {
      type: DataTypes.TEXT
    },
    phone_no: {
      type: DataTypes.TEXT
    },
    gender: {
      type: DataTypes.TEXT
    },
    dob: {
      type: DataTypes.TEXT
    },
    profile_img: {
      type: DataTypes.TEXT
    },
    googleid: {
      type: DataTypes.TEXT
    },
    facebookid: {
      type: DataTypes.TEXT
    }
  },
  { freezeTableName: false }
);

export default Customer;
