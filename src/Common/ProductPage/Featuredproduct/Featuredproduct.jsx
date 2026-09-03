import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import "./FeaturedProduct.scss";
import { Link } from "react-router-dom";

const features = [
  "GPT-4 ticket auto-resolution (avg 68% deflection rate)",
  "Smart agent routing based on skills & availability",
  "Real-time CSAT dashboards with drill-down analytics",
  "White-label & multi-tenant ready out of the box",
];

const FeaturedProduct = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="feat-prod" ref={ref}>
      <div className="feat-prod__glow feat-prod__glow--a" />
      <div className="feat-prod__glow feat-prod__glow--b" />

      <div className="feat-prod__container container">
        <div className={`feat-prod__text ${vis ? "is-vis" : ""}`}>
          {/* <div className="hero_badge">
            <span></span>FEATURED PRODUCT
          </div> */}
          <h2 className="heading_title" style={{color: 'white'}}>
            Meet <span>NeuralDesk</span>, the AI Helpdesk That Resolves Before You Escalate
          </h2>
          <p className="heading_subtitle">
            NeuralDesk embeds GPT-4 into every layer of your customer support
            operation, from first-contact auto-resolution to agent assist,
            QA scoring, and predictive churn alerts. Deploy in 48 hours, no
            migration required.
          </p>
          <ul className="feat-prod__list">
            {features.map((f, i) => (
              <li key={i}>
                <CheckCircle2 size={17} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="feat-prod__actions">
            <Link to={'/contact'} className="btn-primary">
              Get Early Access <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className={`feat-prod__visual ${vis ? "is-vis" : ""}`}>
          <div className="feat-prod__screen">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900"
              alt="NeuralDesk dashboard"
              className="feat-prod__screen-img"
            />
            <div className="feat-prod__screen-overlay" />
          </div>
          <div className="feat-prod__pill feat-prod__pill--top">
            <span className="feat-prod__pill-dot" />
            68% Auto-resolved
          </div>
          <div className="feat-prod__pill feat-prod__pill--bottom">
            <span className="feat-prod__pill-dot" />
            Live in 48 hrs
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;