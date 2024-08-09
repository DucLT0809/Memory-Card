// App.js
// Renders the GameBoardComponent
import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Rules from "./components/Rules";
function App() {
  const [isPlay, setIsPlay] = useState(false);
  const handlePlay = () => setIsPlay(true);
  return (
    <div className="App">
      {!isPlay ? <Rules handlePlay={handlePlay} /> : <GameBoard />}
    </div>
  );
}

export default App;
