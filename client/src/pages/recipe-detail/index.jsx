import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/navbar";
import { useStore } from "../../zustand/store";
import RecipeIngredients from "./recipe-ingredients";
import RecipeMethod from "./recipe-method";
import durationIcon from "../../assets/duration-icon.svg";

function RecipeDetail() {
  // STATES:
  let [selectedButton, setSelectedButton] = useState("Ingredients");

  // ZUSTAND:
  const allRecipes = useStore((state) => state.recipes);

  // VARIABLES:
  const params = useParams();
  const recipeId = params.id;
  const recipeDetail = allRecipes.find((recipe) => recipe._id === recipeId);

  // FUNCTIONS:
  function handleClick(buttonName) {
    setSelectedButton(buttonName);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // RENDER:
  if (recipeDetail) {
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
              <p>{`${recipeDetail.servings} servings`}</p>
              <div className="duration">
                <img src={durationIcon} alt="" />
                <p>{`${recipeDetail.duration} mins`}</p>
              </div>
            </div>
          </div>
        </div>

        {selectedButton === "Ingredients" && (
          <RecipeIngredients recipeDetail={recipeDetail} />
        )}

        {selectedButton === "Method" && (
          <RecipeMethod recipeDetail={recipeDetail} />
        )}
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <h2>Loading...</h2>
      </>
    );
  }
}

export default RecipeDetail;
