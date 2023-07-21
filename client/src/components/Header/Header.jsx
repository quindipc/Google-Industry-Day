// Dependancies
import { useState } from "react";

// Assets
import "./Header.scss";

// Components

// Pages

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search operation with the searchQuery state value
    console.log("Search Query:", searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="" alt="Google Logo" />
      </div>
      <div className="header__searchbar">
        <form action="">
          <input
            className="header__search"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search"
          />
          <button type="submit" className="header__button">
            Search
          </button>
              </form>
          </div>
          <div className="header__edit">
              <img className="header__edit-icon" src="" alt="Gear Icon" />
          </div>
          <div className="header__avatar">
              <img className="header__avatar-img" src="" alt="Avatar" />
          </div>
    </header>
  );
}
