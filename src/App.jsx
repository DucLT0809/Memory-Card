import { useState } from "react";
import "./App.css";
import RulesCard from "./components/RulesCard";
import PlayCard from "./components/PlayCard";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showPlayCard, setShowPlayCard] = useState(false);

  const handlePlay = () => {
    setShowPlayCard(true);
  };
  const handleReTry = () => {
    setShowPlayCard(false);
  };
  return (
    <div className="container">
      {showPlayCard ? (
        <PlayCard reTry={handleReTry} />
      ) : (
        <RulesCard onPlay={handlePlay} />
      )}
      <div className="score__board">
        <h2>Score: {score}</h2>
        <h2>Best Score:{bestScore}</h2>
      </div>
    </div>
  );
}

export default App;
