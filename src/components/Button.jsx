import React from "react";

const Button = ({ title, width = "10rem" }) => {
  return (
    <>
      <button className="primary-btn" style={{ width: width }}>
        {title}
      </button>
    </>
  );
};

export default Button;
