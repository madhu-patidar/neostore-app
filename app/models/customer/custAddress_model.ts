import connection from "../../configFiles/sequelize-postgres";
import {Model, DataTypes, BuildOptions } from "sequelize";

//In typescript, Please follow below approach for defining model. This is all according to the sequelize documentation.

// We need to declare an interface for our model that is basically what our class would be
interface CustomerAddressModel extends Model {
    address_id: number;
    customer_id:number;
    address:string;
    pincode:number;
    city:string;
    state:string;
    country:string
  }


    // Need to declare the static model so `findOne` etc. use correct types.
type CustomerAddressModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CustomerAddressModel;
  }

  // TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
 const Address = <CustomerAddressModelStatic>connection.define('cust_address',{
    address_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    customer_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'customers',
            key:'customer_id'
        },
        onDelete: 'CASCADE'
    },
    address:{
        type:DataTypes.TEXT
    },
    pincode:{
        type:DataTypes.INTEGER
    },
    city:{
        type:DataTypes.TEXT
    },
    state:{
        type:DataTypes.TEXT
    },
    country:{
        type:DataTypes.TEXT
    }
},{freezeTableName:false})

export default Address