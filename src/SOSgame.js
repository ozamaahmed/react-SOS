import React, { useState } from 'react';

const SOSGame = () => {
  // Step 1: Set Up Initial State
  const [board, setBoard] = useState(Array(10).fill(Array(10).fill("")));


  const [playerTurn, setPlayerTurn] = useState(1); // 1 for Player 1, 2 for Player 2
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  // Step 3: Handle Player Moves
  const handleMove = (row, col) => {
    if (board[row][col] === "") {
      const so = prompt("Enter S or O:");
      if (so === "S" || so === "s") {
        board[row][col] = "S";
        checkS(row, col, turn);
      } else if (so === "O" || so === "o") {
        board[row][col] = "O";
        checkO(row, col, turn);
      }
      display(board);
      scores();
      toggleTurn();
    }
  };
  

  // Step 4: Display Player Information
  const playerInfo = `Player ${playerTurn}'s Turn`;
  const scoresInfo = `Scores - Player 1: ${scores.player1}, Player 2: ${scores.player2}`;

  // Step 5: Add an Option to Quit
  const handleQuit = () => {
    // Implement logic to end the game and show final scores
  };

  // Step 7: Style the Component
  return (
    <div className="sos-game">
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="square"
                onClick={() => handleMove(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="player-info">
        <p>{playerInfo}</p>
        <p>{scoresInfo}</p>
      </div>

      <button onClick={handleQuit}>Quit</button>
    </div>
  );
};

export default SOSGame;
