import searchIcon from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import React, {ChangeEvent} from "react";

interface AddAndSearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}


const AddAndSearchBar: React.FC<AddAndSearchBarProps> = ({ query, setQuery }) => {
  // VARIABLES:
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  // RENDER:
  return (
    <>
      <div className="add-and-search-bar">
        <button
          className="btn-large"
          onClick={() => {
            navigate("/create-recipe");
          }}
        >
          Add recipe
        </button>
        <form className="search-bar">
          <img src={searchIcon} alt="Magnifying glass icon" />
          <input
            type="search"
            placeholder="Search here..."
            value={query}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
    </>
  );
}

export default AddAndSearchBar;
