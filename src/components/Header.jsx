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
        <a>Tools</a>
        <a>AWS Builder</a>
        <a>Start Build</a>
        <a>Build Supplies</a>
        <a>Tooling</a>
        <a>BlueHosting</a>
      </div>
    </div>
  );
};

export default Header;
