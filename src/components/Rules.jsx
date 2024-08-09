import React from "react";

const Rules = ({ handlePlay }) => {
  return (
    <div className="rule--container">
      <h1>Rules</h1>
      <p>
        The player turns over 2 cards. If the pictures match, the player keeps
        the cards and tries again for another match. If they do not match the
        cards are turned over again and the player try again. Player must try to
        remember where they have seen cards, so he/she can use them to make a
        match.
      </p>
      <button type="button" onClick={handlePlay}>
        Play Now
      </button>
    </div>
  );
};

export default Rules;
