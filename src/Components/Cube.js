import React, { useState } from 'react';

const Cube = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    setRotation({
      x: rotation.x + deltaY * 0.5,
      y: rotation.y + deltaX * 0.5,
    });
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{ padding: '200px', perspective: '1000px' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.3s ease',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(255, 0, 0, 0.6)',
            transform: 'translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(0, 255, 0, 0.6)',
            transform: 'rotateY(90deg) translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 255, 0.6)',
            transform: 'rotateX(90deg) translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 0, 0.6)',
            transform: 'rotateY(180deg) translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(255, 0, 255, 0.6)',
            transform: 'rotateY(-90deg) translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            backgroundColor: 'rgba(0, 255, 255, 0.6)',
            transform: 'rotateX(-90deg) translateZ(100px)',
            transformOrigin: '50% 50%',
          }}
        />
      </div>
    </div>
  );
};

export default Cube;
