import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../utils/FetchData";
import CardItem from "./CardItem";
const PlayCard = ({ reTry }) => {
  const [cardsArray, setCardsArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [won, setWon] = useState(0);

  const handleSelectedCard = (item) => {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  };
  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    const newGame = async () => {
      const res = await getData();
      const randomOrderArray = res.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray);
    };
    newGame();
  }, []);

  const removeSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  };
  return (
    <div className="card">
      <div className="header">
        <p className="alert">Game Started!</p>
      </div>
      <div className="board">
        {
          // cards component help in coverting the
          // data from array to visible data for screen
          cardsArray.map((item) => (
            <CardItem
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCard}
              toggled={
                item === firstCard ||
                item === secondCard ||
                item.matched === true
              }
              stopflip={stopFlip}
            />
          ))
        }
      </div>
      <button onClick={reTry}>Re Try</button>
    </div>
  );
};

export default PlayCard;
