import React, { useEffect, useRef, useState } from "react";
import "./ProductBenefits.scss";

const BENEFITS = [
  { id:1, title:"Ship Faster Without Sacrificing Quality", desc:"Our products come pre-tested, pre-documented, and pre-integrated with the tooling your teams already use, cutting typical deployment timelines from months to days, without cutting corners on reliability or compliance.", stat:"10x faster deployment vs custom builds from scratch", img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900" },
  { id:2, title:"Own the Product, Not Just the License", desc:"Every product we deliver is fully source-available to paying customers, no vendor lock-in, no black-box updates, no hostage fees. Fork it, extend it, or hand it to your own dev team. It's yours.", stat:"100% source access for all customers", img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900" },
  { id:3, title:"Scale Without Re-Architecting", desc:"Every product is built on multi-tenant, cloud-native architecture from the start, meaning you can go from 10 to 10,000 users without a rewrite, a migration, or a call to us in the middle of the night.", stat:"Proven at 50,000+ concurrent users", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900" },
];

const BenefitRow = ({ item, index }) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const rev = index % 2 !== 0;

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold:.2 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <div ref={ref} className={`benefit-row ${rev ? "benefit-row--rev" : ""} ${vis ? "is-vis" : ""}`}>
      <div className="benefit-row__img-col">
        <div className="benefit-row__img-wrap">
          <img src={item.img} alt={item.title} className="benefit-row__img" />
          <div className="benefit-row__img-glow" />
        </div>
      </div>
      <div className="benefit-row__text-col">
        <span className="benefit-row__num">0{item.id}</span>
        <h3 className="benefit-row__title">{item.title}</h3>
        <p className="benefit-row__desc">{item.desc}</p>
        <div className="benefit-row__stat">{item.stat}</div>
      </div>
    </div>
  );
};

const ProductBenefits = () => (
  <section className="prod-benefits">
    <div className="prod-benefits__container">
      <div className="prod-benefits__header">
        <div className="hero_badge"><span />WHY IT MATTERS</div>
        <h2 className="heading_title" style={{color: 'white'}}>Real Benefits, <span>Not Just Features</span></h2>
        <p className="heading_subtitle">The outcomes our products consistently deliver for the teams that use them.</p>
      </div>
      {BENEFITS.map((b, i) => <BenefitRow item={b} index={i} key={b.id} />)}
    </div>
  </section>
);

export default ProductBenefits;