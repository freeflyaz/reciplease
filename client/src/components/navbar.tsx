import React from "react";
import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  // ZUSTAND:
  const {
    updateUserID,
    updateFilteredCategory,
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
          updateFilteredCategory("All Recipes");
          updateSelectedCategoryButton("All Recipes");
          updateActiveNavButton(1);
          navigate("/dashboard");
        }}
      />
      <button
        className="btn-large"
        onClick={() => {
          updateFilteredCategory("All Recipes");
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
