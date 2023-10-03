import React from "react";
import Logo from "../../images/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img className="logo" src={Logo} alt="Logo" width={150} />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/menu" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/reserve" className="nav-link">
              Reservations
            </a>
          </li>
          <li className="nav-item">
            <a href="/order" className="nav-link">
              Order Online
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
