import favouriteIconGrey from "../assets/favourite-false-icon.svg";

function RecipeCard({ recipe }) {
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
          src={favouriteIconGrey}
          alt="Heart icon"
          className="favourite-icon"
        />
      </div>
    </div>
  );
}

export default RecipeCard;
