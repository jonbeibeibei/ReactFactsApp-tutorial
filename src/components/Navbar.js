import React from "react";
import reactIcon from "/public/images/react.png";

function Navbar() {
  return (
    <nav>
      <img src={reactIcon} className="nav--icon" alt="navicon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course Project #1</h4>
    </nav>
  );
}

export default Navbar;
