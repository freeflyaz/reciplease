import recipleaseLogo from "../assets/reciplease-logo.svg";
import { useStore } from "../zustand/store";

function Navbar() {
  // ZUSTAND:
  const { updateUserID } = useStore();

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
          updateUserID("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Navbar;
