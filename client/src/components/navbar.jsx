import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        src={recipleaseLogo}
        alt="Reciplease Logo"
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
