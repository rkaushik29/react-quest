import React, { useState } from 'react';

const fibonacciPatterns = [
  // Pattern for 0 (will be blank)
  [
    "          ",
    "          ",
    "          ",
    "          ",
    "          ",
    "          ",
    "          ",
    "          ",
    "          ",
    "          "
  ],
  // Pattern for 1
  [
    "    *     ",
    "   **     ",
    "    *     ",
    "    *     ",
    "    *     ",
    "    *     ",
    "    *     ",
    "    *     ",
    "   ***    ",
    "          "
  ],
  // Pattern for 2
  [
    "   ***    ",
    "  *   *   ",
    "      *   ",
    "      *   ",
    "     *    ",
    "    *     ",
    "   *      ",
    "  *       ",
    " *******  ",
    "          "
  ],
  // Add more patterns for subsequent Fibonacci numbers as needed...
];

const CircleGrid = () => {
  const gridSize = 10;
  const [clickCount, setClickCount] = useState(0);
  const fibonacciNumber = clickCount % fibonacciPatterns.length; // Cycle through available patterns

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-10 gap-1 cursor-pointer" onClick={handleClick}>
        {fibonacciPatterns[fibonacciNumber].map((row, rowIndex) =>
          row.split('').map((char, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-8 h-8 rounded-full ${
                char === '*' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <CircleGrid />
    </div>
  );
};

export default App;
