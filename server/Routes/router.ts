import express, { Request, Response, Router } from 'express';
import userController from '../Controllers/user';
import recipeController from '../Controllers/recipe';

//Router Type:
const router: Router = express.Router();

// userController routes:
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
// router.post("/logout", userController.logoutUser);

// recipeController routes:
router.get("/dashboard/:id", recipeController.getRecipes);
router.post("/create-recipe", recipeController.addARecipe);
router.post("/favourite-recipe", recipeController.toggleFavouritedUser);
router.delete(
  "/delete-recipe/:userId/:recipeId",
  recipeController.deleteRecipe,
);

router.all("*", (req: Request, res: Response) => {
  res.status(404).send("Sorry, not found...");
});

export default router;
