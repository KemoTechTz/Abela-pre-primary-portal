import { useEffect, useRef } from 'react';

export default function InteractiveDots() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let raf;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    const dots = Array.from({ length: mobile ? 24 : 44 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 2 + 1,
      c: ['rgba(56,189,248,.35)', 'rgba(251,191,36,.25)', 'rgba(11,31,58,.16)'][Math.floor(Math.random() * 3)]
    }));

    let mx = 0, my = 0, t = 0;
    const resize = () => {
      c.width = c.offsetWidth * devicePixelRatio;
      c.height = c.offsetHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    const mouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 12;
      my = (e.clientY / window.innerHeight - 0.5) * 12;
    };
    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, c.width, c.height);
      dots.forEach((d, i) => {
        const x = d.x * c.offsetWidth + Math.sin(t + i) * 4 + (mobile ? Math.sin(t + i) * 3 : mx);
        const y = d.y * c.offsetHeight + Math.cos(t + i) * 4 + (mobile ? Math.cos(t + i) * 3 : my);
        ctx.beginPath(); ctx.fillStyle = d.c; ctx.arc(x, y, d.r, 0, Math.PI * 2); ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', mouse);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouse);
    };
  }, []);

  return <canvas ref={ref} className='absolute inset-0 w-full h-full pointer-events-none' />;
}
