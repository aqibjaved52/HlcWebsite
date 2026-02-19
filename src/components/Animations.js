import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE } from '../constants/data';

const DIRECTION_OFFSETS = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: -70, y: 0 },
  right: { x: 70, y: 0 },
  'left-bottom': { x: -70, y: 50 },
  'right-bottom': { x: 70, y: 50 },
  'left-top': { x: -70, y: -50 },
  'right-top': { x: 70, y: -50 },
  none: { x: 0, y: 0 },
};

export const FadeIn = ({ children, delay = 0, direction = 'up', scale = 1, rotate = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { x: dx, y: dy } = DIRECTION_OFFSETS[direction] || DIRECTION_OFFSETS.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: dx, y: dy, scale, rotate }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerWrap = ({ children, className = '', delay = 0.08 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild = ({ children, className = '', index = 0 }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: isEven ? -50 : 50,
          y: 40,
          scale: 0.92,
          rotate: isEven ? -2 : 2,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const Counter = ({ end, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const SectionHeader = ({ tag, title, highlight, desc }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="hlc-section-header">
      <motion.div
        initial={{ opacity: 0, x: -70, y: 50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <span className="hlc-section-tag">{tag}</span>
        <h2 className="hlc-section-title">
          {title} <span className="hlc-gradient-text">{highlight}</span>
        </h2>
      </motion.div>
      <motion.p
        className="hlc-section-desc"
        initial={{ opacity: 0, x: 70, y: 50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      >
        {desc}
      </motion.p>
    </div>
  );
};
