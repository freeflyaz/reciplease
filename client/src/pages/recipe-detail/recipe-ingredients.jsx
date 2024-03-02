import { useStore } from "../../zustand/store";
import { toggleFavouritedBy } from "../../services/api-service";
import favouriteIconTrue from "../../assets/favourite-true-icon.svg";
import favouriteIconFalse from "../../assets/favourite-false-icon.svg";

function RecipeIngredients({ recipe }) {
  // ZUSTAND VARIABLES:
  const userID = useStore((state) => state.userID);
  const { updateRecipes } = useStore();

  // FUNCTIONS:
  async function handleFavourite(recipeID, userID) {
    const res = await toggleFavouritedBy(recipeID, userID);
    updateRecipes(res); // Updates the Zustand recipes array to reflect favourite status
  }

  // RENDER:
  return (
    <div className="recipe-container">
      <div className="recipe-img-container">
        <img src={recipe.imageUrl} alt="Recipe photo" className="recipe-img" />
      </div>

      <div className="ingredients-details">
        <div className="favourite-ingredients">
          <img
            src={
              recipe.length && recipe.favouritedBy.indexOf(userID) !== -1
                ? favouriteIconTrue
                : favouriteIconFalse
            }
            alt="Heart icon"
            className="favourite-icon"
            onClick={() => handleFavourite(recipe._id, userID)}
          />
          <h2>{recipe.title}</h2>
        </div>

        <p>{recipe.longDescription}</p>

        <h3>Ingredients</h3>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input type="checkbox" name={ingredient} className="checkbox" />
              <label htmlFor={ingredient}>{ingredient}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeIngredients;
