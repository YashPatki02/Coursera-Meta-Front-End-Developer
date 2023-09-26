import React from "react";
import Logo from "../../images/logo.png";
import "./Header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header-container">
      <img className="logo" src={Logo} alt="Logo" width={250} />
      <Nav />
    </header>
  );
}

export default Header;
