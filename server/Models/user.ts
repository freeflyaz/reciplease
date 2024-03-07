import mongoose from '../db';
import { Schema, model } from 'mongoose';

interface IUser {
  firstName: string;
  email: string;
  password: string;
  recipes: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
});
const User = model<IUser>('User', userSchema);

export default User;
