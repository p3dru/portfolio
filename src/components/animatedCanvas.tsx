import React, { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();

    const points: Point[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      radius: 2 + Math.random() * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#5046E5";
        ctx.fill();
        ctx.closePath();
      });

      // Draw lines between nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = '#5046E5';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const update = () => {
      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        // Bounce points off edges
        if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup animation on component unmount
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef}/>;
};

export default AnimatedCanvas;
