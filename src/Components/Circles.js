import React, { useState } from 'react';

const CircleGrid = () => {
  const [circles, setCircles] = useState([
    { id: 1, x: 50, y: 50, isSelected: false },
    { id: 2, x: 150, y: 150, isSelected: false },
    { id: 3, x: 250, y: 250, isSelected: false },
  ]);
  const [draggingCircle, setDraggingCircle] = useState(null);

  const handleCircleClick = (id) => {
    setCircles(circles.map(circle => {
      if (circle.id === id) {
        const isSelected = !circle.isSelected;
        if (isSelected) {
          setDraggingCircle(id);
        } else {
          setDraggingCircle(null);
        }
        return { ...circle, isSelected };
      }
      return circle;
    }));
  };

  const handleMouseMove = (e) => {
    if (draggingCircle !== null) {
      setCircles(circles.map(circle => {
        if (circle.id === draggingCircle && circle.isSelected) {
          return {
            ...circle,
            x: e.clientX - 20, // Adjust for circle radius
            y: e.clientY - 20, // Adjust for circle radius
          };
        }
        if (circle.isSelected) return circle;
        const dx = circle.x - (e.clientX - 20);
        const dy = circle.y - (e.clientY - 20);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 40 && draggingCircle !== null) {
          const angle = Math.atan2(dy, dx);
          return {
            ...circle,
            x: circle.x + Math.cos(angle) * 10,
            y: circle.y + Math.sin(angle) * 10,
          };
        }
        return circle;
      }));
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setDraggingCircle(null)}
      onMouseLeave={() => setDraggingCircle(null)}
    >
      {circles.map(circle => (
        <div
          key={circle.id}
          onClick={() => handleCircleClick(circle.id)}
          className={`absolute w-10 h-10 rounded-full cursor-pointer ${circle.isSelected ? 'bg-blue-500' : 'bg-gray-500'}`}
          style={{ left: circle.x, top: circle.y }}
        ></div>
      ))}
    </div>
  );
};

export default CircleGrid;
