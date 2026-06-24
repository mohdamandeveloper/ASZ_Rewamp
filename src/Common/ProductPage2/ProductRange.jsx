import React, { useRef } from 'react';
import './ProductRange.scss';

const products = [
  { id: 'NeuralDesk', tag: 'AI Helpdesk', color: '#FF4D00', letter: 'N' },
  { id: 'DataPulse', tag: 'Analytics', color: '#7C5CFC', letter: 'D' },
  { id: 'VaultGuard', tag: 'Security', color: '#00C9A7', letter: 'V' },
  { id: 'VendorHub', tag: 'Procurement', color: '#FFB800', letter: 'H' },
  { id: 'FlexOps', tag: 'Operations', color: '#FF6B9D', letter: 'F' },
  { id: 'ShopEngine', tag: 'Commerce', color: '#C8FF00', letter: 'S' },
];

export default function ProductRange() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section className="range">
      <div className="range__top">
        <div>
          <span className="eyebrow">All Products</span>
          <h2 className="range__title">Scroll Through <em>Our Range</em></h2>
        </div>
        <div className="range__arrows">
          <button className="range__arrow" onClick={() => scroll(-1)} aria-label="Previous">←</button>
          <button className="range__arrow" onClick={() => scroll(1)} aria-label="Next">→</button>
        </div>
      </div>

      <div className="range__track" ref={scrollRef}>
        {products.map((p) => (
          <div key={p.id} className="range__card" style={{ '--c': p.color }}>
            <div className="range__card-visual">
              <span className="range__card-letter">{p.letter}</span>
              <div className="range__card-circle" />
            </div>
            <div className="range__card-foot">
              <div>
                <span className="range__card-tag">{p.tag}</span>
                <h3 className="range__card-name">{p.id}</h3>
              </div>
              <a href="#" className="range__card-btn">↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
