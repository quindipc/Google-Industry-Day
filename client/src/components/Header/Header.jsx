// Dependancies
import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import "./Header.scss";
import GoogleLogo from "../../assets/images/logo/OOGLE-Logo.png";
import GearIcon from "../../assets/images/icons/gear-svgrepo-com.svg";
import MenuIcon from "../../assets/images/icons/threelines.svg";
import Avatar from "../../assets/images/avatar/Mohan-muruge.jpg";
import MoreIcon from "../../assets/images/icons/threedots.svg";

// Components

// Pages

export default function Header() {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <Link to="/" className="header__logo-index">
            <img
              className="header__logo--tablet"
              src={GoogleLogo}
              alt="Google Logo"
            />
          </Link>
          <img className="header__menu" src={MenuIcon} alt="menu" />
          <Link to="/" className="header__logo-index">
            <img
              className="header__logo--mobile"
              src={GoogleLogo}
              alt="Google Logo"
            />
          </Link>
          <img className="header__avatar--mobile" src={Avatar} alt="Avatar" />
        </div>

        <form
          className="header__searchbar-container"
          onSubmit={handleSearchSubmit}
        >
          <input className="header__search" type="text" placeholder="Search" />
        </form>

        <div className="header__profile-settings">
          <img className="header__edit-icon" src={GearIcon} alt="Gear Icon" />
          <img className="header__edit-icon" src={MoreIcon} alt="Gear Icon" />
          <img className="header__avatar--tablet" src={Avatar} alt="Avatar" />
        </div>
      </header>
      <div className="header__divider-container">
        <hr className="header__divider" />
      </div>
    </>
  );
}
