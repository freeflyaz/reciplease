import mongoose from 'mongoose';

const DBConnectionString: string = 'mongodb://localhost:27017/reciplease';

export function connect(){
  console.log(DBConnectionString);
  return mongoose.connect(DBConnectionString);
}
// mongoose
//   .connect(DBConnectionString)
//   .then(() => console.log('Reciplease database connected'))
//   .catch((err: Error) => console.error(`Database failed to connect: ${err}`));

export default mongoose;
