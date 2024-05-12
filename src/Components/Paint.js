import React, { useRef, useState, useEffect } from 'react';

const Paint = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext('2d');
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const endDrawing = () => {
    const context = canvasRef.current.getContext('2d');
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-4">
        <label htmlFor="colorPicker" className="mr-2">Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded-md p-1"
        />
        <label htmlFor="lineWidth" className="ml-4 mr-2">Line Width:</label>
        <input
          type="number"
          id="lineWidth"
          value={lineWidth}
          onChange={(e) => setLineWidth(e.target.value)}
          className="border rounded-md p-1"
          min="1"
          max="50"
        />
        <button
          onClick={clearCanvas}
          className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
        >
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        className="border border-gray-400 rounded-lg bg-white"
      />
    </div>
  );
};

export default Paint;
