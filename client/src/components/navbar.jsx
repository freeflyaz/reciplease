import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // ZUSTAND:
  const { updateUserID, updatefilteredCategory, updateSelectedCategoryButton } =
    useStore();

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
          navigate("/dashboard");
        }}
      />
      <button
        className="btn-large"
        onClick={() => {
          updatefilteredCategory("All Recipes");
          updateSelectedCategoryButton("All Recipes");
          updateUserID("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Navbar;
