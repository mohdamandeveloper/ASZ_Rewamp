// TiltedCard.jsx
// Reusable card with 3D tilt-on-hover + image reveal + content overlay.
// Props match the data shape in industryCardsData.js

import { useRef, useCallback, useEffect, useState } from "react";

const SPRING = { damping: 28, stiffness: 90, mass: 1.8 };
const TILT_MAX = 13;
const SCALE_HOVER = 1.035;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function TiltedCard({ card, className = "" }) {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);

  // Physics state
  const target = useRef({ rx: 0, ry: 0, sc: 1 });
  const current = useRef({ rx: 0, ry: 0, sc: 1 });
  const vel = useRef({ rx: 0, ry: 0, sc: 0 });

  // Tooltip
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false });

  const animate = useCallback(() => {
    const t = target.current;
    const c = current.current;
    const v = vel.current;
    const dt = 1 / 60;
    const { damping, stiffness, mass } = SPRING;

    ["rx", "ry", "sc"].forEach((k) => {
      const force = stiffness * (t[k] - c[k]) - damping * v[k];
      v[k] += (force / mass) * dt;
      c[k] += v[k] * dt;
    });

    if (wrapRef.current) {
      const el = wrapRef.current.querySelector(".tcard");
      if (el) {
        el.style.transform = `
          perspective(900px)
          rotateX(${c.rx}deg)
          rotateY(${c.ry}deg)
          scale(${c.sc})
        `;
      }
    }

    const stillMoving =
      Math.abs(c.rx - t.rx) > 0.01 ||
      Math.abs(c.ry - t.ry) > 0.01 ||
      Math.abs(c.sc - t.sc) > 0.001;

    if (stillMoving) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMouseMove = useCallback(
    (e) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ox = e.clientX - rect.left - rect.width / 2;
      const oy = e.clientY - rect.top - rect.height / 2;
      target.current.rx = (oy / (rect.height / 2)) * -TILT_MAX;
      target.current.ry = (ox / (rect.width / 2)) * TILT_MAX;
      setTooltip({ x: e.clientX + 12, y: e.clientY - 28, visible: true });
      startLoop();
    },
    [startLoop]
  );

  const handleMouseEnter = useCallback(() => {
    target.current.sc = SCALE_HOVER;
    startLoop();
  }, [startLoop]);

  const handleMouseLeave = useCallback(() => {
    target.current = { rx: 0, ry: 0, sc: 1 };
    setTooltip((t) => ({ ...t, visible: false }));
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapRef}
        className={`tcard-wrap ${className}`}
        // onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tcard" tabIndex={0}>
          {/* Background image */}
          <div
            className="tcard__bg"
            style={{ backgroundImage: `url(${card.image})` }}
            aria-hidden="true"
          />

          {/* Gradient overlay */}
          <div className="tcard__overlay" aria-hidden="true" />

          {/* Bottom stripe */}
          <div className="tcard__stripe" aria-hidden="true" />

          {/* Static title — visible by default */}
          <div className="tcard__title-static">{card.title}</div>

          {/* Hover content */}
          <div className="tcard__content">
            <p className="tcard__content-desc">{card.description}</p>
            {/* {card.tags && card.tags.length > 0 && (
              <div className="tcard__tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="tcard__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )} */}
            
          </div>
        </div>
      </div>

    </>
  );
}
