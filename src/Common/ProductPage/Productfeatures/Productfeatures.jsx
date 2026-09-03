import React, { useState } from "react";
import { Zap, Lock, BarChart2, RefreshCw } from "lucide-react";
import "./ProductFeatures.scss";

const TABS = [
  {
    id:0, icon:<Zap size={18}/>, label:"Speed",
    title:"Deploy in Hours, Not Months",
    desc:"Pre-built modules, one-click cloud deployment, and zero-config integrations mean you're live, and delivering value, before your competitors are done planning.",
    points:["One-click cloud deploy","Pre-built auth + RBAC","Zero-config API connections","99.9% SLA uptime"],
    img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900",
  },
  {
    id:1, icon:<Lock size={18}/>, label:"Security",
    title:"Enterprise-Grade Security, Standard",
    desc:"Every product ships with OWASP-compliant architecture, end-to-end encryption, automated vulnerability scanning, and audit-ready access logs.",
    points:["OWASP aligned","AES-256 encryption","Automated pen test pipeline","GDPR / SOC 2 ready"],
    img:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=900",
  },
  {
    id:2, icon:<BarChart2 size={18}/>, label:"Analytics",
    title:"Real-Time Insights Built Right In",
    desc:"Every product includes a live analytics layer, no third-party BI tool required. Drill-down dashboards, export-ready reports, and AI-generated summaries on demand.",
    points:["Live data dashboards","AI-generated summaries","Custom report builder","CSV / API export"],
    img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900",
  },
  {
    id:3, icon:<RefreshCw size={18}/>, label:"Integrations",
    title:"Connects to Everything You Already Use",
    desc:"Webhooks, REST & GraphQL APIs, and native connectors for Salesforce, HubSpot, Stripe, Twilio, and 40+ more, your product stack stays intact.",
    points:["REST & GraphQL APIs","40+ native connectors","Webhook event system","SDK for custom builds"],
    img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900",
  },
];

const ProductFeatures = () => {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="prod-features">
      <div className="prod-features__glow" />
      <div className="prod-features__container">
        <div className="prod-features__header">
          <div className="hero_badge"><span />PRODUCT FEATURES</div>
          <h2 className="heading_title" style={{color: 'white'}}>What Makes Our Products <span>Different</span></h2>
        </div>

        <div className="prod-features__tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`prod-features__tab ${active === t.id ? "is-active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.icon}{t.label}
            </button>
          ))}
        </div>

        <div className="prod-features__body">
          <div className="prod-features__content">
            <h3 className="prod-features__content-title">{tab.title}</h3>
            <p className="prod-features__content-desc">{tab.desc}</p>
            <ul className="prod-features__points">
              {tab.points.map((p, i) => (
                <li key={i}><span className="prod-features__check">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="prod-features__img-wrap">
            <img src={tab.img} alt={tab.title} className="prod-features__img" />
            <div className="prod-features__img-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;