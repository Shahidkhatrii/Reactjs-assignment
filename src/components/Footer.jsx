import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Web Builder</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
            <li>
              <a href="#">Data Center</a>
            </li>
            <li>
              <a href="#">Robotic-Automation</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-country">
          <p>
            United States <i className="fa-solid fa-chevron-down"></i>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
