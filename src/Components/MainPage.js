import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleDone = () => {
    if (players.length < 4 && playerName !== "") {
      setPlayers([...players, `Player ${players.length + 1}: ${playerName}`]);
      setPlayerName("");
    }
    if (players.length === 3) {
      setInputDisabled(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="main-page">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1 className="title">WELCOME TO THE WHAT DO YOU MEME GAME</h1>

      <form>
        <div>
          <label>
            <h2>Player Name:</h2>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
              disabled={inputDisabled}
              onKeyPress={handleKeyPress}
            />
          </label>
          <button type="button" onClick={handleDone} disabled={inputDisabled}>
            Done
          </button>
        </div>
        <div className="player-list">
          {players.map((player, i) => (
            <div key={i}>{player}</div>
          ))}
        </div>
        {players.length === 4 && (
          <button
            type="button"
            className="start-game-button"
            onClick={() => navigate("/boardgame", { state: { players } })}
          >
            Start Game
          </button>
        )}
      </form>
    </div>
  );
};

export default MainPage;
