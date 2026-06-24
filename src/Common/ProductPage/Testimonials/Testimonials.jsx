import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./Testimonials.scss";

const TESTIMONIALS = [
  { name:"Sarah Mitchell", role:"CTO, FinBridge Ltd", text:"NeuralDesk cut our first-response time by 74% inside the first month. The GPT-4 auto-resolution alone saved us three full-time support hires. It's the first SaaS product I've seen that genuinely does what it says on the tin.", avatar:"SM" },
  { name:"Rajiv Nair", role:"Head of Engineering, MedCore", text:"We white-labeled MedTrack for three hospital networks in under six weeks. The HIPAA-ready architecture meant our compliance team didn't have to rebuild from scratch. Rare to find a product at this level of readiness.", avatar:"RN" },
  { name:"Priya Desai", role:"VP Operations, CartHub", text:"ShopEngine handles 80,000 SKUs and Black Friday traffic spikes without us touching anything. The headless architecture let our frontend team move independently for the first time. Night and day versus our old Magento setup.", avatar:"PD" },
  { name:"Tom Beckett", role:"Founder, FieldFlow", text:"FieldOps solved a problem we'd been trying to fix for two years — offline-first job dispatch that actually syncs cleanly when connectivity returns. Implementation took one week. Support has been excellent.", avatar:"TB" },
  { name:"Aisha Kowalski", role:"Director of Product, EduNation", text:"EduStream's live classroom feature handles 5,000 concurrent students without a hiccup. The analytics layer alone justified the switch — we can finally see exactly where learners drop off and fix it in real time.", avatar:"AK" },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section className="testimonials">
      <div className="testimonials__glow" />
      <div className="testimonials__container">
        <div className="testimonials__header">
          <div className="testimonials__eyebrow"><span />WHAT CUSTOMERS SAY</div>
          <h2 className="testimonials__title">Trusted by Teams That <span>Can't Afford to Fail</span></h2>
        </div>

        <div className="testimonials__stage">
          <button className="testimonials__nav testimonials__nav--l" onClick={prev} aria-label="prev">
            <ChevronLeft size={22}/>
          </button>

          <div className="testimonials__track">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonials__card ${i === active ? "is-active" : i === (active + 1) % TESTIMONIALS.length ? "is-next" : ""}`}
              >
                <div className="testimonials__stars">
                  {[...Array(5)].map((_, s) => <Star key={s} size={15} fill="rgb(255,107,53)" color="rgb(255,107,53)" />)}
                </div>
                <p className="testimonials__quote">"{t.text}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">{t.avatar}</div>
                  <div>
                    <strong className="testimonials__name">{t.name}</strong>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonials__nav testimonials__nav--r" onClick={next} aria-label="next">
            <ChevronRight size={22}/>
          </button>
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`testimonials__dot ${i === active ? "is-active" : ""}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;