import React, { useState } from "react";
import img from "../assets/images/listImg.png";
import Button from "./Button";
import Rating from "./Rating";
import cup from "../assets/images/cup.svg";
import down from "../assets/images/down.svg";
import tick from "../assets/images/tick.svg";
const ListCard = ({
  title,
  description,
  imgTitle,
  mainHighlights,
  rating,
  badge,
  offer,
  index,
}) => {
  const [toggleMoreInfo, setToggleMoreInfo] = useState(false);
  const handleToggle = () => {
    setToggleMoreInfo(!toggleMoreInfo);
  };
  return (
    <div className="card-container">
      {badge ? (
        <div className="card-badge">
          <img src={cup} alt="icon" />
          {badge}
        </div>
      ) : (
        <></>
      )}
      <div className="card-number">{index}</div>
      <div className="img-con">
        <img src={img} alt={title} />
        <p>{imgTitle}</p>
      </div>
      <div className="detail-con">
        <p className="title">
          {title}
          <span>{description}</span>
        </p>
        {offer ? <div className="offer-badge">{offer}% Off</div> : <></>}
        <p className="title">Main Highlights</p>

        {mainHighlights.discription ? (
          <p className="highlight">{mainHighlights.discription}</p>
        ) : (
          <></>
        )}

        {mainHighlights.ratings ? (
          <div className="highlight-ratings">
            {mainHighlights.ratings.map((rating, i) => {
              return (
                <div key={i} className="rating-list">
                  <p>{rating[1]}</p>
                  <span>{rating[0]}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        {mainHighlights.likeFactors ? (
          <div className="highlight-like">
            <p>Why we love it</p>
            {mainHighlights.likeFactors.map((data, i) => {
              return (
                <p key={i}>
                  <img src={tick} alt="icon" />
                  <span>{data}</span>
                </p>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        {/* Here we can render moreInfo based on toggleMoreInfo's state */}

        {!toggleMoreInfo ? (
          <a onClick={handleToggle}>
            Show more
            <img src={down} alt="icon" />
          </a>
        ) : (
          <a onClick={handleToggle}>Show less</a>
        )}
      </div>

      <div className="review-con">
        <Rating {...rating} />
        <Button title="View" width="13rem" />
      </div>
    </div>
  );
};

export default ListCard;
