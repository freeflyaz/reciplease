const mongoose = require("mongoose");
const DBConnectionString =
  process.env.DBConnectionString || "mongodb://localhost:27017/reciplease";

mongoose
  .connect(DBConnectionString)
  .then(() => console.log("Reciplease database connected"))
  .catch((err) => console.error(`Database failed to connect: ${err}`));

module.exports = mongoose;
