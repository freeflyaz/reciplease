import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import RecipeDetail from "./pages/recipe-detail/index";
import CreateRecipe from "./pages/create-recipe/index";

function App() {
  // RENDER:
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </Router>
      <p className="footer">© 2024 Reciplease. All rights reserved.</p>
    </div>
  );
}

export default App;
