import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap, Shield, Globe, BarChart3, Smartphone, ShoppingBag } from "lucide-react";
import "./ProductShowcaseGrid.scss";

const PRODUCTS = [
    { id: 1, icon: <Zap size={22} />, tag: "SaaS", label: "AI-POWERED", title: "NeuralDesk", desc: "AI-driven helpdesk & ticketing platform with GPT-4 automation, smart routing, and real-time analytics dashboards.", color: "rgba(255,107,53,1)" },
    { id: 2, icon: <BarChart3 size={22} />, tag: "SaaS", label: "ANALYTICS", title: "DataPulse", desc: "Business intelligence suite with drag-and-drop reporting, predictive ML models, and white-label embed support.", color: "rgba(79,195,200,1)" },
    { id: 3, icon: <Shield size={22} />, tag: "SaaS", label: "SECURITY", title: "VaultGuard", desc: "End-to-end identity & access management with SSO, MFA, and OWASP-compliant audit trail built in.", color: "rgba(163,107,255,1)" },
    { id: 4, icon: <Globe size={22} />, tag: "App", label: "PORTAL", title: "VendorHub", desc: "Multi-vendor portal with real-time inventory, order management, and role-based supplier dashboards.", color: "rgba(61,220,151,1)" },
    { id: 5, icon: <Smartphone size={22} />, tag: "App", label: "MOBILE-READY", title: "FieldOps", desc: "Mobile-first field-service management app with offline mode, geo-tracking, and job dispatch workflow.", color: "rgba(255,165,53,1)" },
    { id: 6, icon: <ShoppingBag size={22} />, tag: "App", label: "COMMERCE", title: "ShopEngine", desc: "Headless e-commerce engine with PWA storefront, multi-currency, and third-party ERP/CRM connectors.", color: "rgba(255,100,157,1)" },
];

const ShowcaseCard = ({ product, index }) => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.2 });
        if (ref.current) ob.observe(ref.current);
        return () => ob.disconnect();
    }, []);

    return (
        <div ref={ref} className={`showcase-card ${vis ? "is-vis" : ""}`} style={{ "--c": product.color, transitionDelay: `${(index % 3) * 0.1}s` }}>
            <span className="showcase-card__tag">{product.tag}</span>
            <div className="showcase-card__icon">{product.icon}</div>
            <span className="showcase-card__label">{product.label}</span>
            <h3 className="showcase-card__title">{product.title}</h3>
            <p className="showcase-card__desc">{product.desc}</p>
            <a href="#" className="showcase-card__link">View product <ArrowRight size={15} /></a>
        </div>
    );
};

const ProductShowcaseGrid = () => (
    <section className="showcase-grid">
        <div className="showcase-grid__glow" />
        <div className="showcase-grid__container">
            <div className="showcase-grid__header">
                <div className="hero_badge"><span />ALL PRODUCTS</div>
                <h2 className="heading_title" style={{color: 'white'}}>Our Complete <span>Product Suite</span></h2>
                <p className="heading_subtitle">SaaS platforms and ready-to-deploy apps for teams that move fast.</p>
            </div>
            <div className="showcase-grid__grid">
                {PRODUCTS.map((p, i) => <ShowcaseCard key={p.id} product={p} index={i} />)}
            </div>
        </div>
    </section>
);

export default ProductShowcaseGrid;