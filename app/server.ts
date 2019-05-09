import app from "./app";
import dom from "domain";
import mongoose from "mongoose";
import { URL, PORT } from "./configFiles/environment_variables";
import client from "./configFiles/database_postgresql";

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
      .then(() => console.log("MongoDB Connected Successfully"))
      .catch(err => console.log(err));

    //Create connection with PostgreSQL
    client
      .connect()
      .then(() => console.log("PostgreSQL Connected Successfully"))
      .catch(err => console.log(err));
  });
});
