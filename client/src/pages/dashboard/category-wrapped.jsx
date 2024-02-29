import RecipeCard from "../../components/recipe-card";
import { useStore } from "../../zustand/store";

function CategoryWrapped({ categoryTitle }) {
  // Bring in all recipes and filter them to match the carousel's category:
  const recipes = useStore((state) => state.recipes);
  const recipesByCategory = recipes.length
    ? recipes.filter((recipe) => recipe.category === categoryTitle)
    : [];

  return (
    <>
      {recipesByCategory.length === 0 ? (
        <h2>You have no recipes in this section. Get cooking!</h2>
      ) : (
        <>
          <h2>{categoryTitle}</h2>
          <div className="category-wrapped-container">
            {recipesByCategory.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default CategoryWrapped;
