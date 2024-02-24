import React from "react";
import img from "../assets/images/listImg.png";
import Button from "./Button";
const DealsCard = ({ title, despcription, price, limitedOffer }) => {
  return (
    <div className="deals-card">
      <div className="img-con">
        <img src={img} alt="image" />
      </div>
      <div className="card-details">
        {limitedOffer ? (
          <div className="limited-offer">
            <span>{price?.discount}% Off</span>
            <span>Limited time</span>
          </div>
        ) : (
          <></>
        )}
        <h1>{title}</h1>
        <p>{despcription}</p>
        <div className="price">
          <h1>${price.selling}</h1>
          <span className="mrp">${price.mrp}</span>
          <span className="discount">({price?.discount}% Off)</span>
        </div>
        <Button title={"View Deal"} width="100%" />
      </div>
    </div>
  );
};

export default DealsCard;
