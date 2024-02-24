import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className="header-flex">
        <div>
          <span>
            <i className="fa-regular fa-circle-check"></i> Last Updated -
            February 22, 2020
          </span>

          <span>
            <i className="fa-solid fa-circle-info"></i> Advertising Disclosure
          </span>
        </div>

        <a>
          Top Relevant <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
      <hr />

      <div className="list-options">
        <a href="#">Tools</a>
        <a href="#">AWS Builder</a>
        <a href="#">Start Build</a>
        <a href="#">Build Supplies</a>
        <a href="#">Tooling</a>
        <a href="#">BlueHosting</a>
      </div>
    </div>
  );
};

export default Header;
