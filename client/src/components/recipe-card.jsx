import { useStore } from "../zustand/store";
import { toggleFavouritedBy, deleteRecipe } from "../services/api-service";
import favouriteIconTrue from "../assets/favourite-true-icon.svg";
import favouriteIconFalse from "../assets/favourite-false-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
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
  const { updatefilteredCategory } = useStore(); // Updates the Zustand filteredCategory value

  // FUNCTIONS:
  async function handleFavourite(recipeID, userID) {
    const res = await toggleFavouritedBy(recipeID, userID);
    updateRecipes(res); // Updates the Zustand recipes array to reflect favourite status
  }

  async function handleDelete(userId, recipeId) {
    await deleteRecipe(userId, recipeId);
    navigate("/dashboard");
    // updateRecipes(res); // Updates the Zustand recipes array to reflect favourite status
  }

  // RENDER:
  return (
    <div className="recipe-card">
      <img
        src={recipe.imageUrl}
        alt="Recipe Photo"
        className="recipe-card-img"
        onClick={() => {
          navigate(`/recipe-detail/${recipe._id}`);
          updatefilteredCategory("All Recipes");
        }}
      />
      <div className="recipe-details">
        <div className="recipe-title-desc">
          <h3>{recipe.title}</h3>
          <p>{recipe.shortDescription}</p>
        </div>
        <div className="favourite-delete-icons">
          <img
            src={
              favouriteRecipes &&
              favouriteRecipes.find((favRecipe) => favRecipe._id === recipe._id)
                ? favouriteIconTrue
                : favouriteIconFalse
            }
            alt="Heart icon"
            onClick={() => handleFavourite(recipe._id, userID)}
          />
          <img
            src={deleteIcon}
            alt="Delete Icon"
            onClick={() => handleDelete(userID, recipe._id)}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
