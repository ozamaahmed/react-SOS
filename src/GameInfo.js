// GameInfo.js
import React from 'react';

function GameInfo({ turn, scores, gameOver, onQuit }) {
  return (
    <div className="game-info">
      <div className="turn">Turn: {turn}</div>
      <div className="scores">Scores: {scores.p1} - {scores.p2}</div>
      {gameOver ? (
        <div className="final-message">Game Over. {scores.p1 > scores.p2 ? 'Player 1' : 'Player 2'} Wins!</div>
      ) : (
        <button className="quit-button" onClick={onQuit}>Quit</button>
      )}
    </div>
  );
}

export default GameInfo;
