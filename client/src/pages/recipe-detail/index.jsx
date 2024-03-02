import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRecipeDetails } from "../../services/api-service";
import Navbar from "../../components/navbar";
import RecipeIngredients from "./recipe-ingredients";
import RecipeMethod from "./recipe-method";
import durationIcon from "../../assets/duration-icon.svg";

function RecipeDetail() {
  // STATES:
  const [recipe, setRecipe] = useState({});
  let [selectedButton, setSelectedButton] = useState("Ingredients");

  // USE EFFECTS:
  // Get recipe details from database:
  const params = useParams();
  const recipeId = params.id;

  useEffect(() => {
    async function getRecipe(recipeId) {
      const res = await getRecipeDetails(recipeId);
      setRecipe(res);
    }
    getRecipe(recipeId);
  }, []);

  // FUNCTIONS:
  function handleClick(buttonName) {
    setSelectedButton(buttonName);
  }

  // RENDER:
  return (
    <div className="recipe-detail-container">
      <Navbar />
      <div className="spacer">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="toggle-btns">
            <button
              className={`btn-category ${selectedButton === "Ingredients" ? "active" : ""}`}
              onClick={() => handleClick("Ingredients")}
            >
              Ingredients
            </button>
            <button
              className={`btn-category ${selectedButton === "Method" ? "active" : ""}`}
              onClick={() => handleClick("Method")}
            >
              Method
            </button>
          </div>
          <div className="servings-duration">
            <p>{`${recipe.servings} servings`}</p>
            <div className="duration">
              <img src={durationIcon} alt="" />
              <p>{`${recipe.duration} mins`}</p>
            </div>
          </div>
        </div>
      </div>

      {selectedButton === "Ingredients" && (
        <RecipeIngredients recipe={recipe} />
      )}
      {selectedButton === "Method" && <RecipeMethod recipe={recipe} />}
    </div>
  );
}

export default RecipeDetail;
