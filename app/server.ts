import app from "./app";
import dom from "domain";
import mongoose from "mongoose";
import { URL, PORT } from "./configFiles/environment_variables";
import client from "./configFiles/database_postgresql";
import connection from "./configFiles/sequelize-postgres";

const d = dom.create();
//const PORT=process.env.PORT||5000
d.on("error", err => {
  console.log(`error, but oh well ${err.message}`);
});

//Server is running on PORT 5000
d.run(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    //Mongoose Connection Setup
    mongoose
      .connect(URL, { useNewUrlParser: true, useFindAndModify: false })
      .then(() => console.log("MongoDB Connection has been established successfully."))
      .catch(err => console.log(err));

    //Create connection with PostgreSQL
    client
      .connect()
      .then(() => console.log("PostgreSQL Connection has been established successfully."))
      .catch(err => console.log(err));

    connection
      .authenticate()
      .then(() => {
        console.log("PostgreSQL Connection using Sequelize has been established successfully.");
      })
      .catch((err: string) => {
        console.error("Unable to connect to the database:", err);
      });
  });
});
