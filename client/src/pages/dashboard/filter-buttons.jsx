import { useState } from "react";
import { useStore } from "../../zustand/store";

function FilterButtons() {
  // STATES:
  let [selectedButton, setSelectedButton] = useState("All Recipes");
  const { updatefilteredCategory } = useStore(); // Updates the Zustand filteredCategory value

  // FUNCTIONS:
  function handleClick(buttonName) {
    setSelectedButton(buttonName);
    updatefilteredCategory(buttonName);
  }

  // RENDER:
  return (
    <div className="filter-btns">
      <button
        className={`btn-category ${selectedButton === "All Recipes" ? "active" : ""}`}
        onClick={() => handleClick("All Recipes")}
      >
        All Recipes
      </button>
      <button
        className={`btn-category ${selectedButton === "Starters" ? "active" : ""}`}
        onClick={() => handleClick("Starters")}
      >
        Starters
      </button>
      <button
        className={`btn-category ${selectedButton === "Mains" ? "active" : ""}`}
        onClick={() => handleClick("Mains")}
      >
        Mains
      </button>
      <button
        className={`btn-category ${selectedButton === "Sides" ? "active" : ""}`}
        onClick={() => handleClick("Sides")}
      >
        Sides
      </button>
      <button
        className={`btn-category ${selectedButton === "Desserts" ? "active" : ""}`}
        onClick={() => handleClick("Desserts")}
      >
        Desserts
      </button>
      <button
        className={`btn-category ${selectedButton === "Bakery" ? "active" : ""}`}
        onClick={() => handleClick("Bakery")}
      >
        Bakery
      </button>
      <button
        className={`btn-category ${selectedButton === "Drinks" ? "active" : ""}`}
        onClick={() => handleClick("Drinks")}
      >
        Drinks
      </button>
      <button
        className={`btn-category ${selectedButton === "Favourites" ? "active" : ""}`}
        onClick={() => handleClick("Favourites")}
      >
        Favourites
      </button>
    </div>
  );
}

export default FilterButtons;
