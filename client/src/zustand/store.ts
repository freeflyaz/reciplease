import { create } from "zustand";

export const useStore = create((set) => ({
  userID: "",
  updateUserID: (userID) => set((state) => ({ ...state, userID })),

  recipes: [],
  addRecipes: (recipes) => set((state) => ({ ...state, recipes })),
  removeOneRecipe: (recipeID) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe._id !== recipeID,
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

  selectedCategoryButton: "All Recipes",
  updateSelectedCategoryButton: (category) =>
    set((state) => ({ ...state, selectedCategoryButton: category })),

  activeNavButton: 1,
  updateActiveNavButton: (number) =>
    set((state) => ({ ...state, activeNavButton: number })),
}));
