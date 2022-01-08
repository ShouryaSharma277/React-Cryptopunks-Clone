import React from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

export const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo w-48" alt="punkLogo" />
      </div>

      <div className="searchBar flex-1 flex align-center rounded-3xl">
        <div className="searchIconContainer m-3">
          <img src={searchIcon} alt="Search Icon" />
        </div>

        <input
          className="bg-transparent border-none w-full outline-none text-white text-md"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems flex">
        <p className="cursor-pointer m-2">Drops</p>
        <p className="cursor-pointer m-2">Marketplace</p>
        <p className="cursor-pointer m-2">Create</p>
      </div>

      <div className="headerActions flex align-center">
        <div className="themeSwitchContainer cursor-pointer flex rounded-full p-4 justify-center align-center object-contain">
          <img
            className="themeSwitchIcon"
            src={themeSwitchIcon}
            alt="Theme switch button"
          />
        </div>
      </div>

      <div className="loginButton text-black rounded-3xl cursor-pointer">Get in</div>
    </div>
  );
};
