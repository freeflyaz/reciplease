import favouriteIconRed from "../assets/favourite-true-icon.svg";
import favouriteIconGrey from "../assets/favourite-false-icon.svg";
import { toggleFavouritedBy } from "../services/api-service";
import { useStore } from "../zustand/store";

function RecipeCard({ recipe }) {
  const userID = useStore((state) => state.userID);
  const recipes = useStore((state) => state.recipes);
  const { updateRecipes } = useStore(); // Updates the Zustand recipes array

  let favouriteRecipes = recipes.filter(
    (recipe) => recipe.favouritedBy.indexOf(userID) !== -1,
  );

  async function handleClick(recipeID, userID) {
    const res = await toggleFavouritedBy(recipeID, userID);
    updateRecipes(res);
  }

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
              ? favouriteIconRed
              : favouriteIconGrey
          }
          alt="Heart icon"
          className="favourite-icon"
          onClick={() => handleClick(recipe._id, userID)}
        />
      </div>
    </div>
  );
}

export default RecipeCard;
