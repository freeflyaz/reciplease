import searchIcon from "../../assets/search-icon.svg";

function AddAndSearchBar() {
  return (
    <div className="add-and-search-bar">
      <button className="btn-large">+</button>
      <form className="search-bar">
        <img src={searchIcon} alt="Magnifying glass icon" />
        <input type="text" placeholder="Search here..."></input>
      </form>
    </div>
  );
}

export default AddAndSearchBar;
