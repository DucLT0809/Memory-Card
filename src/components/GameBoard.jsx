//GameBoard.js

import React from "react";
// import Data from "./data";
import { handleResponseData, fetchData } from "../utils/FetchData";
import Card from "./Card";
import { data } from "../utils/FakeData";
function GameBoard() {
  const [cardsArray, setCardsArray] = React.useState([]);
  const [moves, setMoves] = React.useState(0);
  const [firstCard, setFirstCard] = React.useState(null);
  const [secondCard, setSecondCard] = React.useState(null);
  const [stopFlip, setStopFlip] = React.useState(false);
  const [won, setWon] = React.useState(0);
  // start new game
  const newGame = async () => {
    const temp = await fetchData();
    const res = await handleResponseData(temp);
    const random = res.sort(() => 0.5 - Math.random());
    setCardsArray(random);
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    setWon(0);
  };
  // handle selected card
  const handleSelectedCards = (item) => {
    if (firstCard !== null && firstCard.newId !== item.newId) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  };
  // remove selection
  const removeSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  };
  // auto start new game on start
  React.useEffect(() => {
    newGame();
  }, []);
  // compare 2 selected card
  React.useEffect(() => {
    if (firstCard && secondCard) {
      console.log("first card: ", firstCard);
      console.log("second card: ", secondCard);

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
  return (
    <div className="container">
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      <div className="board">
        {cardsArray.map((item) => (
          <Card
            key={item.newId}
            item={item}
            toggled={
              item === firstCard || item === secondCard || item.matched === true
            }
            handleSelectedCards={handleSelectedCards}
            stopFlip={stopFlip}
          />
        ))}
      </div>
      <div className="bottom--container">
        {won == 6 ? (
          <h3>You won in {moves} moves !!!</h3>
        ) : (
          <h3>Moves: {moves}</h3>
        )}
        <button className="button" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
