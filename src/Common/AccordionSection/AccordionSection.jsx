import { useState } from "react";
import "./AccordionSection.scss";
import { Link } from "react-router-dom";

const PANELS = [
  {
    id: 0,
    label: "AI Digital Solutions",
    badge: "AI Digital Solutions",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=75",
    imagePosition: "center top",
    heading: { highlight: "AI-Powered", rest: " Solutions for the Next Era of Business" },
    desc: "We integrate cutting-edge artificial intelligence, machine learning models, NLP pipelines, and predictive analytics, directly into your products, turning raw data into strategic advantages that keep you ahead of the competition.",
  },
  {
    id: 1,
    label: "Collaboration",
    badge: "Collaboration",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75",
    imagePosition: "center",
    heading: { highlight: "We Build", rest: " Together, Every Sprint of the Way" },
    desc: "Transparent communication, continuous feedback loops, and agile sprints ensure your vision stays at the core of every decision. We work alongside your team as a true extension of your organization from day one.",
  },
  {
    id: 2,
    label: "Global Expertise",
    badge: "Global Expertise",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=75",
    imagePosition: "center",
    heading: { highlight: "We Aim", rest: " for Global Reach with Local Understanding" },
    desc: "Using geolocation APIs, multi-language support, and region-specific compliance frameworks, we create solutions that scale globally while feeling tailor-made for every local market your business enters.",
  },
  {
    id: 3,
    label: "Security and Reliability",
    badge: "Security & Reliability",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=75",
    imagePosition: "center",
    heading: { highlight: "Zero Compromise", rest: " on Security or Uptime" },
    desc: "Every system we build is fortified with OWASP-compliant architecture, end-to-end encryption, role-based access, and automated vulnerability scanning, delivering enterprise-grade security around the clock.",
  },
  {
    id: 4,
    label: "Solutions for Every Business",
    badge: "Every Business",
    image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=800&q=75",
    imagePosition: "center",
    heading: { highlight: "Tailored Solutions", rest: " for Startups to Enterprises" },
    desc: "From lean MVP builds for early-stage startups to complex enterprise platforms serving millions of users, we architect solutions that fit your scale today and grow seamlessly with your ambitions tomorrow.",
  },
];

/* Arrow SVG */
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* Plus SVG */
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* ── Panel ── */
function Panel({ panel, isActive, onClick }) {
  return (
    <div
      className={`panel${isActive ? " panel--active" : ""}`}
      onClick={isActive ? undefined : onClick}
      role={isActive ? undefined : "button"}
      tabIndex={isActive ? -1 : 0}
      onKeyDown={isActive ? undefined : (e) => e.key === "Enter" && onClick()}
      aria-expanded={isActive}
    >
      {/* top orange stripe */}
      <div className="panel__stripe" />

      {/* corner glow */}
      <div className="panel__glow" />

      {/* background image */}
      <div
        className="panel__bg"
        style={{
          backgroundImage: `url('${panel.image}')`,
          backgroundPosition: panel.imagePosition || "center",
        }}
      />

      {/* dark overlay */}
      <div className="panel__overlay" />

      {/* ── COLLAPSED STATE ── */}
      <div className="panel__vtitle" aria-hidden={isActive}>
        <div className="panel__vtitle-dot" />
        <span className="panel__vtitle-text">{panel.label}</span>
      </div>

      <div className="panel__plus" aria-hidden="true">
        <PlusIcon />
      </div>

      {/* ── EXPANDED STATE ── */}
      <div className="panel__badge" aria-hidden={!isActive}>
        <div className="panel__badge-dot" />
        {panel.badge}
      </div>

      <div className="panel__content" aria-hidden={!isActive}>
        <div className="panel__divider" />
        <h3 className="panel__heading">
          <span className="panel__heading-hl">{panel.heading.highlight}</span>
          {panel.heading.rest}
        </h3>
        <p className="panel__desc">{panel.desc}</p>
        <Link to={'/contact'} className="panel__cta">
          Get in Touch
          <ArrowIcon />
        </Link>
      </div>

      {/* hover border ring, pure CSS via ::after */}
    </div>
  );
}

/* ── AccordionSection ── */
export default function AccordionSection() {
  const [activeId, setActiveId] = useState(2); // panel 3 open by default

  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="grid_overlay"></div>
      {/* animated blobs */}
      <div className="why-blob why-blob--1" aria-hidden="true" />
      <div className="why-blob why-blob--2" aria-hidden="true" />

      {/* header */}
      <div className="why-header">
        <h2 className="heading_title"><span>Why ASZ?</span> Building Trust with Innovation</h2>
        <p>We redefine the stature of business with exceptional tech solutions</p>
      </div>

      {/* accordion track */}
      <div className="accordion-track" role="list">
        {PANELS.map((panel) => (
          <Panel
            key={panel.id}
            panel={panel}
            isActive={panel.id === activeId}
            onClick={() => setActiveId(panel.id)}
          />
        ))}
      </div>
    </section>
  );
}
