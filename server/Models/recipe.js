const mongoose = require("../db.js");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },

  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  servings: { type: String, required: true },
  duration: { type: String, required: true },

  ingredients: [{ type: String, required: true }],
  method: [{ type: String, required: true }],

  favouritedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
