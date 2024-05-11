import React, { useState } from 'react';

const LightCircle = ({ cx, cy, r, isOn, toggleLight }) => {
  return (
    <g onClick={toggleLight}>
      {/* Gradient Effect */}
      {isOn && (
        <circle cx={cx} cy={cy} r={r * 3} fill={`url(#grad-${cx}-${cy})`} />
      )}
      {/* Main Circle */}
      <circle cx={cx} cy={cy} r={r} fill="white" />
    </g>
  );
};

const App = () => {
  const [lights, setLights] = useState([false, false, false]);

  const toggleLight = (index) => {
    setLights(lights.map((light, i) => (i === index ? !light : light)));
  };

  const circles = [
    { cx: 100, cy: 100, r: 20 },
    { cx: 200, cy: 100, r: 20 },
    { cx: 300, cy: 100, r: 20 },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <svg width="400" height="400">
        <defs>
          {circles.map((circle, index) => (
            <radialGradient key={index} id={`grad-${circle.cx}-${circle.cy}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(31, 41, 55, 1)', stopOpacity: 0.8 }} /> {/* Adjusted opacity */}
            </radialGradient>
          ))}
        </defs>
        {circles.map((circle, index) => (
          <LightCircle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            isOn={lights[index]}
            toggleLight={() => toggleLight(index)}
          />
        ))}
      </svg>
    </div>
  );
};

export default App;
  