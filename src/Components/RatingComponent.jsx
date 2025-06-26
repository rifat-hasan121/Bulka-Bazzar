import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingComponent = () => {
  const ratingChanged = (newRating) => {
    console.log("New rating:", newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        isHalf={true}
        emptyIcon={<i className="far fa-star" />}
        halfIcon={<i className="fa fa-star-half-alt" />}
        fullIcon={<i className="fa fa-star" />}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default RatingComponent;
