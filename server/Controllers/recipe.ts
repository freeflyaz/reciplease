const recipeModel = require("../Models/recipe");
const userModel = require("../Models/user");

const getRecipes = async (req, res) => {
  try {
    // Find user and populate their recipes array:
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ data: null, message: "Valid ID required" });
    }

    const user = await userModel.findOne({ _id: id }).populate("recipes");

    if (!user) {
      res.status(400).json({ data: null, message: "No user for this Id." });
    }

    res.status(200).send({
      data: user.recipes,
      message: "Successfully retrieved recipes for user",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: null, message: "Resource not found" });
  }
};

const addARecipe = async (req, res) => {
  try {
    // Add recipe to recipes collection:
    const recipe = await recipeModel.create(req.body.recipe);

    // Update recipes array in user collection:
    const user = await userModel.findOne({ _id: req.body.id });
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
  deleteRecipe,
};
