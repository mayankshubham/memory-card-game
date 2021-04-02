import React from "react";
import classnames from "classnames";
import pokeball from "./images/pokeball.png";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={pokeball} alt="pokeball" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="pokeball" />
      </div>
    </div>
  );
};

export default Card;
