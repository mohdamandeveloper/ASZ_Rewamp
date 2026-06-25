import React, { useEffect, useRef } from "react";
import { ArrowRight, Zap, Shield, Globe, BarChart3, Smartphone, ShoppingBag } from "lucide-react";
import "./Productshowcasegrid.scss";
import { Link } from "react-router-dom";

// Kept in sync with ProductDetail.jsx — id must match the route param
const PRODUCTS = [
    { id: "neuraldesk", icon: <Zap size={22} />, tag: "SaaS", label: "AI-POWERED", title: "NeuralDesk", desc: "AI-driven helpdesk & ticketing platform with GPT-4 automation, smart routing, and real-time analytics dashboards.", color: "rgba(255,107,53,1)" },
    { id: "datapulse", icon: <BarChart3 size={22} />, tag: "SaaS", label: "ANALYTICS", title: "DataPulse", desc: "Business intelligence suite with drag-and-drop reporting, predictive ML models, and white-label embed support.", color: "rgba(79,195,200,1)" },
    { id: "vaultguard", icon: <Shield size={22} />, tag: "SaaS", label: "SECURITY", title: "VaultGuard", desc: "End-to-end identity & access management with SSO, MFA, and OWASP-compliant audit trail built in.", color: "rgba(163,107,255,1)" },
    { id: "vendorhub", icon: <Globe size={22} />, tag: "App", label: "PORTAL", title: "VendorHub", desc: "Multi-vendor portal with real-time inventory, order management, and role-based supplier dashboards.", color: "rgba(61,220,151,1)" },
    { id: "fieldops", icon: <Smartphone size={22} />, tag: "App", label: "MOBILE-READY", title: "FieldOps", desc: "Mobile-first field-service management app with offline mode, geo-tracking, and job dispatch workflow.", color: "rgba(255,165,53,1)" },
    { id: "shopengine", icon: <ShoppingBag size={22} />, tag: "App", label: "COMMERCE", title: "ShopEngine", desc: "Headless e-commerce engine with PWA storefront, multi-currency, and third-party ERP/CRM connectors.", color: "rgba(255,100,157,1)" },
];

const ProductShowcaseGrid = () => {
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        revealRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const addReveal = (el) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
    };

    return (
        <section className="showcase-grid">
            <div className="showcase-grid__glow" />
            <div className="showcase-grid__container">
                <div className="showcase-grid__header">
                    <div className="hero_badge"><span />ALL PRODUCTS</div>
                    <h2 className="heading_title" style={{ color: 'white' }}>Our Complete <span>Product Suite</span></h2>
                    <p className="heading_subtitle">SaaS platforms and ready-to-deploy apps for teams that move fast.</p>
                </div>

                <div className="features-boxy-grid reveal" ref={addReveal}>
                    {PRODUCTS.map((f, i) => (
                        <div className="feature-box" key={i}>
                            <div className="feature-box-icon">{f.icon}</div>
                            <div className="feature-box-title">{f.title}</div>
                            <p className="feature-box-desc">{f.desc}</p>
                            {/* ✅ Dynamic link — routes to /products/:id */}
                            <Link to={`/products/${f.id}`} className="showcase-card__link">
                                View product <ArrowRight size={15} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcaseGrid;