// import React from 'react';
// import Square from './Square';

// function Matrix({ color }) {
//   return (
//     <div className="grid">
//       {Array.from({ length: 15 }, (_, rowIndex) => ( 
//         <div key={rowIndex} className="row">
//           {Array.from({ length: 20 }, (_, colIndex) => (
//             <Square
//               key={`${rowIndex}-${colIndex}`}
//               color={color}
//               onClick={() => {}} 
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Matrix;



import React from 'react';
import './App.css';
import Square from './Square';

function Matrix({ selectedSymbol }) {
  return (
    <div className="matrix">
      {Array.from({ length: 10 }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: 10 }, (_, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              selectedSymbol={selectedSymbol}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Matrix;
