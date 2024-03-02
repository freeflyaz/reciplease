import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // RENDER:
  return (
    <div className="navbar">
      <img
        src={recipleaseLogo}
        alt="Reciplease Logo"
        className="reciplease-logo"
        onClick={() => {
          navigate("/dashboard");
        }}
      />
      <button
        className="btn-large"
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Navbar;
