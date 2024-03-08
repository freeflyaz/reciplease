import RecipeCard from "../../components/recipe-card";
import { useStore } from "../../zustand/store";
import scrollIcon from "../../assets/scroll-icon.svg";
import React from "react";
import { Recipe } from "../../zustand/store";

interface CategoryWrappedProps {
  categoryTitle: string;
}

const CategoryCarousel: React.FC<CategoryWrappedProps> = ({ categoryTitle }) => {
  // ZUSTAND:
  const recipes = useStore((state) => state.recipes);

  // VARIABLES:
  const recipesByCategory = recipes.filter(
    (recipe: Recipe) => recipe.category === categoryTitle,
  );

  // RENDER:
  return (
    <>
      {recipesByCategory.length > 0 && (
        <>
          <div className="title-and-scroll-icon">
            <h2>{categoryTitle}</h2>
            {recipesByCategory.length > 3 && (
              <img src={scrollIcon} alt="Scroll Icon" />
            )}
          </div>
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
