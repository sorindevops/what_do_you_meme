import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./MainPage.css";

const MainPage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/boardgame", { state: { players } });
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleDone = () => {
    console.log(players);
    console.log(playerName);
    if (players.length === 4 && playerName !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  return (
    <div className="main-page">
      <h1 className="title">WELCOME TO THE WHAT DO YOU MEME GAME</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player Name:
            <input
              // disabled= player >=4</input>
              type="text"
              value={playerName}
              onChange={handleChange}
              // onKeyPress={(event) => {
              //   if (event.key === "Enter") {
              //     handleDone();
              //   }
              // }}
              // required
            />
          </label>
          <button type="button" onClick={handleDone}>
            Done
          </button>
        </div>
        <div className="player-list">
          {players.map((player, i) => (
            <div key={i}>{player}</div>
          ))}
        </div>
        <button type="submit" className="start-game-button">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default MainPage;
