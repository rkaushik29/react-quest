import React, { useState } from 'react';

const NumberGlyph = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6">
        <label htmlFor="numberInput" className="block text-xl font-medium text-gray-700">Enter a number:</label>
        <input
          type="text"
          id="numberInput"
          value={number}
          onChange={handleChange}
          className="mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a number"
        />
      </div>
      <div className="w-96 h-96 flex items-center justify-center bg-white rounded-lg shadow-lg">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18"
            fill="#4A5568"
          >
            {number}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default NumberGlyph;
