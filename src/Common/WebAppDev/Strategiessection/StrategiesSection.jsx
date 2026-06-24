import React, { useEffect, useRef, useState } from "react";
import { Target, GitBranch, Gauge, ShieldCheck } from "lucide-react";
import "./StrategiesSection.scss";

const strategiesData = [
  {
    id: 1,
    icon: <Target size={26} />,
    title: "Outcome-Driven Discovery",
    description:
      "We start every engagement by defining measurable business outcomes, not just feature lists — so the roadmap stays anchored to what actually moves your metrics.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000",
    tag: "Strategy",
  },
  {
    id: 2,
    icon: <GitBranch size={26} />,
    title: "Modular, API-First Architecture",
    description:
      "Every system is decomposed into independently deployable modules connected through versioned APIs, making future scaling and integration painless.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
    tag: "Architecture",
  },
  {
    id: 3,
    icon: <Gauge size={26} />,
    title: "Continuous Performance Engineering",
    description:
      "Load testing, query profiling, and caching strategy are built into the CI/CD pipeline — performance regressions get caught before they ever reach production.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tag: "Performance",
  },
  {
    id: 4,
    icon: <ShieldCheck size={26} />,
    title: "Security by Default",
    description:
      "OWASP-aligned reviews, automated vulnerability scanning, and role-based access controls are non-negotiable parts of our delivery checklist, not an afterthought.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000",
    tag: "Security",
  },
];

const StrategyRow = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`strategies-webapp__row ${
        isReversed ? "is-reversed" : ""
      } ${visible ? "is-visible" : ""}`}
    >
      <div className="strategies-webapp__image-col">
        <div className="strategies-webapp__image-wrap">
          <img
            src={item.image}
            alt={item.title}
            className="strategies-webapp__image"
          />
          <span className="strategies-webapp__tag">{item.tag}</span>
        </div>
      </div>

      <div className="strategies-webapp__text-col">
        <div className="strategies-webapp__icon">{item.icon}</div>
        <h3 className="strategies-webapp__row-title">{item.title}</h3>
        <p className="strategies-webapp__row-desc">{item.description}</p>
      </div>
    </div>
  );
};

const StrategiesSection = () => {
  return (
    <section className="strategies-webapp">
      <div className="strategies-webapp__container">
        <div className="strategies-webapp__header">
          <div className="hero_badge">
            <span className="strategies-webapp__eyebrow-line"></span>
            HOW WE BUILD
          </div>
          <h2 className="heading_title" style={{color: 'white'}}>
            <span>Proven Strategies to Build{" "}</span>
            Robust Web Applications
          </h2>
          <p className="strategies-webapp__subtitle">
            The same disciplined approach behind every web app we've shipped
            — repeatable, measurable, and built to hold up at scale.
          </p>
        </div>

        <div className="strategies-webapp__rows">
          {strategiesData.map((item, index) => (
            <StrategyRow item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
