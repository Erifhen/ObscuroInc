export function initStarfield(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      delta: Math.random() * 0.02,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });

    shootingStars.forEach((s, i) => {
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.length, s.y + s.length);
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      if (s.x < -s.length || s.y > canvas.height + s.length) {
        shootingStars.splice(i, 1);
      }
    });

    if (Math.random() < 0.005) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: 0,
        vx: -4,
        vy: 4,
        length: 100,
      });
    }

    requestAnimationFrame(draw);
  };

  draw();
}