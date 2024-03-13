import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export function connect() {
  const DBConnectionString: string =
    process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/reciplease';
  console.log(DBConnectionString);
  return mongoose.connect(DBConnectionString);
}

export default mongoose;
