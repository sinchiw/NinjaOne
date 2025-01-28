import React from "react";
import ninjalogo from "../assets/NinjaOneLogo.svg";
import "../css/nav.css"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
      <img src={ninjalogo} alt="Ninja one logo" />
      </div>
    </nav>
  );
};

export default Nav;
