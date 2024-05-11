import React from 'react';

const planets = [
  { name: 'Mercury', size: 3, orbit: 20, duration: '8s', color: 'bg-gray-400' },
  { name: 'Venus', size: 5, orbit: 30, duration: '12s', color: 'bg-yellow-600' },
  { name: 'Earth', size: 5, orbit: 40, duration: '16s', color: 'bg-blue-500' },
  { name: 'Mars', size: 4, orbit: 50, duration: '20s', color: 'bg-red-500' },
  { name: 'Jupiter', size: 10, orbit: 70, duration: '24s', color: 'bg-orange-500' },
  { name: 'Saturn', size: 9, orbit: 90, duration: '28s', color: 'bg-yellow-400' },
  { name: 'Uranus', size: 7, orbit: 110, duration: '32s', color: 'bg-blue-300' },
  { name: 'Neptune', size: 7, orbit: 130, duration: '36s', color: 'bg-blue-700' },
];

const SolarSystem = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black relative">
      <div
        className="absolute bg-yellow-500 rounded-full"
        style={{
          width: '10rem',
          height: '10rem',
        }}
      ></div>
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="absolute border border-white border-opacity-20 rounded-full"
          style={{
            width: `${planet.orbit}rem`,
            height: `${planet.orbit}rem`,
            animation: `spin ${planet.duration} linear infinite`,
            transformOrigin: 'center center',
          }}
        >
          <div
            className={`${planet.color} rounded-full`}
            style={{
              width: `${planet.size}rem`,
              height: `${planet.size}rem`,
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        </div>
      ))}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SolarSystem;
