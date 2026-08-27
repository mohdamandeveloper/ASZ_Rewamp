import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './IndustryCards.scss';

const INDUSTRIES = [
  {
    name: 'Healthcare',
    image: '/images/asz/services_area/industry-bg/healthcare.jpg',
    url: 'healthcare'
  },
  {
    name: 'Banking',
    image: '/images/asz/services_area/industry-bg/banking.jpg',
    url: 'banking'
  },
  {
    name: 'Insurance',
    image: '/images/asz/services_area/industry-bg/insurance.jpg',
    url: '/'
  },
  {
    name: 'Lending',
    image: '/images/asz/services_area/industry-bg/lending.jpg',
    url: '/'
  },
  {
    name: 'Payments',
    image: '/images/asz/services_area/industry-bg/payments.jpg',
    url: 'payments'
  },
  {
    name: 'Investment',
    image: '/images/asz/services_area/industry-bg/investment.jpg',
    url: 'investment'
  },
  {
    name: 'Real estate',
    image: '/images/asz/services_area/industry-bg/real-estate.jpg',
    url: '/'
  },
  {
    name: 'Retail',
    image: '/images/asz/services_area/industry-bg/retail.jpg',
    url: '/'
  },
  {
    name: 'Manufacturing',
    image: '/images/asz/services_area/industry-bg/manufacturing.jpg',
    url: 'manufacturing'
  },
  {
    name: 'Logistics & Transport',
    image: '/images/asz/services_area/industry-bg/logistics.jpg',
    url: 'logistics-transport'
  },
  {
    name: 'Oil and Gas',
    image: '/images/asz/services_area/industry-bg/oil-and-gas.jpg',
    url: '/'
  },
  {
    name: 'Energy & Utilities',
    image: '/images/asz/services_area/industry-bg/energy.jpg',
    url: '/'
  },
];

// ─── Glow constants ───────────────────────────────────────────────────────────
const GLOW_COLOR = '255, 107, 53'; // #FF6B35
const SPOTLIGHT_RADIUS = 320;

