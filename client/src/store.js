import { create } from "zustand";

export const useStore = create((set) => ({
  userID: "65df6b55a7005cc4479303d1",
  recipes: [],
  updateRecipes: (recipes) => set((state) => ({ ...state, recipes })),
}));
