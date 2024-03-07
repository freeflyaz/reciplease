import mongoose from "mongoose";

const DBConnectionString: string =
  process.env.DBConnectionString || "mongodb://localhost:27017/reciplease";

mongoose
  .connect(DBConnectionString)
  .then(() => console.log("Reciplease database connected"))
  .catch((err: Error) => console.error(`Database failed to connect: ${err}`));

  export default mongoose;
