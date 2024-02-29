import favouriteIconRed from "../assets/favourite-true-icon.svg";
import favouriteIconGrey from "../assets/favourite-false-icon.svg";
import { addUserToFavouritedBy } from "../services/api-service";
import { useState } from "react";

function RecipeCard({ recipe }) {
  const [isFavourite, setIsFavourite] = useState(false);

  async function handleClick(recipeID, userID) {
    // const res = await addUserToFavouritedBy(recipeID, userID);
    setIsFavourite(!isFavourite);
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
          src={isFavourite ? favouriteIconRed : favouriteIconGrey}
          alt="Heart icon"
          className="favourite-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default RecipeCard;
