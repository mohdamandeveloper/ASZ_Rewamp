import React, { useEffect, useRef, useState } from "react";
import { Search, ShoppingCart, Settings, UploadCloud, LifeBuoy } from "lucide-react";
import "./HowItWorks.scss";

const STEPS = [
  { n:"01", icon:<Search size={22}/>, title:"Discovery Call", desc:"We map your use-case, team size, and integration requirements in a 30-min scoping call." },
  { n:"02", icon:<ShoppingCart size={22}/>, title:"Choose Your Product", desc:"Select from our catalogue or request a white-label variant customised to your brand." },
  { n:"03", icon:<Settings size={22}/>, title:"Configure & Customise", desc:"We set up your environment, connect your integrations, and apply your branding guidelines." },
  { n:"04", icon:<UploadCloud size={22}/>, title:"Deploy to Production", desc:"One-click cloud deploy to your preferred provider with full monitoring and rollback plans." },
  { n:"05", icon:<LifeBuoy size={22}/>, title:"Ongoing Support", desc:"SLA-backed maintenance, quarterly feature drops, and a dedicated account engineer." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold:.2 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="how-it-works" ref={ref}>
      <div className="how-it-works__glow" />
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <div className="hero_badge "><span />HOW IT WORKS</div>
          <h2 className="heading_title" style={{color: 'white'}}>From Sign-Up to <span>Live in 5 Steps</span></h2>
          <p className="heading_subtitle">A repeatable process we've run over 400 times, no surprises.</p>
        </div>

        <div className={`how-it-works__steps ${vis ? "is-vis" : ""}`}>
          {STEPS.map((s, i) => (
            <div className="how-it-works__step" key={i} style={{ animationDelay:`${i * 0.1}s` }}>
              <div className="how-it-works__icon">{s.icon}</div>
              {i < STEPS.length - 1 && <span className="how-it-works__connector" />}
              <span className="how-it-works__num">{s.n}</span>
              <h3 className="how-it-works__step-title">{s.title}</h3>
              <p className="how-it-works__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;