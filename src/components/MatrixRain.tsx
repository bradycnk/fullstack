import { useEffect, useRef } from 'react';

// Lluvia de codigo estilo Matrix: caracteres katakana y simbolos cayendo en columnas
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = 'アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピ0123456789ABCDEFXYZ$+-*/=%#&_<>';
    const fontSize = 16;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };
    resize();
    window.addEventListener('resize', resize);

    let animId: number;
    let last = 0;
    const draw = (time: number) => {
      animId = requestAnimationFrame(draw);
      if (time - last < 55) return;
      last = time;

      ctx.fillStyle = 'rgba(1, 4, 1, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // La cabeza de cada columna brilla mas que la estela
        ctx.fillStyle = Math.random() > 0.97 ? '#D5FFD5' : '#00FF41';
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
      aria-hidden="true"
    />
  );
}
