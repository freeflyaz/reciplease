import RecipeCard from "../../components/recipe-card";
import { useStore } from "../../zustand/store";
import React from "react";

interface CategoryWrappedProps {
  categoryTitle: string;
}

const CategoryWrapped: React.FC<CategoryWrappedProps> = ({ categoryTitle }) => {
  // ZUSTAND:
  const userID = useStore((state) => state.userID);
  const recipes = useStore((state) => state.recipes);

  // VARIABLES
  const recipesByCategory = recipes.length
    ? recipes.filter((recipe) => recipe.category === categoryTitle)
    : [];
  const favouriteRecipes = recipes.length
    ? recipes.filter((recipe) => recipe.favouritedBy.indexOf(userID) !== -1)
    : [];

  // RENDER:
  return (
    <>
      {categoryTitle !== "Favourites" && recipesByCategory.length === 0 ? (
        <h2>So far, you have no recipes in this section...</h2>
      ) : (
        categoryTitle !== "Favourites" && (
          <>
            <h2>{categoryTitle}</h2>
            <div className="category-wrapped-container">
              {recipesByCategory.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </>
        )
      )}

      {categoryTitle === "Favourites" && favouriteRecipes.length === 0 ? (
        <h2>So far, you have no favourite recipes...</h2>
      ) : (
        categoryTitle === "Favourites" && (
          <>
            <h2>{categoryTitle}</h2>
            <div className="category-wrapped-container">
              {favouriteRecipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
}

export default CategoryWrapped;
