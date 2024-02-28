import recipleaseLogo from "../assets/reciplease-logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={recipleaseLogo} alt="Reciplease Logo" />
      <button className="btn-large">Log Out</button>
    </div>
  );
}

export default Navbar;
