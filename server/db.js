const mongoose = require("mongoose");
require("dotenv").config();
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || "reciplease";

mongoose
  .connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`)
  .then(() => console.log(`Reciplease database connected at port ${DB_PORT}`))
  .catch((err) => console.error(`Database failed to connect: ${err}`));

module.exports = mongoose;
