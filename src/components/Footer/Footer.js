import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img src="your-image-url-here" alt="Little Lemon Logo" />
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
            {/* Add more quick links as needed */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
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
