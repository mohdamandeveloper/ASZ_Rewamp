import React, { useEffect, useRef } from "react";
import './HeroSection.scss';
import { heroBg } from '../../data/images';

const stats = [
  { value: '50+', label: 'Successful Deployments', sub: 'Helping businesses launch scalable digital products across web, mobile, and cloud platforms.' },
  { value: '99.9%', label: 'Reliable Performance', sub: 'Engineered for security, stability, and seamless user experiences with enterprise-grade reliability.' },
  { value: '10+', label: 'Innovative Products', sub: 'Purpose-built solutions designed to solve real business challenges and drive digital transformation.' },
];

export default function HeroSection() {
  return (
    <section className="product2-hero">
      <div className="product2-hero__bg-image" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
      <div className="product2-hero__bg-overlay" aria-hidden="true" />
      <div className="product2-hero__bg-grid" aria-hidden="true" />
      <div className="product2-hero__container">
        <div className="product2-hero__copy">
          <div className="hero_badge"><span></span> ASZ Technologies / Product Suite</div>
          <h1 className="heading_title">
            Build <span className="product2-hero__highlight">Smarter Digital <br />Products</span>
            
            That Drive Growth
          </h1>
          <p className="heading_subtitle">
            From concept to deployment, we design and develop scalable software products, web applications, and mobile solutions that help businesses innovate faster, improve efficiency, and achieve measurable results.
          </p>
          <div className="product2-hero__actions">
            <button className="btn-primary">Explore the Suite →</button>
            <button className="btn-secondary">See NeuralDesk in action</button>
          </div>
        </div>

        {/* <div className="product2-hero__panel">
          <div className="product2-hero__panel-glow" />
          <div className="product2-hero__panel-header">
            <span className="dot dot--red" /><span className="dot dot--amber" /><span className="dot dot--green" />
            <span className="product2-hero__panel-title">system.status</span>
          </div>
          <ul className="hero__panel-list">
            <li><span>NeuralDesk</span><span className="ok">● operational</span></li>
            <li><span>DataPulse</span><span className="ok">● operational</span></li>
            <li><span>VaultGuard</span><span className="ok">● operational</span></li>
            <li><span>VendorHub</span><span className="ok">● operational</span></li>
            <li><span>FieldOps</span><span className="ok">● operational</span></li>
            <li><span>ShopEngine</span><span className="ok">● operational</span></li>
          </ul>
        </div> */}
      </div>

      <div className="product2-hero__stats">
        {stats.map((s) => (
          <div className="product2-hero__stat" key={s.label}>
            <h3>{s.value}</h3>
            <span className="product2-hero__stat-label">{s.label}</span>
            <p>{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
