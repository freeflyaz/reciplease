import { useStore } from "../../zustand/store";
import React from "react";

type Category = "All Recipes" | "Starters" | "Mains" | "Sides" | "Desserts" | "Bakery" | "Drinks" | "Favourites";

const FilterButtons: React.FC = () => {
  // ZUSTAND:
  const selectedCategoryButton = useStore((state) => state.selectedCategoryButton);
  const updateFilteredCategory = useStore((state) => state.updateFilteredCategory);
  const updateSelectedCategoryButton = useStore((state) => state.updateSelectedCategoryButton);

  // FUNCTIONS:
  function handleClick(buttonName: Category) {
    updateSelectedCategoryButton(buttonName);
    updateFilteredCategory(buttonName);
  }

  // RENDER:
  return (
    <div className="filter-btns">
      <button
        className={`btn-category ${selectedCategoryButton === "All Recipes" ? "active" : ""}`}
        onClick={() => handleClick("All Recipes")}
      >
        All Recipes
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Starters" ? "active" : ""}`}
        onClick={() => handleClick("Starters")}
      >
        Starters
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Mains" ? "active" : ""}`}
        onClick={() => handleClick("Mains")}
      >
        Mains
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Sides" ? "active" : ""}`}
        onClick={() => handleClick("Sides")}
      >
        Sides
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Desserts" ? "active" : ""}`}
        onClick={() => handleClick("Desserts")}
      >
        Desserts
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Bakery" ? "active" : ""}`}
        onClick={() => handleClick("Bakery")}
      >
        Bakery
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Drinks" ? "active" : ""}`}
        onClick={() => handleClick("Drinks")}
      >
        Drinks
      </button>

      <button
        className={`btn-category ${selectedCategoryButton === "Favourites" ? "active" : ""}`}
        onClick={() => handleClick("Favourites")}
      >
        Favourites
      </button>
    </div>
  );
}

export default FilterButtons;
