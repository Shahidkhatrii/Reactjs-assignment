import React, { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="nav-container">
      {!toggleMenu ? (
        <div className="nav-menu" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
      ) : (
        <div className="nav-menu-close" onClick={handleToggle}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      )}

      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" />
      </div>

      <div className={`menu-list  ${toggleMenu && "active"}`}>
        <ul>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Website Builders</a>
          </li>
          <li>
            <a href="#">Today's deals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
