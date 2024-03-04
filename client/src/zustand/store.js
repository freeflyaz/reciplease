import { create } from "zustand";

export const useStore = create((set) => ({
  userID: "65df6b55a7005cc4479303d1",
  updateUserID: (userID) => set((state) => ({ ...state, userID })),

  recipes: [],
  addRecipes: (recipes) => set((state) => ({ ...state, recipes })),
  removeOneRecipe: (recipeID) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) =>
        recipe._id !== recipeID
      );
      return { ...state, recipes: updatedRecipes };
    }),
  updateOneRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((existingRecipe) =>
        existingRecipe._id === recipe._id ? recipe : existingRecipe,
      );
      return { ...state, recipes: updatedRecipes };
    }),

  filteredCategory: "All Recipes",
  updatefilteredCategory: (category) =>
    set((state) => ({ ...state, filteredCategory: category })),

  activeNavButton: 1,
  updateActiveNavButton: (number) =>
    set((state) => ({ ...state, activeNavButton: number })),
}));
