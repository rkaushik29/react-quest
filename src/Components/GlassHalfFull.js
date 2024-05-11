import React, { useState, useRef } from 'react';
import './tailwind.output.css'; // Ensure Tailwind CSS is imported

const GlassWithLiquid = () => {
  const [rotation, setRotation] = useState(0);
  const [liquidLevel, setLiquidLevel] = useState(100);
  const glassRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    const newRotation = rotation + deltaX * 0.2;

    if (Math.abs(newRotation) >= 45) {
      setLiquidLevel((prevLevel) => Math.max(0, prevLevel - 1));
    }

    setRotation(newRotation);
    startXRef.current = e.clientX;
  };

  const liquidPath = () => {
    if (rotation >= 45 || rotation <= -45) {
      return 'M0 200 Q100 150 200 200 L200 400 L0 400 Z';
    }
    const angle = Math.abs(rotation) / 45;
    const heightAdjustment = 100 * angle;
    return `M0 ${200 - heightAdjustment} Q100 ${150 - heightAdjustment / 2} 200 ${200 - heightAdjustment} L200 400 L0 400 Z`;
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <svg
        width="200"
        height="400"
        viewBox="0 0 200 400"
        ref={glassRef}
        className="cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        {/* Glass outline */}
        <rect
          x="0"
          y="0"
          width="200"
          height="400"
          rx="20"
          ry="20"
          fill="none"
          stroke="black"
          strokeWidth="4"
          transform={`rotate(${rotation} 100 200)`}
        />
        {/* Liquid inside the glass */}
        <path
          d={liquidPath()}
          fill="blue"
          fillOpacity="0.6"
          transform={`rotate(${rotation} 100 200)`}
        />
      </svg>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <GlassWithLiquid />
    </div>
  );
};

export default App;
