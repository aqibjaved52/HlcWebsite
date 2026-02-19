import { useEffect, useRef, useCallback } from 'react';
import './CustomCursor.css';

const TRAIL_COUNT = 12;

const CustomCursor = () => {
  const glowRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -200, y: -200 });
  const glow = useRef({ x: -200, y: -200 });
  const trails = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))
  );
  const rafId = useRef(null);
  const isVisible = useRef(false);

  const lerp = (a, b, t) => a + (b - a) * t;

  const animate = useCallback(() => {
    glow.current.x = lerp(glow.current.x, mouse.current.x, 0.08);
    glow.current.y = lerp(glow.current.y, mouse.current.y, 0.08);

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px) translate(-50%, -50%)`;
    }

    trails.current.forEach((trail, i) => {
      const target = i === 0 ? mouse.current : trails.current[i - 1];
      const speed = 0.25 - i * 0.015;
      trail.x = lerp(trail.x, target.x, speed);
      trail.y = lerp(trail.y, target.y, speed);

      const el = trailRefs.current[i];
      if (el) {
        el.style.transform = `translate(${trail.x}px, ${trail.y}px) translate(-50%, -50%)`;
      }
    });

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        glowRef.current?.classList.add('trail-visible');
        trailRefs.current.forEach((el) => el?.classList.add('trail-visible'));
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      glowRef.current?.classList.remove('trail-visible');
      trailRefs.current.forEach((el) => el?.classList.remove('trail-visible'));
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <div className="cursor-trail-container" aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      {trails.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail-dot"
          style={{
            '--i': i,
            '--total': TRAIL_COUNT,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
