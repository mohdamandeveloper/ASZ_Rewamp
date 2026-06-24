import React, { useState } from "react";
import {
  Compass,
  Code2,
  ShoppingCart,
  LayoutGrid,
  Cloud,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import "./ServicesSlider.scss";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 0,
    label: "Web App Consulting Services",
    icon: <Compass size={22} />,
    title: "Web App Consulting Services",
    description:
      "We assess your business goals, technical landscape, and growth roadmap to recommend the right architecture, stack, and delivery model before a single line of code is written.",
    points: ["Technical audits", "Architecture roadmaps", "Stack selection"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    id: 1,
    label: "Custom Web Application Development",
    icon: <Code2 size={22} />,
    title: "Custom Web Application Development",
    description:
      "End-to-end development of bespoke web applications tailored to your exact workflows — from internal tools to customer-facing platforms built on modern, maintainable architecture.",
    points: ["Tailored architecture", "API-first design", "Scalable codebase"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
  },
  {
    id: 2,
    label: "E-commerce Web App Development",
    icon: <ShoppingCart size={22} />,
    title: "E-commerce Web App Development",
    description:
      "Conversion-focused storefronts, custom checkout flows, and inventory-integrated commerce platforms built to handle traffic spikes and complex catalogs with ease.",
    points: ["Custom checkout", "Catalog & inventory sync", "Payment gateways"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
  },
  {
    id: 3,
    label: "Custom Web Portal Development",
    icon: <LayoutGrid size={22} />,
    title: "Custom Web Portal Development",
    description:
      "Role-based customer, vendor, and employee portals with secure authentication, dashboards, and document workflows — purpose-built for your operational complexity.",
    points: ["Role-based access", "Custom dashboards", "Workflow automation"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
  },
  {
    id: 4,
    label: "SaaS Web App Development",
    icon: <Cloud size={22} />,
    title: "SaaS Web App Development",
    description:
      "Multi-tenant SaaS platforms engineered for scale from day one — subscription billing, usage metering, and tenant isolation built into the core architecture.",
    points: ["Multi-tenancy", "Subscription billing", "Usage-based scaling"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: 5,
    label: "Progressive Web Application Development",
    icon: <Smartphone size={22} />,
    title: "Progressive Web Application Development",
    description:
      "App-like experiences that work offline, install on home screens, and load instantly — bridging the gap between web reach and native app performance.",
    points: ["Offline-first", "Installable & fast", "Push notifications"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
  },
];

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesData[activeIndex];

  return (
    <section className="services-slider">
      <div className="services-slider__bg-glow"></div>

      <div className="services-slider__container">
        <div className="services-slider__header">
          <div className="hero_badge services-slider__eyebrow">
            <span></span>
            OUR SERVICES
          </div>
          <h2 className="heading_title" style={{color: 'white'}}>
            <span>Every Stage of Your</span> Web App Journey
          </h2>
          <p className="services-slider__subtitle">
            Pick a service to see how we approach it — from first consult to
            production-grade delivery.
          </p>
        </div>

        {/* Clickable service boxes */}
        <div className="services-slider__boxes">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              className={`services-slider__box ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="services-slider__box-icon">{service.icon}</span>
              <span className="services-slider__box-label">{service.label}</span>
            </button>
          ))}
        </div>

        {/* Active slide content */}
        <div className="services-slider__stage">
          <div className="services-slider__track">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`services-slider__slide ${
                  index === activeIndex ? "is-active" : ""
                }`}
              >
                <div className="services-slider__slide-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services-slider__slide-image"
                  />
                  <div className="services-slider__slide-image-overlay"></div>
                </div>

                <div className="services-slider__slide-content">
                  <span className="services-slider__slide-icon">
                    {service.icon}
                  </span>
                  <h3 className="services-slider__slide-title">
                    {service.title}
                  </h3>
                  <p className="services-slider__slide-desc">
                    {service.description}
                  </p>
                  <ul className="services-slider__slide-points">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <button to="/contact" className="btn-primary">
                    Discuss this service <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="services-slider__dots">
          {servicesData.map((_, index) => (
            <button
              key={index}
              className={`services-slider__dot ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
