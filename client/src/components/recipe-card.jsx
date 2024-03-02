import { useStore } from "../zustand/store";
import { toggleFavouritedBy } from "../services/api-service";
import favouriteIconTrue from "../assets/favourite-true-icon.svg";
import favouriteIconFalse from "../assets/favourite-false-icon.svg";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  // VARIABLES:
  const userID = useStore((state) => state.userID);
  const recipes = useStore((state) => state.recipes);
  const { updateRecipes } = useStore();
  let favouriteRecipes = recipes.filter(
    (recipe) => recipe.favouritedBy.indexOf(userID) !== -1,
  );
  const navigate = useNavigate();

  // FUNCTIONS:
  async function handleFavourite(recipeID, userID) {
    const res = await toggleFavouritedBy(recipeID, userID);
    updateRecipes(res); // Updates the Zustand recipes array to reflect favourite status
  }

  // RENDER:
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt="Recipe Photo" className="recipe-img" />
      <div className="recipe-details">
        <div className="recipe-title-desc">
          <h3>{recipe.title}</h3>
          <p>{recipe.shortDescription}</p>
        </div>
        <div></div>
        <img
          src={
            favouriteRecipes &&
            favouriteRecipes.find((favRecipe) => favRecipe._id === recipe._id)
              ? favouriteIconTrue
              : favouriteIconFalse
          }
          alt="Heart icon"
          className="favourite-icon"
          onClick={() => handleFavourite(recipe._id, userID)}
        />
      </div>
    </div>
  );
}

export default RecipeCard;
