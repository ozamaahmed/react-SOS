// import React from 'react';
// import './Square.css'; // Create this file for styling
// import { useState } from 'react';

// function Square() { 
//   const [color, setColor] = useState('black'); // Initial color is black

//   const handleClick = () => {
//     // Toggle color between black and blue
//     setColor(color === 'black' ? 'blue' : 'black');
//   };

//   return (
//     <div
//       className="square"
//       style={{ backgroundColor: color }}
//       onClick={handleClick}
//     >
//       {/* Display the content within the square */}
//     </div>
//   );
// }

// export default Square;





// import React, { useState } from 'react';
// import './Square.css';

// function Square({ color, onClick }) {
//   const [squareColor, setSquareColor] = useState('black');

//   const handleClick = () => {
//     setSquareColor(color);
//     onClick();
//   };

//   return (
//     <div
//       className="square"
//       style={{ backgroundColor: squareColor }}
//       onClick={handleClick}
//     ></div>
//   );
// }

// export default Square;


// import React, { useState } from 'react';
// import './Square.css';

// function Square({ symbol, onClick }) {
//   const [squareSymbol, setSquareSymbol] = useState(''); // Initialize squareSymbol state

//   const handleClick = () => {
//     setSquareSymbol(symbol); // Set squareSymbol to the selected symbol
//     onClick();
//   };

//   return (
//     <div
//       className="square"
//       style={{ backgroundColor: 'white', color: 'black' }} // Set styles for white background and black text
//       onClick={handleClick}
//     >
//       {squareSymbol} {/* Display the squareSymbol */}
//     </div>
//   );
// }

// export default Square;




import React from 'react';

import { useState } from 'react';

import './Square.css';

function Square({ selectedSymbol }) {
  const [squareContent, setSquareContent] = useState('');

  const handleClick = () => {
    if (selectedSymbol) {
      setSquareContent(selectedSymbol);
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {squareContent}
    </div>
  );
}

export default Square;
