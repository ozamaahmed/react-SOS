// import React from 'react';
// import Square from './Square'; // Import the Square component
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Square /> {/* Render the Square component */}
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import './App.css';
// import Square from './Square';

// function App() {
//   const rows = 10;
//   const columns = 15;

//   // Create a matrix of Square components
//   const matrix = Array.from({ length: rows }, () => (
//     <div className="row"> 
//       {Array.from({ length: columns }, (_, colIndex) => (
//         <Square key={colIndex} /> 
//       ))}
//     </div>
//   ));

//   return <div className="App">{matrix}</div>;
// }

// export default App;











// import React from 'react';
// import './App.css';
// import Square from './Square';

// function App() {
//   const rows = 10;
//   const columns = 10;
//   const matrix = [];

//   for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < columns; j++) {
//       row.push(<Square key={`${i}-${j}`} />);
//     }
//     matrix.push(row);
//   }

//   return (
//     <div className="App">
//       {matrix.map((row, rowIndex) => (
//         <div key={rowIndex} className="row">
//           {row}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import './App.css';
// import Matrix from './matrix';
// import SelectionBox from './selectionBox';

// function App() {
//   const [color, setColor] = useState('black');

//   return (
//     <div className="App">
//       <Matrix color={color} />
//       <SelectionBox onSelectColor={setColor} />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import './App.css';
// import Matrix from './matrix';
// import SelectionBox from './selectionBox';

// function App() {
//   const [symbol, setSymbol] = useState(''); // Initialize symbol state

//   return (
//     <div className="App">
//       <Matrix symbol={symbol} /> {/* Pass symbol as a prop */}
//       <SelectionBox onSelectSymbol={setSymbol} /> {/* Pass setSymbol as a callback */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { useState }  from 'react';
// import './App.css';
// import Matrix from './matrix';
// import SelectionBox from './selectionBox';

// function App() {
//   const [selectedSymbol, setSelectedSymbol] = useState(null);

//   return (
//     <div className="App">
//       <Matrix selectedSymbol={selectedSymbol} />
//       <SelectionBox onSelectSymbol={setSelectedSymbol} />
//     </div>
//   );
// }

// export default App;



// App.js
import React, { useState } from 'react';
import './App.css';
import Matrix from './matrix';
import SelectionBox from './selectionBox';
import GameInfo from './GameInfo';

function App() {
  const [color, setColor] = useState('black');
  const [turn, setTurn] = useState('Player 1');
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleQuit = () => {
    setGameOver(true);
  };

  return (
    <div className="App">
      <GameInfo turn={turn} scores={scores} gameOver={gameOver} onQuit={handleQuit} />
      <Matrix color={color} turn={turn} setTurn={setTurn} scores={scores} setScores={setScores} gameOver={gameOver} />
      <SelectionBox onSelectSymbol={setColor} />
    </div>
  );
}
//here color probably refers to which is selected either o or s

export default App;
