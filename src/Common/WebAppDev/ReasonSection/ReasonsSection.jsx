import React from "react";
import {
  Users,
  Gauge,
  ShieldCheck,
  Layers,
  Clock,
  HeartHandshake,
} from "lucide-react";
import "./ReasonsSection.scss";

const reasonsData = [
  {
    id: "01",
    icon: <Users size={24} />,
    title: "Dedicated Senior Engineers",
    description:
      "No bait-and-switch juniors. Your project is staffed by engineers who've shipped production web apps at scale before.",
  },
  {
    id: "02",
    icon: <Gauge size={24} />,
    title: "Performance-First Architecture",
    description:
      "Every build is benchmarked for load time, query performance, and scalability — not just functional correctness.",
  },
  {
    id: "03",
    icon: <ShieldCheck size={24} />,
    title: "Security Built In, Not Bolted On",
    description:
      "OWASP-aligned practices, encrypted data flows, and role-based access are part of the architecture from sprint one.",
  },
  {
    id: "04",
    icon: <Layers size={24} />,
    title: "Stack-Agnostic Flexibility",
    description:
      "React, Vue, Angular, Node, .NET, or your existing legacy stack — we adapt to what serves your product best.",
  },
  {
    id: "05",
    icon: <Clock size={24} />,
    title: "Predictable, On-Time Delivery",
    description:
      "Sprint-based delivery with demoable increments every two weeks, so you always know exactly where the project stands.",
  },
  {
    id: "06",
    icon: <HeartHandshake size={24} />,
    title: "Support That Outlasts Launch",
    description:
      "SLA-backed maintenance, monitoring, and feature evolution long after the initial build ships to production.",
  },
];

const ReasonsSection = () => {
  return (
    <section className="reasons-webapp">
      <div className="reasons-webapp__glow reasons-webapp__glow--left"></div>
      <div className="reasons-webapp__glow reasons-webapp__glow--right"></div>

      <div className="reasons-webapp__container">
        <div className="reasons-webapp__header">
          <div className="hero_badge">
            <span></span>
            WHY CHOOSE US
          </div>
          <h2 className="heading_title" style={{color: 'white'}}>
            <span>Reasons to Partner with Our</span> Web App Team
          </h2>
        </div>

        <div className="reasons-webapp__grid">
          {reasonsData.map((reason) => (
            <div className="reasons-webapp__card" key={reason.id}>
              <span className="reasons-webapp__number">{reason.id}</span>
              <div className="reasons-webapp__icon">{reason.icon}</div>
              <h3 className="reasons-webapp__card-title">{reason.title}</h3>
              <p className="reasons-webapp__card-desc">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
