import React from "react";
import {
  HeartPulse,
  Landmark,
  ShieldCheck,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Truck,
  Building2,
  Factory,
} from "lucide-react";
import "./IndustriesSection.scss";

const industries = [
  { id: 1, icon: <HeartPulse size={26} />, label: "Healthcare", color: "#3ddc97" },
  { id: 2, icon: <Landmark size={26} />, label: "Banking", color: "#4d9eff" },
  { id: 3, icon: <ShieldCheck size={26} />, label: "Insurance", color: "#ffd24d" },
  { id: 4, icon: <CreditCard size={26} />, label: "Fintech", color: "#ff6b9d" },
  { id: 5, icon: <ShoppingBag size={26} />, label: "Retail & eCommerce", color: "#ff8a4d" },
  { id: 6, icon: <GraduationCap size={26} />, label: "EdTech", color: "#a78bfa" },
  { id: 7, icon: <Truck size={26} />, label: "Logistics", color: "#4dd6ff" },
  { id: 8, icon: <Building2 size={26} />, label: "Real Estate", color: "#6ee7b7" },
  { id: 9, icon: <Factory size={26} />, label: "Manufacturing", color: "#fca5a5" },
];

const IndustriesSection = () => {
  return (
    <section className="industries-webapp">
      <div className="industries-webapp__container">
        <div className="industries-webapp__header">
          <div className="hero_badge industries-webapp__eyebrow">
            <span className="industries-webapp__dot"></span>
            INDUSTRIES WE SERVE
          </div>
          <h2 className="heading_title" style={{color: 'white'}}>
            Web Apps Built for <span>Every Sector</span>
          </h2>
          <p className="industries-webapp__subtitle">
            Domain-aware engineering across regulated, high-stakes, and
            fast-moving industries.
          </p>
        </div>

        <div className="industries-webapp__grid">
          {industries.map((item, index) => (
            <div
              className="industries-webapp__card"
              key={item.id}
              style={{ "--card-color": item.color, animationDelay: `${index * 0.05}s` }}
            >
              <div className="industries-webapp__icon">{item.icon}</div>
              <p className="industries-webapp__label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
