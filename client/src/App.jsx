import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import RecipeDetail from "./pages/recipe-detail";
import CreateRecipe from "./pages/create-recipe";

function App() {
  // RENDER:
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe-detail" element={<RecipeDetail />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
