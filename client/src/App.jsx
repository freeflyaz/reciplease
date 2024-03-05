import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import RecipeDetail from "./pages/recipe-detail/index";
import CreateRecipe from "./pages/create-recipe/index";
import { useStore } from "./zustand/store";

function App() {
  // ZUSTAND:
  const userID = useStore((state) => state.userID);

  // RENDER:
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          {!userID ? (
            <>
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
              <Route path="/create-recipe" element={<CreateRecipe />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
