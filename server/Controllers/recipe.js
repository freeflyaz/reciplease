const recipeModel = require("../Models/recipe");
const userModel = require("../Models/user");

const getRecipes = async (req, res) => {
  try {
    // Find user and populate their recipes array:
    const id = req.params.id;
    const user = await userModel.findOne({ _id: id });
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

    res.status(201).send({ success: true, message: "Recipe created" });
  } catch (error) {
    res.status(400).send({ error, message: "Could not create recipe" });
  }
};

const toggleFavouritedUser = async (req, res) => {
  try {
    // Find recipe:
    const recipe = await recipeModel.findOne({
      _id: req.body.recipeId,
    });

    // If userID is in recipe's favouriteBy array, remove, else add:
    if (recipe.favouritedBy.includes(req.body.userId)) {
      const index = recipe.favouritedBy.indexOf(req.body.userId);
      recipe.favouritedBy.splice(index, 1);
      console.log(recipe.favouritedBy);
      recipe.save();
      res.status(201).send(recipe);
    } else {
      recipe.favouritedBy.push(req.body.userId);
      recipe.save();
      res.status(201).send(recipe);
    }
  } catch (error) {
    res.status(400).send({ error, message: "Could not favourite recipe" });
  }
};

const getRecipeDetails = async (req, res) => {
  try {
    // Find user and populate their recipes array:
    const id = req.params.id;
    const recipe = await recipeModel.findOne({ _id: id });

    res.status(200).send(recipe);
  } catch (error) {
    res.status(404).send({ error, message: "Resource not found" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const userId = req.params.userId;
    const recipeId = req.params.recipeId;

    // Delete recipe from recipes collection:
    const response = await recipeModel.deleteOne({ _id: recipeId });

    if (response.deletedCount === 1) {
      // Update recipes array in user collection:
      const user = await userModel.findOne({ _id: userId });
      const index = user.recipes.indexOf(recipeId);

      if (index !== -1) {
        user.recipes.splice(index, 1);
        user.save();
      }
    }

    res.status(200).send({ success: true, message: "Recipe deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error, message: "Could not delete recipe" });
  }
};

module.exports = {
  getRecipes,
  addARecipe,
  toggleFavouritedUser,
  getRecipeDetails,
  deleteRecipe,
};
