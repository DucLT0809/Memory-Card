import React, { useState } from "react";
import "./rulecard.css";
const RulesCard = ({ onPlay }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className={`card `}>
      <div className="header">
        <span className="icon">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <p className="alert">Memory Card</p>
      </div>

      <p className="message">
        The first player turns over 2 cards. If the pictures match, the player
        keeps the cards and tries again for another match. If they do not match
        the cards are turned over again and the player to the left takes a turn.
        Each player must try to remember where they have seen cards, so they can
        use them to make a match.
      </p>

      <div className="actions">
        <button className="read" onClick={onPlay}>
          Play
        </button>
      </div>
    </div>
  );
};

export default RulesCard;
