import Navbar from "../../components/navbar";
import AddAndSearchBar from "./add-and-search-bar";
import FilterButtons from "./filter-buttons";
import CategoryCarousel from "./category-carousel";
import CategoryWrapped from "./category-wrapped";
import { useStore } from "../../store";
import { useEffect } from "react";
import { getRecipes } from "../../services/api-service";

function Dashboard() {
  // Bring in userID and recipes array from Zustand store:
  const userID = useStore((state) => state.userID);
  const filteredCategory = useStore((state) => state.filteredCategory);
  const { updateRecipes } = useStore(); // Updates the Zustand recipes array

  useEffect(() => {
    // Get all recipes on load and update Zustand store:
    async function getRecipesArr(userID) {
      const res = await getRecipes(userID);
      updateRecipes(res);
    }
    getRecipesArr(userID);
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <AddAndSearchBar />
      <FilterButtons />
      {
        // All Recipes button selected:
        filteredCategory === "All Recipes" && (
          <>
            <CategoryCarousel categoryTitle="Starters" />
            <CategoryCarousel categoryTitle="Mains" />
            <CategoryCarousel categoryTitle="Sides" />
            <CategoryCarousel categoryTitle="Desserts" />
            <CategoryCarousel categoryTitle="Bakery" />
            <CategoryCarousel categoryTitle="Drinks" />
          </>
        )
      }

      {
        // Specific category button selected:
        filteredCategory !== "All Recipes" &&
          filteredCategory === `${filteredCategory}` && (
            <>
              <CategoryWrapped categoryTitle={`${filteredCategory}`} />
            </>
          )
      }
    </div>
  );
}

export default Dashboard;
