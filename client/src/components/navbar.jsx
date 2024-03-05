import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // ZUSTAND:
  const {
    updateUserID,
    updatefilteredCategory,
    updateSelectedCategoryButton,
    updateActiveNavButton,
  } = useStore();

  // VARIABLES:
  const navigate = useNavigate();

  // RENDER:
  return (
    <div className="navbar">
      <img
        src={recipleaseLogo}
        alt="Reciplease Logo"
        className="reciplease-logo"
        onClick={() => {
          updatefilteredCategory("All Recipes");
          updateSelectedCategoryButton("All Recipes");
          updateActiveNavButton(1);
          navigate("/dashboard");
        }}
      />
      <button
        className="btn-large"
        onClick={() => {
          updatefilteredCategory("All Recipes");
          updateSelectedCategoryButton("All Recipes");
          updateActiveNavButton(1);
          updateUserID("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Navbar;
