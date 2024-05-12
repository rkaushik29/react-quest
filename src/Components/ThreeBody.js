import React, { useEffect, useRef } from 'react';

const ThreeBodySimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const G = 150; // Gravitational constant, reduced for more stable animation
    const randomVelocity = () => (Math.random() - 0.5) * 4; // Random velocity in the range [-2, 2]

    const bodies = [
      { x: width / 2 - 200, y: height / 2, vx: randomVelocity(), vy: randomVelocity(), mass: 10, color: 'red' },
      { x: width / 2 + 200, y: height / 2, vx: randomVelocity(), vy: randomVelocity(), mass: 10, color: 'green' },
      { x: width / 2, y: height / 2 + 200, vx: randomVelocity(), vy: randomVelocity(), mass: 10, color: 'blue' }
    ];

    const draw = () => {
      context.clearRect(0, 0, width, height);

      bodies.forEach(body => {
        context.beginPath();
        context.arc(body.x, body.y, body.mass * 2, 0, Math.PI * 2);
        context.fillStyle = body.color;
        context.fill();
        context.closePath();
      });
    };

    const update = () => {
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const body1 = bodies[i];
          const body2 = bodies[j];

          const dx = body2.x - body1.x;
          const dy = body2.y - body1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance === 0) continue; // Avoid division by zero
          const force = (G * body1.mass * body2.mass) / (distance * distance);

          const ax = force * (dx / distance) / body1.mass;
          const ay = force * (dy / distance) / body1.mass;

          body1.vx += ax;
          body1.vy += ay;
          body2.vx -= ax;
          body2.vy -= ay;
        }
      }

      bodies.forEach(body => {
        body.x += body.vx;
        body.y += body.vy;
      });

      draw();
      requestAnimationFrame(update);
    };

    draw();
    update();
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default ThreeBodySimulation;
