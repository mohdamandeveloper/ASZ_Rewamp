import React, { useState } from 'react';
import './WhyDifferent.scss';

const tabs = [
  {
    id: 'speed',
    label: '⚡ Speed',
    headline: 'Deploy in Hours, Not Months',
    body: 'Our build-once infrastructure means you fork a product and launch in a weekend. No standing up servers, no hiring a DevOps team. You ship faster, then iterate faster.',
    stats: [
      { num: '48h', label: 'Typical Deploy' },
      { num: '4×', label: 'Faster than Custom Build' },
      { num: '0', label: 'Infra Configs Needed' },
    ],
  },
  {
    id: 'results',
    label: '📈 Results',
    headline: 'Measurable ROI from Day One',
    body: "Every feature we ship is tied to a metric. You won't find checkbox features here — every module earns its place with data from customers already using it.",
    stats: [
      { num: '3.2×', label: 'Avg. ROI at 6 months' },
      { num: '89%', label: 'Retention Rate' },
      { num: '60d', label: 'Avg. Payback Period' },
    ],
  },
  {
    id: 'integrations',
    label: '🔌 Integrations',
    headline: 'Plugs Into What You Already Use',
    body: 'Native connectors for 120+ tools. REST, webhooks, and a GraphQL API give you escape velocity to build anything on top without waiting for us.',
    stats: [
      { num: '120+', label: 'Native Connectors' },
      { num: '1', label: 'API to Rule Them All' },
      { num: '<5m', label: 'Integration Setup' },
    ],
  },
];

export default function WhyDifferent() {
  const [active, setActive] = useState('speed');
  const tab = tabs.find(t => t.id === active);

  return (
    <section className="why">
      <div className="why__header">
        <span className="eyebrow">Product Difference</span>
        <h2 className="why__title">
          What Makes Our Products<br />
          <span className="why__title--accent">Different</span>
        </h2>
      </div>

      <div className="why__tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`why__tab ${active === t.id ? 'why__tab--active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="why__content">
        <div className="why__text-col">
          <h3 className="why__content-headline">{tab.headline}</h3>
          <p className="why__content-body">{tab.body}</p>
          <a href="#" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
            Explore {tab.label.split(' ')[1]} <span className="arrow">→</span>
          </a>
        </div>
        <div className="why__stats-col">
          {tab.stats.map((s, i) => (
            <div key={i} className="why__stat-card">
              <span className="why__stat-num">{s.num}</span>
              <span className="why__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
