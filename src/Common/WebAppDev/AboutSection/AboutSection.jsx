import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import "./AboutSection.scss";

const highlights = [
  "Custom architecture mapped to your exact business logic",
  "Built on modern, maintainable, framework-agnostic stacks",
  "Security and performance engineered in from day one",
  "Transparent delivery with weekly demos and sprint reviews",
];

const AboutSection = () => {
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
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-webapp" ref={ref}>
      <div className="about-webapp__container">
        <div
          className={`about-webapp__image-col ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="about-webapp__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000"
              alt="Web app development team at work"
              className="about-webapp__image"
            />
            <div className="about-webapp__image-glow"></div>
          </div>

          <div className="about-webapp__floating-card">
            <span className="about-webapp__floating-number">250+</span>
            <span className="about-webapp__floating-label">
              Web apps shipped
            </span>
          </div>
        </div>

        <div
          className={`about-webapp__text-col ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="hero_badge">
            <span></span>
            ABOUT WEB APP DEVELOPMENT
          </div>

          <h2 className="heading_title" style={{color: 'white'}}>
            We Turn Complex Requirements <span>into{" "}
            Software</span>
          </h2>

          <p className="about-webapp__desc">
            Web application development at ASZ goes beyond writing code — we
            architect systems that hold up under real-world load, evolve with
            your business, and feel effortless for the people using them
            every day. Every engagement pairs a dedicated tech lead with
            engineers who specialize in your exact stack, so nothing gets
            lost in translation between your vision and the shipped product.
          </p>

          <ul className="about-webapp__list">
            {highlights.map((item, i) => (
              <li key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
