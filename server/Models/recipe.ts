import mongoose from '../db';
import { Schema, model } from 'mongoose';

interface IRecipe {
  _id: mongoose.Schema.Types.ObjectId[];
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  servings: number;
  duration: number;
  ingredients: string[];
  method: string[];
  favouritedBy: string[];
}

const recipeSchema = new Schema<IRecipe>({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },

  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  servings: { type: Number, required: true },
  duration: { type: Number, required: true },

  ingredients: [{ type: String, required: true }],
  method: [{ type: String, required: true }],

  favouritedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Recipe = model<IRecipe>('Recipe', recipeSchema);

export default Recipe;
