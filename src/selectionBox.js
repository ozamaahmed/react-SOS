// import React from 'react';

// function SelectionBox({ onSelectColor }) {
//   return (
//     <div className="selection-box">
//       <button
//         className="color-button blue"
//         onClick={() => onSelectColor('blue')}
//       ></button>
//       <button
//         className="color-button red"
//         onClick={() => onSelectColor('red')}
//       ></button>
//     </div>
//   );
// }

// export default SelectionBox;





// import React from 'react';

// function SelectionBox({ onSelectSymbol }) {
//   return (
//     <div className="selection-box">
//       <button
//         className="symbol-button blue"
//         onClick={() => onSelectSymbol('O')} // Set symbol to 'O'
//       >
//         O
//       </button>
//       <button
//         className="symbol-button red"
//         onClick={() => onSelectSymbol('S')} // Set symbol to 'S'
//       >
//         S
//       </button>
//     </div>
//   );
// }

// export default SelectionBox;



import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function SelectionBox({ onSelectSymbol }) {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
    onSelectSymbol(symbol); // Set the selected symbol in your parent component
  };

  return (
    <div className="selection-box">
      <button
        className={`symbol-button ${selectedSymbol === 'O' ? 'selected' : ''}`}
        onClick={() => handleSymbolClick('O')}
      >
        O
      </button>
      <button
        className={`symbol-button ${selectedSymbol === 'S' ? 'selected' : ''}`}
        onClick={() => handleSymbolClick('S')}
      >
        S
      </button>
    </div>
  );
}

export default SelectionBox;
