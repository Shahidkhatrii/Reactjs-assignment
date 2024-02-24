import React from "react";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" />
      </div>

      <span>Categories</span>
      <span>Website Builders</span>
      <span>Today's deals</span>
    </div>
  );
};

export default NavBar;
