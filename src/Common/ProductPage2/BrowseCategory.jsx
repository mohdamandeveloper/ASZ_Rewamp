import React, { useState } from 'react';
import './BrowseCategory.scss';

const categories = ['All', 'AI', 'Analytics', 'Security', 'Commerce', 'Operations'];

const items = [
  { id: 'NeuralDesk', cat: 'AI', tag: 'AI Helpdesk', color: '#FF4D00', desc: 'AI ticket resolution and routing' },
  { id: 'DataPulse', cat: 'Analytics', tag: 'Analytics', color: '#7C5CFC', desc: 'Real-time dashboards and alerts' },
  { id: 'VaultGuard', cat: 'Security', tag: 'Security', color: '#00C9A7', desc: 'Zero-trust access management' },
  { id: 'ShopEngine', cat: 'Commerce', tag: 'Commerce', color: '#C8FF00', desc: 'Headless storefront engine' },
  { id: 'FlexOps', cat: 'Operations', tag: 'Operations', color: '#FF6B9D', desc: 'Adaptive workflow engine' },
  { id: 'VendorHub', cat: 'Operations', tag: 'Procurement', color: '#FFB800', desc: 'Supplier relationship management' },
];

export default function BrowseCategory() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? items : items.filter(i => i.cat === active);

  return (
    <section className="browse">
      <div className="browse__header">
        <div className="browse__header-left">
          <span className="eyebrow">Product Catalogue</span>
          <h2 className="browse__title">Browse by <span>Category</span></h2>
        </div>
        <div className="browse__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`browse__filter ${active === c ? 'browse__filter--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="browse__grid">
        {filtered.map((item) => (
          <div key={item.id} className="browse__item" style={{ '--c': item.color }}>
            <div className="browse__item-img">
              <div className="browse__item-glow" />
              <div className="browse__item-icon">{item.id.charAt(0)}</div>
            </div>
            <div className="browse__item-info">
              <span className="browse__item-tag">{item.tag}</span>
              <h3 className="browse__item-name">{item.id}</h3>
              <p className="browse__item-desc">{item.desc}</p>
              <a href="#" className="browse__item-cta">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
