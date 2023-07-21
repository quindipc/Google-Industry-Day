// Dependancies
import React from "react";
// import { useState } from "react";

// Assets
import "./Header.scss";

// Components

// Pages

export default function Header() {


  return (
    <header className="header">
      <div className="header__logo">
        {/* <img src="" alt="Google Logo" /> */}
      </div>
      <div className="header__searchbar">
        <form action="">
          <input
            className="header__search"
            type="text"
            placeholder="Search"
          />
          <button type="submit" className="header__button">
            Search
          </button>
              </form>
          </div>
          <div className="header__edit">
              {/* <img className="header__edit-icon" src="" alt="Gear Icon" /> */}
          </div>
          <div className="header__avatar">
              {/* <img className="header__avatar-img" src="" alt="Avatar" /> */}
          </div>
    </header>
  );
}
