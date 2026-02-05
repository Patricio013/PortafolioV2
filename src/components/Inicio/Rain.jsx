import { useEffect, useRef } from "react";

const Rain = () => {
const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const columnWidth = 20;
    const columns = Math.floor(canvas.width / columnWidth);
    
    const streams = Array.from({ length: columns }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      speed: 2 + Math.random() * 5,
      length: 100 + Math.random() * 300,
      opacity: 0.1 + Math.random() * 0.5
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      streams.forEach((stream) => {

        const gradient = ctx.createLinearGradient(0, stream.y, 0, stream.y + stream.length);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(1, `rgba(0, 255, 65, ${stream.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(stream.x, stream.y);
        ctx.lineTo(stream.x, stream.y + stream.length);
        ctx.stroke();

        ctx.fillStyle = "#fff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00ff41";
        ctx.fillRect(stream.x - 1, stream.y + stream.length, 2, 4);
        ctx.shadowBlur = 0;

        stream.y += stream.speed;

        if (stream.y > canvas.height) {
          stream.y = -stream.length;
          stream.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};

export default Rain;