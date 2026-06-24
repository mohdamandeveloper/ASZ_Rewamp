import { useMemo } from "react";
import "./HeroSectionServices.scss";

const BENTO_COLS = 6; // change to 3 for mobile automatically via CSS
const BENTO_ROWS = 4;
const PARTICLE_COUNT = 24;

function HeroSectionServices({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaHref = "#",
  onCtaClick,
  features = [],
  litCells = [], // optional array of cell indices to highlight, e.g. [2, 9, 15]
}) {
  // Generate bento cells once
  const cells = useMemo(() => {
    const total = BENTO_COLS * BENTO_ROWS;
    return Array.from({ length: total }, (_, i) => ({
      id: i,
      delay: (Math.random() * 1.5).toFixed(2),
      lit: litCells.includes(i),
    }));
  }, [litCells]);

  // Generate particles once
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2 + 2,
      duration: Math.random() * 14 + 12,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <section className="top_hero_section">
      {/* Background image */}
      {backgroundImage && (
        <>
          <div
            className="hero__bg-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
          <div className="hero__bg-overlay" aria-hidden="true" />
        </>
      )}

      {/* Bento grid */}
      {/* <div className="hero__bento" aria-hidden="true">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className={`hero__bento-cell ${cell.lit ? "is-lit" : ""}`}
            style={{ animationDelay: `${cell.delay}s` }}
          />
        ))}
      </div> */}

      {/* Aurora glow */}
      <div className="hero__aurora" aria-hidden="true">
        <div className="hero__aurora-blob hero__aurora-blob--1" />
        <div className="hero__aurora-blob hero__aurora-blob--2" />
        <div className="hero__aurora-blob hero__aurora-blob--3" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero__particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="heading_title" style={{color: 'white'}}><span>{title}</span><br />Development Services</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}

        {ctaText && (
          <button
            href={ctaHref}
            className="btn-primary"
            onClick={onCtaClick}
          >
            {ctaText} <i className="bi bi-arrow-right"></i>
          </button>
        )}
      </div>

      {/* Feature strip */}
      {features.length > 0 && (
        <div className="hero__features">
          {features.map((feature, i) => (
            <div className="hero__feature" key={i}>
              {feature}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSectionServices
