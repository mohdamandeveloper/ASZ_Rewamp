import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import "./ProductCTA.scss";

const ProductCTA = () => (
  <section className="prod-cta">
    <div className="prod-cta__glow prod-cta__glow--a" />
    <div className="prod-cta__glow prod-cta__glow--b" />
    <div className="prod-cta__grid" />

    <div className="prod-cta__inner">
      <span className="prod-cta__tag">READY TO SHIP?</span>
      <h2 className="prod-cta__title">
        Start With a Product. <span>Scale With a Platform.</span>
      </h2>
      <p className="prod-cta__desc">
        Pick any product, get a live demo within 24 hours, and be in production
        in under two weeks. No commitment, no credit card, no nonsense.
      </p>
      <div className="prod-cta__actions">
        <a href="#" className="prod-cta__btn prod-cta__btn--primary">
          Request a Demo <ArrowRight size={16}/>
        </a>
        <a href="mailto:info@asztechnologies.com" className="prod-cta__btn prod-cta__btn--ghost">
          <Mail size={16}/> info@aztechnologies.com
        </a>
      </div>
    </div>
  </section>
);

export default ProductCTA;