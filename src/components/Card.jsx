import React from "react";

function Card({ item, stopFlip, handleSelectedCards, toggled }) {
  const [isRotate, setIsRotate] = React.useState(false);
  const handleRotation = () => setIsRotate(!isRotate);
  return (
    <div className="flip-box">
      <div
        className={`flip-box-inner ${toggled ? "rotate" : ""}`}
        onClick={() => !stopFlip && handleSelectedCards(item)}
      >
        <div className="flip-box-front"></div>
        <div className="flip-box-back">
          <img src={item.imgUrl} alt={item.name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
