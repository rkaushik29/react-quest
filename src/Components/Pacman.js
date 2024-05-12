import React, { useState, useEffect } from 'react';

const initialGrid = [
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
  ['W', 'P', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'W'],
  ['W', 'P', 'W', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
  ['W', 'P', 'W', 'P', 'W', 'W', 'P', 'W', 'P', 'W'],
  ['W', 'P', 'W', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
  ['W', 'P', 'W', 'W', 'W', 'W', 'P', 'W', 'P', 'W'],
  ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
];

const PacManGame = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [pacman, setPacman] = useState({ x: 1, y: 1 });
  const [score, setScore] = useState(0);

  const movePacman = (dx, dy) => {
    const newX = pacman.x + dx;
    const newY = pacman.y + dy;

    if (grid[newY][newX] !== 'W') {
      const newGrid = grid.map((row, y) =>
        row.map((cell, x) => {
          if (x === newX && y === newY && cell === 'P') {
            setScore(score + 1);
            return ' ';
          }
          return cell;
        })
      );
      setGrid(newGrid);
      setPacman({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          movePacman(0, -1);
          break;
        case 'ArrowDown':
          movePacman(0, 1);
          break;
        case 'ArrowLeft':
          movePacman(-1, 0);
          break;
        case 'ArrowRight':
          movePacman(1, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pacman, grid, score]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-4">Pac-Man</div>
      <div className="grid grid-cols-10 gap-1">
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`w-8 h-8 flex items-center justify-center
                ${cell === 'W' ? 'bg-gray-800' : ''}
                ${cell === 'P' ? 'bg-yellow-300' : ''}
                ${pacman.x === x && pacman.y === y ? 'bg-yellow-500' : ''}
                border border-gray-300`}
            >
              {pacman.x === x && pacman.y === y ? '🟡' : ''}
            </div>
          ))
        )}
      </div>
      <div className="mt-4 text-xl">Score: {score}</div>
    </div>
  );
};

export default PacManGame;
