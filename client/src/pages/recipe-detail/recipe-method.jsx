function RecipeMethod({ recipe }) {
  // RENDER:
  return (
    <div className="recipe-container">
      <div className="recipe-img-container">
        <img src={recipe.imageUrl} alt="Recipe photo" className="recipe-img" />
      </div>

      <div className="ingredients-method">
        <h2>Method</h2>
        {recipe.method &&
          recipe.method.map((step, index) => (
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
