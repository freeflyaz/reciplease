import { create } from 'zustand';

// Define structure
interface StoreState {
  userID: string;
  recipes: Recipe[];
  filteredCategory: string;
  selectedCategoryButton: string;
  activeNavButton: number;
}
// Define actions
interface StoreActions {
  updateUserID: (userID: string) => void;
  addRecipes: (recipes: Recipe[]) => void;
  removeOneRecipe: (recipeID: string) => void;
  updateOneRecipe: (recipe: Recipe) => void;
  updateFilteredCategory: (category: string) => void;
  updateSelectedCategoryButton: (category: string) => void;
  updateActiveNavButton: (number: number) => void;
}

//Define Recipe
export interface Recipe {
  _id: any;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  servings: number;
  duration: number;
  ingredients: string;
  method: string;
  favouritedBy: string[];
}
// Define User
export interface User {
  firstName: string;
  email: string;
  password: string;
  recipes: string[];
}

//Combine state and actions
type StoreModel = StoreState & StoreActions;

export const useStore = create<StoreModel>((set) => ({
  // Initial state
  userID: '',
  recipes: [],
  filteredCategory: 'All Recipes',
  selectedCategoryButton: 'All Recipes',
  activeNavButton: 1,

  // Actions
  updateUserID: (userID) => set((state) => ({ ...state, userID })),
  addRecipes: (recipes) => set((state) => ({ ...state, recipes })),
  removeOneRecipe: (recipeID) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe._id !== recipeID),
    })),
  updateOneRecipe: (recipe) =>
    set((state) => ({
      recipes: state.recipes.map((existingRecipe) =>
        existingRecipe._id === recipe._id ? recipe : existingRecipe
      ),
    })),
  updateFilteredCategory: (category) =>
    set((state) => ({ ...state, filteredCategory: category })),
  updateSelectedCategoryButton: (category) =>
    set((state) => ({ ...state, selectedCategoryButton: category })),
  updateActiveNavButton: (number) =>
    set((state) => ({ ...state, activeNavButton: number })),
}));
