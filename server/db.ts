import mongoose from 'mongoose';

const DBConnectionString: string = 'mongodb://localhost:27017/reciplease';
const DBTestConnectionString: string = 'mongodb://localhost:27017/test_reciplease';

export function connect(testDB: boolean = false){
  const connection = testDB ? DBTestConnectionString : DBConnectionString
  console.log(connection);
  return mongoose.connect(connection);
}
// mongoose
//   .connect(DBConnectionString)
//   .then(() => console.log('Reciplease database connected'))
//   .catch((err: Error) => console.error(`Database failed to connect: ${err}`));

export default mongoose;
