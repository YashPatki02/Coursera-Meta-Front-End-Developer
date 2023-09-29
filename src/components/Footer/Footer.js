import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img src={Logo} alt="Little Lemon Logo" width={200}/>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3> <br />
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
