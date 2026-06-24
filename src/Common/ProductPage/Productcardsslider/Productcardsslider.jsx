import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./ProductCardsSlider.scss";

const SLIDES = [
  { id:1, title:"NeuralDesk", category:"AI Support SaaS", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700", tag:"SaaS" },
  { id:2, title:"DataPulse", category:"Analytics SaaS", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700", tag:"SaaS" },
  { id:3, title:"VaultGuard", category:"Security Platform", img:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=700", tag:"SaaS" },
  { id:4, title:"VendorHub", category:"Vendor Portal", img:"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=700", tag:"App" },
  { id:5, title:"FieldOps", category:"Field Service App", img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=700", tag:"App" },
  { id:6, title:"ShopEngine", category:"Headless Commerce", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=700", tag:"App" },
  { id:7, title:"MedTrack", category:"Healthcare White-Label", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=700", tag:"White-Label" },
  { id:8, title:"EduStream", category:"EdTech Platform", img:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=700", tag:"White-Label" },
];

const ProductCardsSlider = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="prod-slider">
      <div className="prod-slider__container">
        <div className="prod-slider__header">
          <div>
            <div className="hero_badge"><span />ALL PRODUCTS</div>
            <h2 className="heading_title" style={{color: 'white'}}>Scroll Through <span>Our Range</span></h2>
          </div>
          <div className="prod-slider__arrows">
            <button className="prod-slider__arrow" onClick={() => scroll(-1)} aria-label="prev"><ArrowLeft size={20}/></button>
            <button className="prod-slider__arrow" onClick={() => scroll(1)}  aria-label="next"><ArrowRight size={20}/></button>
          </div>
        </div>

        <div className="prod-slider__track" ref={trackRef}>
          {SLIDES.map((s) => (
            <div className="prod-slider__card" key={s.id}>
              <div className="prod-slider__img-wrap">
                <img src={s.img} alt={s.title} className="prod-slider__img" />
                <span className="prod-slider__badge">{s.tag}</span>
              </div>
              <div className="prod-slider__info">
                <h3 className="prod-slider__name">{s.title}</h3>
                <p className="prod-slider__cat">{s.category}</p>
                <a href="#" className="prod-slider__cta">View <ArrowRight size={13}/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardsSlider;