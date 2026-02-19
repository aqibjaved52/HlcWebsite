import { useEffect, useRef, useCallback } from 'react';

const TAU = Math.PI * 2;
const ACCENT = { r: 124, g: 58, b: 237 };
const ACCENT2 = { r: 167, g: 139, b: 250 };
const CYAN = { r: 6, g: 182, b: 212 };

const RAY_COUNT = 18;
const NODE_COUNT = 40;
const PARTICLE_COUNT = 80;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function lerpColor(a, b, t) {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

function createRay(w, h, cx, cy) {
  const angle = Math.random() * TAU;
  const maxLen = Math.sqrt(w * w + h * h) * 0.6;
  return {
    angle,
    length: rand(120, maxLen),
    width: rand(0.5, 2),
    speed: rand(0.15, 0.6),
    offset: Math.random() * TAU,
    pulse: rand(2, 5),
    color: Math.random() > 0.3 ? ACCENT : CYAN,
  };
}

function createNode(w, h) {
  return {
    x: rand(0, w),
    y: rand(0, h),
    radius: rand(1, 3),
    pulseSpeed: rand(1.5, 4),
    pulseOffset: Math.random() * TAU,
    vx: rand(-0.15, 0.15),
    vy: rand(-0.15, 0.15),
    color: Math.random() > 0.5 ? ACCENT2 : CYAN,
  };
}

function createParticle(w, h, cx, cy) {
  const angle = Math.random() * TAU;
  const dist = rand(30, Math.min(w, h) * 0.45);
  return {
    angle,
    dist,
    radius: rand(1, 2.5),
    speed: rand(0.3, 1.2),
    progress: Math.random(),
    life: 1,
    maxDist: dist,
    color: Math.random() > 0.4 ? ACCENT : Math.random() > 0.5 ? ACCENT2 : CYAN,
  };
}

const DataFlowCanvas = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.parentElement.offsetWidth;
    const h = canvas.parentElement.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const cx = w * 0.5;
    const cy = h * 0.48;

    stateRef.current = {
      ctx, w, h, cx, cy,
      rays: Array.from({ length: RAY_COUNT }, () => createRay(w, h, cx, cy)),
      nodes: Array.from({ length: NODE_COUNT }, () => createNode(w, h)),
      particles: Array.from({ length: PARTICLE_COUNT }, () => createParticle(w, h, cx, cy)),
    };
  }, []);

  const draw = useCallback((time) => {
    const s = stateRef.current;
    if (!s) return;
    const { ctx, w, h, cx, cy, rays, nodes, particles } = s;
    const t = time * 0.001;

    ctx.clearRect(0, 0, w, h);

    // --- Central glow ---
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220);
    coreGrad.addColorStop(0, 'rgba(124, 58, 237, 0.12)');
    coreGrad.addColorStop(0.4, 'rgba(124, 58, 237, 0.04)');
    coreGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGrad;
    ctx.fillRect(0, 0, w, h);

    // --- Rays ---
    rays.forEach((ray) => {
      const pulse = (Math.sin(t * ray.pulse + ray.offset) + 1) * 0.5;
      const opacity = 0.03 + pulse * 0.12;
      const len = ray.length * (0.5 + pulse * 0.5);

      const grad = ctx.createLinearGradient(
        cx, cy,
        cx + Math.cos(ray.angle) * len,
        cy + Math.sin(ray.angle) * len
      );
      const c = ray.color;
      grad.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity * 1.5})`);
      grad.addColorStop(0.6, `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity * 0.4})`);
      grad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(ray.angle) * len,
        cy + Math.sin(ray.angle) * len
      );
      ctx.strokeStyle = grad;
      ctx.lineWidth = ray.width;
      ctx.stroke();

      ray.angle += ray.speed * 0.002;
    });

    // --- Node connections ---
    const connDist = 130;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < connDist) {
          const alpha = (1 - d / connDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
          ctx.stroke();
        }
      }
    }

    // --- Nodes ---
    nodes.forEach((node) => {
      const pulse = (Math.sin(t * node.pulseSpeed + node.pulseOffset) + 1) * 0.5;
      const r = node.radius * (0.6 + pulse * 0.6);
      const c = node.color;

      ctx.beginPath();
      ctx.arc(node.x, node.y, r + 3, 0, TAU);
      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${0.06 + pulse * 0.06})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, TAU);
      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${0.3 + pulse * 0.5})`;
      ctx.fill();

      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > w) node.vx *= -1;
      if (node.y < 0 || node.y > h) node.vy *= -1;
    });

    // --- Flow particles traveling along rays ---
    particles.forEach((p) => {
      p.progress += p.speed * 0.008;
      if (p.progress > 1) {
        p.progress = 0;
        p.angle = Math.random() * TAU;
        p.maxDist = rand(60, Math.min(w, h) * 0.45);
        p.speed = rand(0.3, 1.2);
      }

      const dist = p.progress * p.maxDist;
      const x = cx + Math.cos(p.angle) * dist;
      const y = cy + Math.sin(p.angle) * dist;
      const alpha = Math.sin(p.progress * Math.PI) * 0.8;
      const c = p.color;

      ctx.beginPath();
      ctx.arc(x, y, p.radius, 0, TAU);
      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
      ctx.fill();

      if (p.radius > 1.5) {
        ctx.beginPath();
        ctx.arc(x, y, p.radius + 4, 0, TAU);
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha * 0.15})`;
        ctx.fill();
      }
    });

    // --- Central bright core ---
    const corePulse = (Math.sin(t * 1.5) + 1) * 0.5;
    const coreR = 3 + corePulse * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, coreR, 0, TAU);
    ctx.fillStyle = `rgba(167, 139, 250, ${0.6 + corePulse * 0.4})`;
    ctx.fill();

    const coreGlow2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30 + corePulse * 15);
    coreGlow2.addColorStop(0, `rgba(124, 58, 237, ${0.2 + corePulse * 0.15})`);
    coreGlow2.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGlow2;
    ctx.beginPath();
    ctx.arc(cx, cy, 45, 0, TAU);
    ctx.fill();

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    init();
    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => {
      init();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [init, draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default DataFlowCanvas;
