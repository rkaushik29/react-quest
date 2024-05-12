import React, { useState, useEffect } from 'react';

// Utility functions
const generateGrid = (rows, cols, mines) => {
  const grid = Array(rows)
    .fill(null)
    .map(() =>
      Array(cols).fill({
        revealed: false,
        mine: false,
        adjacentMines: 0
      })
    );

  // Place mines
  let minesPlaced = 0;
  while (minesPlaced < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!grid[row][col].mine) {
      grid[row][col] = { ...grid[row][col], mine: true };
      minesPlaced++;
    }
  }

  // Calculate adjacent mines
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!grid[row][col].mine) {
        grid[row][col] = {
          ...grid[row][col],
          adjacentMines: countAdjacentMines(grid, row, col)
        };
      }
    }
  }

  return grid;
};

const countAdjacentMines = (grid, row, col) => {
  const adjacentCells = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  return adjacentCells.reduce((count, [dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;
    if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
      if (grid[newRow][newCol].mine) {
        count++;
      }
    }
    return count;
  }, 0);
};

const Minesweeper = () => {
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [rows, cols, mines] = [10, 10, 20];

  useEffect(() => {
    setGrid(generateGrid(rows, cols, mines));
  }, []);

  const handleCellClick = (row, col) => {
    if (gameOver) return;

    const newGrid = grid.slice();
    if (newGrid[row][col].mine) {
      revealAllMines(newGrid);
      setGameOver(true);
    } else {
      revealCell(newGrid, row, col);
      setGrid(newGrid);
    }
  };

  const revealCell = (grid, row, col) => {
    if (grid[row][col].revealed) return;

    grid[row][col].revealed = true;

    if (grid[row][col].adjacentMines === 0) {
      const adjacentCells = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];

      adjacentCells.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
          revealCell(grid, newRow, newCol);
        }
      });
    }
  };

  const revealAllMines = (grid) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col].mine) {
          grid[row][col].revealed = true;
        }
      }
    }
    setGrid(grid);
  };

  const resetGame = () => {
    setGrid(generateGrid(rows, cols, mines));
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-2xl font-bold mb-4">Minesweeper</div>
      <div className="grid grid-cols-10 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-10 h-10 flex items-center justify-center border border-gray-400 ${
                cell.revealed
                  ? cell.mine
                    ? 'bg-red-500'
                    : 'bg-gray-200'
                  : 'bg-gray-400'
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell.revealed && cell.mine ? '💣' : ''}
              {cell.revealed && !cell.mine && cell.adjacentMines > 0
                ? cell.adjacentMines
                : ''}
            </div>
          ))
        )}
      </div>
      {gameOver && (
        <div className="mt-4 text-xl text-red-600 font-bold">
          Game Over! <button onClick={resetGame} className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Restart</button>
        </div>
      )}
    </div>
  );
};

export default Minesweeper;
