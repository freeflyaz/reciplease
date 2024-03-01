import { create } from "zustand";

export const useStore = create((set) => ({
  userID: "65df6b55a7005cc4479303d1",

  recipes: [],
  addRecipes: (recipes) => set((state) => ({ ...state, recipes })),
  updateRecipes: (recipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((existingRecipe) =>
        existingRecipe._id === recipe._id ? recipe : existingRecipe,
      );
      return { ...state, recipes: updatedRecipes };
    }),

  filteredCategory: "All Recipes",
  updatefilteredCategory: (category) =>
    set((state) => ({ ...state, filteredCategory: category })),

  favouriteRecipes: [],
  addToFavouriteRecipes: (recipe) =>
    set((state) => ({
      ...state,
      favouriteRecipes: [...state.favouriteRecipes, recipe],
    })),
}));
