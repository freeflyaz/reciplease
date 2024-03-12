import mongoose from 'mongoose';

const DBConnectionString: string = 'mongodb://localhost:27017/test_reciplease';

export function connect(){
  console.log(DBConnectionString);
  return mongoose.connect(DBConnectionString);
}

export default mongoose;
