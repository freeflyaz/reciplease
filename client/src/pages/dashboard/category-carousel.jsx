import RecipeCard from "../../components/recipe-card";
import { useStore } from "../../zustand/store";

function CategoryCarousel({ categoryTitle }) {
  // ZUSTAND:
  const recipes = useStore((state) => state.recipes);

  // VARIABLES:
  const recipesByCategory = recipes.filter(
    (recipe) => recipe.category === categoryTitle,
  );

  // RENDER:
  return (
    <>
      {recipesByCategory.length > 0 && (
        <>
          <h2>{categoryTitle}</h2>
          <div className="category-carousel-container">
            {recipesByCategory.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} className="test" />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default CategoryCarousel;
