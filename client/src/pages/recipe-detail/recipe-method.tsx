function RecipeMethod({ recipeDetail }) {
  // RENDER:
  return (
    <div className="recipe-container">
      <div className="recipe-img-container">
        <img
          src={recipeDetail.imageUrl}
          alt="Recipe photo"
          className="recipe-img"
        />
      </div>

      <div className="ingredients-method">
        <h2>Method</h2>
        {recipeDetail.method &&
          recipeDetail.method.map((step, index) => (
            <div key={index}>
              <h3>{`Step ${index + 1}`}</h3>
              <p>{step}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeMethod;
