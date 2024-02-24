import React from "react";
import star from "../assets/images/Vector1.svg";
import halfStar from "../assets/images/Vector.svg";
import emptyStar from "../assets/images/Vector2.svg";
const Rating = ({ ratingNumber, ratingDisc }) => {
  const stars = ratingNumber / 2;

  const renderStars = () => {
    const starElements = [];

    for (let i = 1; i <= 5; i++) {
      console.log(i);
      if (i <= stars || (i === Math.ceil(stars) && stars % 1 > 0.75)) {
        starElements.push(<img key={i} src={star} alt="star" />);
      } else if (i === Math.ceil(stars) && stars % 1 >= 0.5) {
        starElements.push(<img key={i} src={halfStar} alt="star" />);
      } else {
        starElements.push(<img key={i} src={emptyStar} alt="star" />);
      }
    }
    return starElements;
  };
  return (
    <div className="Rating-container">
      <h2>{ratingNumber}</h2>
      <p>{ratingDisc}</p>
      <div className="rating">{renderStars()}</div>
    </div>
  );
};

export default Rating;
