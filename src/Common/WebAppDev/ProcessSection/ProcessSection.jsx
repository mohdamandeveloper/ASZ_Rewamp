import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  UploadCloud,
  LifeBuoy,
} from "lucide-react";
import "./ProcessSection.scss";

const stepsData = [
  {
    id: 1,
    icon: <Search size={20} />,
    title: "Discovery & Analysis",
    description:
      "We map your requirements, users, and constraints into a clear technical brief.",
  },
  {
    id: 2,
    icon: <PenTool size={20} />,
    title: "Architecture & Design",
    description:
      "System architecture, UI/UX wireframes, and a sprint-ready project plan.",
  },
  {
    id: 3,
    icon: <Code2 size={20} />,
    title: "Agile Development",
    description:
      "Two-week sprints with demoable increments and continuous code review.",
  },
  {
    id: 4,
    icon: <ShieldCheck size={20} />,
    title: "QA & Testing",
    description:
      "Functional, performance, and security testing before every release.",
  },
  {
    id: 5,
    icon: <UploadCloud size={20} />,
    title: "Deployment",
    description:
      "Production rollout with documented rollback plans and monitoring.",
  },
  {
    id: 6,
    icon: <LifeBuoy size={20} />,
    title: "Support & Evolve",
    description:
      "SLA-backed maintenance and continuous feature delivery post-launch.",
  },
];

const AnimatedStep = ({ step, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`process-webapp__step ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 0.08}s` }}
    >
      <div className="process-webapp__icon">{step.icon}</div>
      <h3 className="process-webapp__step-title">{step.title}</h3>
      <p className="process-webapp__step-desc">{step.description}</p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="process-webapp">
      <div className="process-webapp__container">
        <div className="process-webapp__header">
          <div className="hero_badge">
            <span></span>
            OUR METHODOLOGY
          </div>
          <h2 className="heading_title" style={{color: 'white'}}>
            <span>Our Proven </span>Web App Development Process
          </h2>
          <p className="process-webapp__subtitle">
            Six structured stages, refined across hundreds of delivered
            projects, with full transparency at every step.
          </p>
        </div>

        <div className="process-webapp__list">
          {/* <span className="process-webapp__line"></span> */}
          {stepsData.map((step, index) => (
            <AnimatedStep step={step} index={index} key={step.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
