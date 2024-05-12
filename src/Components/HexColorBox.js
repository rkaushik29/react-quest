import React, { useState } from 'react';

const HexColorBox = () => {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only valid hex color values
    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
      setColor(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6">
        <label htmlFor="colorInput" className="block text-xl font-medium text-gray-700">Enter a hex color:</label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={handleChange}
          className="mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="#000000"
        />
      </div>
      <div
        className="w-32 h-32 rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default HexColorBox;
