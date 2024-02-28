const recipeModel = require("../Models/recipe");
const userModel = require("../Models/user");

const getRecipes = async (req, res) => {
  try {
    // Find user and populate their recipes array:
    const user = await userModel.findOne({ _id: "65df6b55a7005cc4479303d1" });
    userWithRecipes = await user.populate("recipes");

    res.status(200).send(userWithRecipes.recipes);
  } catch (error) {
    res.status(404).send({ error, message: "Resource not found" });
  }
};

const addARecipe = async (req, res) => {
  try {
    // Add recipe to recipes collection:
    const recipe = await recipeModel.create(req.body);

    // Update recipes array in user collection:
    const user = await userModel.findOne({ _id: "65df6b55a7005cc4479303d1" });
    user.recipes.push(recipe._id);
    user.save();

    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send({ error, message: "Could not create recipe" });
  }
};

module.exports = { getRecipes, addARecipe };