// ─── TiltCard (magnetic tilt + click ripple, no particle dots) ──────────────
function ParticleCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);
  const hoveredRef = useRef(false);
  const magAnimRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => { hoveredRef.current = true; };
    const onLeave = () => {
      hoveredRef.current = false;
      magAnimRef.current?.kill();
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.35, ease: 'power2.out' });
    };
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const cx = r.width / 2, cy = r.height / 2;
      gsap.to(el, { rotateX: ((y - cy) / cy) * -8, rotateY: ((x - cx) / cx) * 8, duration: 0.12, ease: 'power2.out', transformPerspective: 1000 });
      magAnimRef.current = gsap.to(el, { x: (x - cx) * 0.04, y: (y - cy) * 0.04, duration: 0.3, ease: 'power2.out' });
    };
    const onClick = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const maxD = Math.max(Math.hypot(x, y), Math.hypot(x - r.width, y), Math.hypot(x, y - r.height), Math.hypot(x - r.width, y - r.height));
      const ripple = document.createElement('div');
      ripple.style.cssText = `position:absolute;width:${maxD * 2}px;height:${maxD * 2}px;border-radius:50%;background:radial-gradient(circle,rgba(${GLOW_COLOR},0.35) 0%,rgba(${GLOW_COLOR},0.15) 30%,transparent 70%);left:${x - maxD}px;top:${y - maxD}px;pointer-events:none;z-index:999;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.75, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('click', onClick);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('click', onClick);
      magAnimRef.current?.kill();
    };
  }, []);

  return (
    <div ref={cardRef} className={`ic-particle-host ${className}`} style={style}>
      {children}
    </div>
  );
}

// ─── GlobalSpotlight ──────────────────────────────────────────────────────────
function GlobalSpotlight({ gridRef }) {
  useEffect(() => {
    if (!gridRef?.current) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'ic-global-spotlight';
    document.body.appendChild(spotlight);

    const onMove = e => {
      const section = gridRef.current?.closest('.ic-section');
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current?.querySelectorAll('.ic-card') || [];
      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'));
        return;
      }

      const prox = SPOTLIGHT_RADIUS * 0.5;
      const fade = SPOTLIGHT_RADIUS * 0.75;
      let minDist = Infinity;

      cards.forEach(c => {
        const cr = c.getBoundingClientRect();
        const cx = cr.left + cr.width / 2, cy = cr.top + cr.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        minDist = Math.min(minDist, dist);
        const gi = dist <= prox ? 1 : dist <= fade ? (fade - dist) / (fade - prox) : 0;
        const rx = ((e.clientX - cr.left) / cr.width) * 100;
        const ry = ((e.clientY - cr.top) / cr.height) * 100;
        c.style.setProperty('--glow-x', `${rx}%`);
        c.style.setProperty('--glow-y', `${ry}%`);
        c.style.setProperty('--glow-intensity', gi.toString());
        c.style.setProperty('--glow-radius', `${SPOTLIGHT_RADIUS}px`);
      });

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 });
      const targetOpacity = minDist <= prox ? 0.7 : minDist <= fade ? ((fade - minDist) / (fade - prox)) * 0.7 : 0;
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5 });
    };

    const onLeave = () => {
      gridRef.current?.querySelectorAll('.ic-card').forEach(c => c.style.setProperty('--glow-intensity', '0'));
      gsap.to(spotlight, { opacity: 0, duration: 0.3 });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      spotlight.parentNode?.removeChild(spotlight);
    };
  }, [gridRef]);

  return null;
}

// ─── Decorative SVG background graphics ──────────────────────────────────────
function BgGraphics() {
  return (
    <div className="ic-bg-graphics" aria-hidden="true">
      {/* large arc top-right */}
      <svg className="ic-bg-arc" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="260" cy="260" r="240" stroke="#FF6B35" strokeWidth="1.2" strokeOpacity="0.13" strokeDasharray="8 12" />
        <circle cx="260" cy="260" r="180" stroke="#FF6B35" strokeWidth="0.8" strokeOpacity="0.08" />
        <circle cx="260" cy="260" r="100" stroke="#FF6B35" strokeWidth="0.6" strokeOpacity="0.06" />
      </svg>
      {/* floating dots grid */}
      <svg className="ic-bg-dots" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 28 + 8}
              cy={row * 26 + 8}
              r="1.5"
              fill="#FF6B35"
              fillOpacity={0.12 + ((row + col) % 3) * 0.06}
            />
          ))
        )}
      </svg>
      {/* bottom-left wave lines */}
      <svg className="ic-bg-wave" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0, 18, 36, 54, 72].map((offset, i) => (
          <path
            key={i}
            d={`M0 ${60 + offset} Q100 ${20 + offset} 200 ${60 + offset} T400 ${60 + offset}`}
            stroke="#FF6B35"
            strokeWidth="1"
            strokeOpacity={0.07 + i * 0.02}
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function IndustryCards() {
  const navigate = useNavigate();
  const gridRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const handlePageLink =(url) => {
    navigate('/work/' + url); 
  }
  return (
    <section className="ic-section">
      <div className='grid_overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <BgGraphics />

            <div className="ic-header">
              <div className='hero_badge'>
                <span></span>
                Industries we serve
              </div>
              <h2 className="heading_title">
                Built for every <span>sector</span>
              </h2>
              <p className="ic-subtitle">
                We build tailored solutions across 12+ verticals — from regulated finance to complex, multi-node supply chains. Whatever your industry's constraints, we've likely already solved for them.
              </p>
            </div>

            <GlobalSpotlight gridRef={gridRef} />

            <div className="ic-grid" ref={gridRef}>
              {INDUSTRIES.map((ind, i) => (
                <ParticleCard
                  key={i}
                  className={`ic-card ic-card--glow`}
                  style={{ '--glow-color': GLOW_COLOR }}
                >
                  <div
                    className="ic-card-bg"
                    style={{ backgroundImage: `url(${ind.image})` }}
                  />
                  <div className="ic-card-overlay" />
                  <div className="ic-card-noise" />
                  <div className="ic-card-sheen" />
                  <div className="ic-card-border" />
                  <div
                    className="ic-card-content"
                    onClick={() => handlePageLink(ind.url)}
                  >
                    <span className="ic-card-name">{ind.name}</span>
                  </div>
                </ParticleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}