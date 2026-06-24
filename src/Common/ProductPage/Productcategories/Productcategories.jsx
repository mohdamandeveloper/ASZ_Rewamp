import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./ProductCategories.scss";

const CATS = [
  {
    id:0, label:"SaaS Platforms",
    items:[
      { title:"NeuralDesk", tag:"AI Support", desc:"GPT-4 powered helpdesk & ticketing with smart routing and real-time dashboards.", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" },
      { title:"DataPulse", tag:"Analytics", desc:"Business intelligence with drag-and-drop reports and predictive ML models.", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600" },
      { title:"VaultGuard", tag:"Security", desc:"IAM platform with SSO, MFA, and OWASP-compliant audit trails.", img:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600" },
    ],
  },
  {
    id:1, label:"Ready-Made Apps",
    items:[
      { title:"VendorHub", tag:"Portal", desc:"Multi-vendor management with real-time inventory and supplier dashboards.", img:"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600" },
      { title:"FieldOps", tag:"Mobile", desc:"Field-service management with offline mode, geo-tracking, and dispatch.", img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600" },
      { title:"ShopEngine", tag:"Commerce", desc:"Headless e-commerce with PWA storefront and multi-currency support.", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600" },
    ],
  },
  {
    id:2, label:"White-Label",
    items:[
      { title:"MedTrack", tag:"Healthcare", desc:"HIPAA-compliant patient management and appointment scheduling system.", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600" },
      { title:"EduStream", tag:"EdTech", desc:"LMS platform with live classrooms, assignments, and progress analytics.", img:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600" },
      { title:"FinLedger", tag:"Fintech", desc:"PCI-DSS compliant payment processing with reconciliation and reporting.", img:"https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600" },
    ],
  },
];

const ProductCategories = () => {
  const [active, setActive] = useState(0);
  const items = CATS[active].items;

  return (
    <section className="prod-cats">
      <div className="prod-cats__container">
        <div className="prod-cats__header">
          <div className="hero_badge"><span />PRODUCT CATEGORIES</div>
          <h2 className="heading_title" style={{color: 'white'}}>Browse by <span>Category</span></h2>
        </div>

        <div className="prod-cats__tabs">
          {CATS.map((c) => (
            <button
              key={c.id}
              className={`prod-cats__tab ${active === c.id ? "is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="prod-cats__grid">
          {items.map((item, i) => (
            <div className="prod-cats__card" key={i}>
              <div className="prod-cats__img-wrap">
                <img src={item.img} alt={item.title} className="prod-cats__img" />
                <span className="prod-cats__tag">{item.tag}</span>
              </div>
              <div className="prod-cats__body">
                <h3 className="prod-cats__item-title">{item.title}</h3>
                <p className="prod-cats__item-desc">{item.desc}</p>
                <a href="#" className="prod-cats__link">Learn more <ArrowRight size={14}/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;