import LogInForm from "./login-form";
import RegisterForm from "./register-form";
import { useState } from "react";
import recipleaseLogo from "../../assets/reciplease-logo.svg";

function Auth() {
  // STATES:
  let [selectedButton, setSelectedButton] = useState("Log In");

  // FUNCTIONS:
  function handleClick(buttonName) {
    setSelectedButton(buttonName);
  }

  // RENDER:
  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <img
          src={recipleaseLogo}
          alt="Reciplease Logo"
          className="reciplease-logo"
        />
        <div className="auth-btns">
          <button
            className={`btn-category ${selectedButton === "Log In" ? "active" : ""}`}
            onClick={() => handleClick("Log In")}
          >
            Log In
          </button>
          <button
            className={`btn-category ${selectedButton === "Sign Up" ? "active" : ""}`}
            onClick={() => handleClick("Sign Up")}
          >
            Sign Up
          </button>
        </div>
        {selectedButton === "Log In" && <LogInForm />}
        {selectedButton === "Sign Up" && <RegisterForm />}
      </div>
    </div>
  );
}

export default Auth;
