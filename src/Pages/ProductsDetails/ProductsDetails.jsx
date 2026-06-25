import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft, Zap, Shield, Globe, BarChart3, Smartphone, ShoppingBag,
    ArrowRight, ChevronDown, CheckCircle2,
    TrendingUp, Lock, Package, Truck, ShoppingCart
} from "lucide-react";
import "./ProductsDetails.scss";

export const PRODUCTS = [
    {
        id: "neuraldesk",
        icon: <Zap size={28} />,
        tag: "SaaS", label: "AI-POWERED",
        title: "NeuralDesk",
        heroTitle: "AI Helpdesk That Resolves Tickets Before You Even Read Them",
        desc: "NeuralDesk was built for support teams that are tired of repetitive tickets eating their day. We embedded GPT-4 directly into the ticketing layer — not as a chatbot on top, but as the backbone of routing, response drafting, and escalation logic.",
        color: "rgba(255,107,53,1)", colorHex: "#FF6B35",
        services: "AI Integration, Product Design, Backend Engineering, Deployment",
        industry: "Customer Experience & SaaS Tooling",
        businessType: "Enterprise & Mid-Market",
        mockupIcon: <TrendingUp size={36} />, mockupLabel: "Ticket Dashboard",
        mockupStats: [{ label: "Open Tickets", value: "124" }, { label: "Avg Response", value: "4 min" }, { label: "CSAT Score", value: "4.9 / 5" }],
        projectOverview: "The challenge was clear: support teams were drowning in repetitive, low-value tickets while high-priority issues sat unresolved. Existing helpdesk tools lacked intelligence — they stored tickets but couldn't triage them. NeuralDesk was designed from the ground up to put AI at the core of every support interaction, not as a bolt-on feature but as the engine behind routing, response generation, and SLA enforcement.",
        projectOutcome: "The result is a platform that cuts first-response time by 68%, auto-resolves over 40% of tickets without agent involvement, and gives managers a real-time view of team health across every channel — email, chat, Slack, and WhatsApp.",
        requirements: [
            { title: "GPT-4 Auto-Reply Engine", desc: "Build an LLM layer that drafts context-aware replies based on ticket history, knowledge base, and customer tier — without hallucination guardrails being optional." },
            { title: "Smart Routing by Expertise", desc: "Route tickets to the right agent using a skill-graph model, not just round-robin. Factor in urgency, topic classification, and current agent load." },
            { title: "Omnichannel Unified Inbox", desc: "Aggregate inbound contacts from email, live chat, WhatsApp Business, and Slack into a single threaded view — preserving context across channels." },
            { title: "Real-Time SLA Monitoring", desc: "Build a rule-based SLA engine with breach prediction, automated escalation triggers, and a live ops dashboard for support managers." },
        ],
        quote: "\"NeuralDesk changed how our team operates. We went from 6-hour average response times to under 4 minutes. The AI doesn't just suggest replies — it understands our product as well as our best agents do.\"",
        quoteAuthor: "VP of Customer Success, Series B SaaS Company",
        features: ["GPT-4 powered auto-reply & ticket summarization", "Smart routing by urgency, topic & agent expertise", "Real-time SLA monitoring & escalation triggers", "Omnichannel inbox: email, chat, WhatsApp & Slack", "Custom AI personas per brand or product line", "White-label portal for multi-tenant deployments"],
        stats: [{ value: "68%", label: "Reduction in first-response time" }, { value: "4.9★", label: "Average CSAT score" }, { value: "300+", label: "Enterprise clients" }],
        stack: ["GPT-4 API", "Node.js", "PostgreSQL", "Redis", "WebSockets", "React"],
    },
    {
        id: "datapulse",
        icon: <BarChart3 size={28} />,
        tag: "SaaS", label: "ANALYTICS",
        title: "DataPulse",
        heroTitle: "Business Intelligence Without the Data Science Degree",
        desc: "DataPulse puts the power of a data science team into a no-code canvas. Business teams build dashboards, run predictive models, and embed white-labeled analytics into their own products — no SQL, no engineering tickets, no waiting.",
        color: "rgba(79,195,200,1)", colorHex: "#4FC3C8",
        services: "Data Engineering, UI/UX Design, ML Model Integration, White-label SDK",
        industry: "Business Intelligence & Analytics",
        businessType: "Mid-Market & Enterprise",
        mockupIcon: <BarChart3 size={36} />, mockupLabel: "Analytics Dashboard",
        mockupStats: [{ label: "Active Reports", value: "3,200" }, { label: "Data Sources", value: "150+" }, { label: "Uptime SLA", value: "99.9%" }],
        projectOverview: "Most BI tools were built for data engineers, not the business teams who need the insights. The gap between raw data and an actionable dashboard often required weeks of analyst time. DataPulse was designed to collapse that gap — giving operations, marketing, and product teams a self-serve analytics canvas backed by real ML infrastructure.",
        projectOutcome: "Teams that previously waited two weeks for a custom report now ship dashboards in an afternoon. DataPulse's embed SDK has been integrated into 60+ SaaS products, adding analytics as a feature without a single line of chart code from the client's engineering team.",
        requirements: [
            { title: "No-Code Dashboard Builder", desc: "A drag-and-drop canvas supporting 40+ chart types, cross-filter interactions, and real-time data refresh — usable by non-technical business users." },
            { title: "Predictive ML Models", desc: "Package pre-trained forecasting and anomaly detection models behind a one-click deployment UI, with confidence intervals displayed inline on charts." },
            { title: "White-Label Embed SDK", desc: "A JavaScript SDK and iframe embed flow that lets SaaS companies ship DataPulse dashboards inside their own product with custom branding, fonts, and color tokens." },
            { title: "Row-Level Security", desc: "Enforce team-based and user-based data access rules at query time, ensuring no user sees data outside their permission scope regardless of chart configuration." },
        ],
        quote: "\"We replaced a three-person BI team's backlog with DataPulse. Our non-technical ops managers now build and publish their own dashboards. That's not something we thought was possible two years ago.\"",
        quoteAuthor: "Head of Operations, E-commerce Platform",
        features: ["Drag-and-drop dashboard builder with 40+ chart types", "Predictive ML models with one-click deployment", "White-label embed via iframe or JS SDK", "Scheduled PDF/Slack/email report delivery", "Data connectors: BigQuery, Snowflake, MySQL, REST APIs", "Row-level security and team-based access control"],
        stats: [{ value: "10×", label: "Faster reporting" }, { value: "99.9%", label: "Uptime SLA" }, { value: "150+", label: "Data source connectors" }],
        stack: ["Python", "Apache Spark", "Postgres", "Scikit-learn", "React", "D3.js"],
    },
    {
        id: "vaultguard",
        icon: <Shield size={28} />,
        tag: "SaaS", label: "SECURITY",
        title: "VaultGuard",
        heroTitle: "Zero-Trust Identity & Access Management Built for Teams That Can't Afford a Breach",
        desc: "VaultGuard delivers enterprise-grade IAM without the enterprise complexity. Every user, service account, and API key operates under least-privilege by default — with a tamper-proof audit trail that regulators and security teams trust equally.",
        color: "rgba(163,107,255,1)", colorHex: "#A36BFF",
        services: "Security Architecture, IAM Engineering, Compliance Consulting, API Development",
        industry: "Cybersecurity & Identity Management",
        businessType: "Enterprise",
        mockupIcon: <Lock size={36} />, mockupLabel: "Access Control Panel",
        mockupStats: [{ label: "IdP Integrations", value: "200+" }, { label: "Auth Latency", value: "< 50ms" }, { label: "Compliance", value: "SOC 2" }],
        projectOverview: "For growing companies, identity sprawl is a silent security risk. As teams scale, permissions accumulate, service accounts multiply, and audit trails become fragmented across tools. VaultGuard was built to centralise identity and access management under a single zero-trust policy engine — making least-privilege the path of least resistance.",
        projectOutcome: "VaultGuard customers pass SOC 2 Type II audits faster, reduce credential-related incidents by over 80%, and give their security teams a single pane of glass across all human and machine identities — without slowing developer velocity.",
        requirements: [
            { title: "SAML 2.0 & OIDC SSO", desc: "Native integration with 200+ identity providers including Okta, Azure AD, Google Workspace, and on-premise Active Directory via a no-code configuration wizard." },
            { title: "Adaptive Multi-Factor Auth", desc: "Risk-based MFA that escalates authentication requirements based on device trust score, location anomalies, and behavioral signals — without adding friction for low-risk logins." },
            { title: "Immutable Audit Trail", desc: "A tamper-proof, append-only event log with full SIEM export compatibility (Splunk, Datadog, Elastic) and automated flagging of policy violations." },
            { title: "Secrets Vault & Key Rotation", desc: "Centralised secrets management with automatic rotation schedules, versioned history, and application-level injection via SDK — eliminating hardcoded credentials." },
        ],
        quote: "\"Our last SOC 2 audit used to take three months of prep. With VaultGuard, our auditor had everything they needed in the platform on day one. We passed in six weeks.\"",
        quoteAuthor: "CISO, FinTech Scale-up",
        features: ["SAML 2.0 & OIDC-based SSO with 200+ IdP integrations", "Adaptive MFA: TOTP, passkey, biometrics & hardware keys", "OWASP-compliant immutable audit log with SIEM export", "Automated access reviews & certification workflows", "Secrets vault with automatic rotation & versioning", "Risk-based authentication with device fingerprinting"],
        stats: [{ value: "SOC 2", label: "Type II certified" }, { value: "< 50ms", label: "Token verification" }, { value: "200+", label: "IdP integrations" }],
        stack: ["Go", "Vault by HashiCorp", "PostgreSQL", "Redis", "Kubernetes", "React"],
    },
    {
        id: "vendorhub",
        icon: <Globe size={28} />,
        tag: "App", label: "PORTAL",
        title: "VendorHub",
        heroTitle: "One Portal to Manage Every Supplier Relationship at Scale",
        desc: "VendorHub consolidates your entire supplier network into a single, role-based portal. Procurement teams get full visibility and control; vendors get a clean, self-serve workspace — no email chains, no spreadsheet handoffs.",
        color: "rgba(61,220,151,1)", colorHex: "#3DDC97",
        services: "Portal Development, Data Integration, Role-Based Access Design, ERP Connectivity",
        industry: "Supply Chain & Procurement",
        businessType: "Enterprise & Mid-Market",
        mockupIcon: <Package size={36} />, mockupLabel: "Vendor Management Portal",
        mockupStats: [{ label: "Active Vendors", value: "500+" }, { label: "PO Cycle Time", value: "−40%" }, { label: "Inventory Sync", value: "Real-time" }],
        projectOverview: "For companies managing hundreds of suppliers, procurement is a coordination nightmare. POs get lost in email threads, inventory data lives in siloed spreadsheets, and onboarding a new vendor can take weeks. VendorHub was built to solve the coordination layer — giving every party in the supply chain a structured, real-time workspace.",
        projectOutcome: "Procurement cycles shortened by 40% on average. Vendor onboarding time dropped from 14 days to under 48 hours. Procurement managers went from chasing status updates to monitoring a live ops dashboard with exception-based alerts.",
        requirements: [
            { title: "Role-Based Supplier Dashboards", desc: "Separate, permission-scoped portals for vendors and internal procurement teams — with each party seeing only the inventory, orders, and documents relevant to their role." },
            { title: "PO Lifecycle Management", desc: "A structured purchase order flow from draft through approval, dispatch, and fulfilment — with status visibility for both sides and automated reminders at each stage." },
            { title: "Vendor Onboarding & Compliance Vault", desc: "A guided onboarding wizard for new vendors, including document upload, review workflows, and a compliance status dashboard." },
            { title: "Real-Time Inventory Sync", desc: "Two-way inventory sync between vendor systems and the hub via REST API or CSV import, with low-stock threshold alerts and out-of-stock escalation rules." },
        ],
        quote: "\"Before VendorHub, our procurement team spent 60% of their time on coordination. Now they spend it on strategy. The platform handles the status updates, reminders, and compliance tracking automatically.\"",
        quoteAuthor: "Director of Procurement, FMCG Group",
        features: ["Role-based supplier & buyer dashboards", "Real-time inventory sync with low-stock alerts", "PO lifecycle management: draft → approved → fulfilled", "Vendor onboarding & compliance document vault", "Bulk order import via CSV or ERP API", "Performance scorecards & SLA tracking per vendor"],
        stats: [{ value: "40%", label: "Faster procurement" }, { value: "500+", label: "Active vendor portals" }, { value: "Real-time", label: "Inventory sync" }],
        stack: ["Next.js", "Node.js", "MongoDB", "Redis", "REST APIs", "AWS S3"],
    },
    {
        id: "fieldops",
        icon: <Smartphone size={28} />,
        tag: "App", label: "MOBILE-READY",
        title: "FieldOps",
        heroTitle: "Field Service Management That Works Where Your Team Works — Including Offline",
        desc: "FieldOps gives field technicians a full-featured native experience that doesn't depend on a signal. Dispatchers see every job on a live map; technicians receive smart assignments, capture signatures, and close jobs from their phone.",
        color: "rgba(255,165,53,1)", colorHex: "#FFA535",
        services: "Mobile App Development, GPS Integration, Offline Architecture, Dispatch UI Design",
        industry: "Field Services & Operations",
        businessType: "Mid-Market & Enterprise",
        mockupIcon: <Truck size={36} />, mockupLabel: "Field Dispatch Board",
        mockupStats: [{ label: "SLA Miss Rate", value: "−35%" }, { label: "Dispatch Speed", value: "< 2s" }, { label: "Offline Ready", value: "100%" }],
        projectOverview: "Field service companies lose revenue in the gap between job assignment and job completion. Technicians without connectivity lose job details. Dispatchers without live tracking make blind decisions. FieldOps was built to eliminate both failure modes — creating an unbroken information flow from dispatch centre to the technician's phone, with or without internet.",
        projectOutcome: "Customers see a 35% reduction in missed SLAs within 60 days of deployment. Dispatchers manage 3× more concurrent jobs. Field technicians reduce admin time by over 2 hours per day thanks to digital job sheets and on-site e-signature.",
        requirements: [
            { title: "Offline-First Architecture", desc: "Full app functionality — job viewing, checklist completion, photo capture, and signature collection — with zero dependency on a network connection. Sync on reconnect." },
            { title: "Live GPS Tracking & Route Optimisation", desc: "Real-time technician location on a dispatch map, with automated route suggestions that factor in current traffic, job priority, and technician proximity." },
            { title: "Smart Dispatch Board", desc: "A drag-and-drop job dispatch interface with SLA countdown timers, technician availability indicators, and one-click job reassignment." },
            { title: "Digital Job Sheets & E-Signature", desc: "Configurable digital job forms — checklists, photo uploads, part usage logs — with on-site customer signature capture and automatic PDF report generation." },
        ],
        quote: "\"Our technicians used to carry clipboards and call the office for every update. Even in areas with no signal, FieldOps keeps working. It's the single biggest operational improvement we've made in a decade.\"",
        quoteAuthor: "Operations Director, National Facilities Management Company",
        features: ["Offline-first PWA: full functionality without internet", "Live GPS tracking with route optimization", "Drag-and-drop dispatch board with SLA countdown", "Digital job sheets, checklists & photo capture", "E-signature collection on-site", "Push notifications for job updates & reassignments"],
        stats: [{ value: "35%", label: "Fewer missed SLAs" }, { value: "offline", label: "Full feature parity" }, { value: "< 2s", label: "Job dispatch" }],
        stack: ["React Native", "Node.js", "PostgreSQL", "WebSockets", "Google Maps API", "Firebase FCM"],
    },
    {
        id: "shopengine",
        icon: <ShoppingBag size={28} />,
        tag: "App", label: "COMMERCE",
        title: "ShopEngine",
        heroTitle: "Headless Commerce Infrastructure for Brands That Have Outgrown Their Platform",
        desc: "ShopEngine decouples the storefront from the commerce engine, giving development teams total design freedom while giving operations teams a clean backend for orders, inventory, and fulfilment — all connected to your existing ERP and CRM.",
        color: "rgba(255,100,157,1)", colorHex: "#FF649D",
        services: "Headless Commerce Architecture, PWA Storefront, ERP/CRM Integration, Performance Optimisation",
        industry: "E-Commerce & Retail Technology",
        businessType: "Mid-Market & Enterprise",
        mockupIcon: <ShoppingCart size={36} />, mockupLabel: "Commerce Dashboard",
        mockupStats: [{ label: "Lighthouse Score", value: "95+" }, { label: "Markets Supported", value: "60+" }, { label: "Checkout Speed", value: "3× faster" }],
        projectOverview: "Brands growing beyond their platform hit a ceiling — customisation becomes expensive, performance degrades at scale, and international expansion exposes the limits of monolithic commerce stacks. ShopEngine was designed to replace that ceiling with a headless architecture that gives engineering teams the flexibility they need and operations teams the simplicity they require.",
        projectOutcome: "ShopEngine-powered storefronts consistently score 95+ on Lighthouse performance audits. Checkout conversion improves by an average of 18% after migration. International expansion — new currency, new language, new region — goes from a months-long project to a configuration change.",
        requirements: [
            { title: "API-First Headless Core", desc: "A fully decoupled commerce API (REST + GraphQL) that serves any frontend — React, Vue, native mobile, or third-party CMS — with consistent data contracts and versioned endpoints." },
            { title: "PWA Storefront Template", desc: "A production-ready Progressive Web App storefront achieving 95+ Lighthouse scores, with server-side rendering, edge caching, and sub-second page transitions out of the box." },
            { title: "Multi-Currency & Localisation Engine", desc: "Native support for 60+ currencies with real-time exchange rate updates, tax rule configuration per region, and locale-aware content delivery — all managed from one admin." },
            { title: "ERP & CRM Connectors", desc: "Pre-built, configurable connectors for SAP, Salesforce, HubSpot, and NetSuite — ensuring order data, inventory, and customer records stay in sync across all systems." },
        ],
        quote: "\"ShopEngine gave us the freedom to build the storefront we actually wanted, while keeping our ops team working in a backend they understood. Migration took 8 weeks. We've not looked back.\"",
        quoteAuthor: "CTO, DTC Fashion Brand",
        features: ["Headless API-first architecture (REST + GraphQL)", "PWA storefront with 95+ Lighthouse performance score", "Multi-currency, multi-language & multi-region support", "Native ERP/CRM connectors: SAP, Salesforce, HubSpot", "Flexible promotions engine with rule-based discounts", "Abandoned cart recovery & behavioural email triggers"],
        stats: [{ value: "95+", label: "Lighthouse score" }, { value: "60+", label: "Countries supported" }, { value: "3×", label: "Faster checkout" }],
        stack: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Elasticsearch", "Stripe"],
    },
];

// ── Dark mockup UI card ──────────────────────────────────────────
const MockupCard = ({ product }) => (
    <div className="pd-mockup">
        <div className="pd-mockup__topbar">
            <div className="pd-mockup__dots">
                <span /><span /><span />
            </div>
            <span className="pd-mockup__bar-label">{product.mockupLabel}</span>
        </div>
        <div className="pd-mockup__body">
            <div className="pd-mockup__icon-wrap">
                <div className="pd-mockup__icon">{product.mockupIcon}</div>
                <div>
                    <div className="pd-mockup__product-name">{product.title}</div>
                    <div className="pd-mockup__product-tag">{product.tag}</div>
                </div>
            </div>
            <div className="pd-mockup__stats">
                {product.mockupStats.map((s, i) => (
                    <div className="pd-mockup__stat" key={i}>
                        <span className="pd-mockup__stat-val">{s.value}</span>
                        <span className="pd-mockup__stat-lbl">{s.label}</span>
                    </div>
                ))}
            </div>
            <div className="pd-mockup__chart">
                <svg viewBox="0 0 240 72" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id={`cg-${product.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={product.colorHex} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={product.colorHex} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0 55 C40 35,60 18,100 25 S160 50,190 28 S225 10,240 18 L240 72 L0 72Z"
                        fill={`url(#cg-${product.id})`} />
                    <path d="M0 55 C40 35,60 18,100 25 S160 50,190 28 S225 10,240 18"
                        fill="none" stroke={product.colorHex} strokeWidth="2.5" strokeLinecap="round" />
                    {/* dots */}
                    <circle cx="100" cy="25" r="4" fill={product.colorHex} />
                    <circle cx="190" cy="28" r="4" fill={product.colorHex} />
                </svg>
            </div>
        </div>
        <div className="pd-mockup__corner-accent" style={{ background: product.colorHex }} />
    </div>
);

// ── Accordion ────────────────────────────────────────────────────
const AccordionItem = ({ item, isOpen, onToggle, accent }) => (
    <div className={`pd-accordion__item ${isOpen ? "is-open" : ""}`} onClick={onToggle}>
        <div className="pd-accordion__header">
            <span className="pd-accordion__title">{item.title}</span>
            <ChevronDown size={18} className="pd-accordion__chevron" />
        </div>
        {isOpen && (
            <div className="pd-accordion__body" style={{ borderLeftColor: accent }}>
                {item.desc}
            </div>
        )}
    </div>
);

// ── Main ─────────────────────────────────────────────────────────
const ProductsDetails = () => {
    const { id } = useParams();
    const product = PRODUCTS.find((p) => p.id === id);
    const heroRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(3);

    useEffect(() => {
        window.scrollTo(0, 0);
        const el = heroRef.current;
        if (!el) return;
        const t = setTimeout(() => el.classList.add("loaded"), 60);
        return () => clearTimeout(t);
    }, [id]);

    if (!product) {
        return (
            <div className="pd-notfound">
                <h2>Product not found.</h2>
                <Link to="/products" className="pd-back-btn"><ArrowLeft size={16} /> Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="pd" style={{ "--accent": product.colorHex }}>
            <div className="hero-img-wrap">
                <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80&auto=format&fit=crop"
                    alt="Custom billing platform dashboard on laptop"
                />
                <div className="hero-img-overlay"></div>
            </div>

            <section className="title-section">
                <div className="container">
                    <h1>Custom Billing Platform for Secure, Scalable and Auditable Ecommerce Payments</h1>
                    <div className="meta-grid">
                        <div className="meta-item">
                            <span className="meta-label">Industry</span>
                            <span className="meta-value">Retail</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Technologies</span>
                            <span className="meta-value">.Net, Cloud, Google Cloud, MongoDB, ASP.NET</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Business gains</span>
                            <span className="meta-value"><strong>Cost-efficient cloud usage</strong> due to seamless dynamic scaling from 2 to &gt; 50 app servers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5" /><path d="M3 21v-2a7 7 0 0 1 14 0v2" /></svg>
                        About Our Client
                    </div>
                    <div className="section-body">
                        <p>The Client is a European online marketplace with more than 2 million registered users.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        Challenge
                    </div>
                    <div className="section-body">
                        <p>For a long time, the Client used a billing-as-a-service (BaaS) solution for international payment processing. However, the company estimated the cost of continuous usage of the system to be much higher than the cost of the development and maintenance of an in-house solution.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                        Solution
                    </div>
                    <div className="section-body">
                        <p>It was decided to implement a custom <a href="#" style={{color:'var(--accent)'}}>billing solution</a>. To smoothly substitute the previously used billing system, our team needed to understand the principles of its work. At the start of the project, our specialists gathered the information piece by piece collaborating closely with the Client's developers who integrated the previous BaaS system, the Client's employees (the Finance, Customer Support, and Security departments), the Client's provider of the BaaS, banks, payment systems and debt collection agencies.</p>
                        <p>Initially, our team quickly got the general understanding of the solution's functionality and connections to start implementation as soon as possible. The more detailed requirements and specifications continued to frame up in the course of agile iterations where business analysis took place in parallel with implementation.</p>
                        <p>A new custom billing environment included a number of cloud-based systems responsible for:</p>
                    </div>

                    <ul className="bullet-list">
                        <li>Invoicing.</li>
                        <li>Invoice payment processing.</li>
                        <li>Member notifications.</li>
                        <li>Payment and credit note matching.</li>
                        <li><a href="#">Debt collection.</a></li>
                        <li>Accounting (was integrated with SAP).</li>
                        <li>Financial and business reporting.</li>
                        <li>UI Tools for customer support specialists, system administrators, financial auditors.</li>
                    </ul>

                    <div className="dashboard-wrap">
                        <div className="dashboard-topbar">
                            <div className="db-dots">
                                <div className="db-dot"></div>
                                <div className="db-dot"></div>
                                <div className="db-dot"></div>
                            </div>
                            <div className="db-url-bar">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                billing.client-platform.eu
                            </div>
                            <div className="db-actions">
                                <button className="db-action-btn">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                                    Filter
                                </button>
                                <button className="db-action-btn">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    New
                                </button>
                                <button className="db-action-btn">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    Export
                                </button>
                            </div>
                        </div>
                        <div className="dashboard-body">
                            <div className="db-sidebar">
                                <div className="db-sidebar-icon active">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" stroke-width="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                                </div>
                                <div className="db-sidebar-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                </div>
                                <div className="db-sidebar-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                                </div>
                                <div className="db-sidebar-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                            </div>
                            <div className="db-main">
                                <div className="db-header-row">
                                    <span className="db-title">Invoices</span>
                                </div>
                                <div className="db-tabs">
                                    <div className="db-tab active">All</div>
                                    <div className="db-tab">Drafts</div>
                                    <div className="db-tab">Outstanding</div>
                                    <div className="db-tab">Past due</div>
                                    <div className="db-tab">Paid</div>
                                </div>
                                <table className="db-table">
                                    <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Customer</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Due ↑</th>
                                            <th>Type</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9001</td>
                                            <td>Corina Jansen</td>
                                            <td>€109.00</td>
                                            <td><span className="db-badge badge-draft">Draft</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 1:13 PM</td>
                                            <td>One-time</td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 1:13 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9002</td>
                                            <td>Robert Bailey</td>
                                            <td>€49.00</td>
                                            <td><span className="db-badge badge-outstanding">Outstanding</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 11:36 AM</td>
                                            <td>Recurring</td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 11:36 AM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9003</td>
                                            <td>Ashley Collins</td>
                                            <td>€69.00</td>
                                            <td><span className="db-badge badge-outstanding">Outstanding</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 11:14 AM</td>
                                            <td>One-time</td>
                                            <td style={{color: 'var(--muted2)'}}>10/10/2021 11:14 AM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9004</td>
                                            <td>Arjun Conway</td>
                                            <td>€1,109.00</td>
                                            <td><span className="db-badge badge-overdue">Past due</span></td>
                                            <td style={{color:'#e05555'}}>10/07/2021 3:26 PM</td>
                                            <td>Recurring</td>
                                            <td style={{color: 'var(--muted2)'}}>10/01/2021 3:26 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9005</td>
                                            <td>Kaylie Juarez</td>
                                            <td>€119.00</td>
                                            <td><span className="db-badge badge-paid">Paid</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/07/2021 3:03 PM</td>
                                            <td>Recurring</td>
                                            <td style={{color: 'var(--muted2)'}}>10/07/2021 3:03 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9006</td>
                                            <td>Emmett Lo</td>
                                            <td>€119.00</td>
                                            <td><span className="db-badge badge-paid">Paid</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/07/2021 1:30 PM</td>
                                            <td>One-time</td>
                                            <td style={{color: 'var(--muted2)'}}>10/07/2021 1:30 PM</td>
                                        </tr>
                                        <tr>
                                            <td style={{color:'#4A90E2', fontWeight:'600'}}>INV/9007</td>
                                            <td>Ridwan Conklin</td>
                                            <td>€29.00</td>
                                            <td><span className="db-badge badge-paid">Paid</span></td>
                                            <td style={{color: 'var(--muted2)'}}>10/06/2021 9:38 AM</td>
                                            <td>One-time</td>
                                            <td style={{color: 'var(--muted2)'}}>10/06/2021 9:38 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="section-body" style={{marginTop:'20px'}}>
                        <p>Our team constructed the solution to be:</p>
                    </div>

                    <ul className="bold-list">
                        <li><strong>Inherently scalable</strong> — it automatically scales from using 2 to &gt; 50 app servers depending on the load and employs scalable cloud resources, such as storage, publish-subscribe messaging, etc.</li>
                        <li><strong>Fault-tolerant</strong> — it can automatically recover from failures.</li>
                        <li><strong>Auditable</strong> — centralized log systems contain exhaustive information about the evolution of component states to allow for quick and easy recovery.</li>
                        <li><strong>Modifiable</strong> — the platform can easily adopt updates (conceptual changes, new features, etc.) due to layered architecture, clear separation of concerns (SoC), standard APIs, etc.</li>
                    </ul>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                        Results
                    </div>
                    <div className="section-body">
                        <p>The new billing platform has been integrated into the Client's online marketplace. It allows users to manage billing-related processes quickly, easily, and safely without leaving the Client's site.</p>
                        <p>The platform has completely replaced the functionality of the previously used solution and proved to be inherently scalable, sustainable, and auditable.</p>
                        <p>The lack of detailed requirements and specifications was addressed through continuous communication with the Client's developers, employees, and relevant third parties.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                        Technologies and Tools
                    </div>
                    <div className="section-body">
                        <p>
                            <a href="#" style={{color:'var(--accent)', marginRight:'6px'}}>.NET</a>
                            <a href="#" style={{color:'var(--accent)', marginRight:'6px'}}>ASP.NET</a>
                            Own, NServiceBus, Rabbit MQ, Google Cloud, Docker, MongoDB, Microsoft SQL Server, Grafana, Kibana, Tablo BI, SAP, AngularJS.
                        </p>
                    </div>
                    <div className="tech-chips">
                        <span className="tech-chip"><a href="#">.NET</a></span>
                        <span className="tech-chip"><a href="#">ASP.NET</a></span>
                        <span className="tech-chip">NServiceBus</span>
                        <span className="tech-chip">RabbitMQ</span>
                        <span className="tech-chip">Google Cloud</span>
                        <span className="tech-chip">Docker</span>
                        <span className="tech-chip">MongoDB</span>
                        <span className="tech-chip">Microsoft SQL Server</span>
                        <span className="tech-chip">Grafana</span>
                        <span className="tech-chip">Kibana</span>
                        <span className="tech-chip">Tableau BI</span>
                        <span className="tech-chip">SAP</span>
                        <span className="tech-chip">AngularJS</span>
                    </div>
                </div>
            </section>

            {/* <section className="cta-section">
                <div className="container">
                    <div className="cta-inner">
                        <div>
                            <div className="cta-title">
                                Have a question for our team or need help with your project?
                                <span className="cta-badge">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    Verified
                                </span>
                            </div>
                            <p className="cta-sub">Our team is ready to provide client references, estimate your project, or answer any other question related to your IT initiative.</p>

                            <div className="cta-form">
                                <textarea className="cta-textarea" placeholder="How can we help you?"></textarea>

                                <div className="cta-upload">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                    Drag and drop or <a href="#">browse</a> to upload file(s) &nbsp;·&nbsp; <span style={{color:'var(--muted2)', fontSize:'11px'}}>max 10MB</span>
                                </div>

                                <div className="cta-row">
                                    <input className="cta-input" type="text" placeholder="Full name" />
                                    <input className="cta-input" type="text" placeholder="Company" />
                                </div>
                                <div className="cta-row">
                                    <input className="cta-input" type="email" placeholder="Work email" />
                                    <div className="cta-phone-row">
                                        <select className="cta-select">
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                            <option>+49</option>
                                        </select>
                                        <input className="cta-input" style={{flex:'1'}} type="tel" placeholder="00000 00000" />
                                    </div>
                                </div>

                                <div className="cta-radio-group">
                                    <span style={{fontSize:'12px', color:'var(--muted2)'}}>Preferred way of communication:</span>
                                    <label className="cta-radio-label"><input type="radio" name="comm" checked /> Any</label>
                                    <label className="cta-radio-label"><input type="radio" name="comm" /> E-Mail</label>
                                    <label className="cta-radio-label"><input type="radio" name="comm" /> Phone</label>
                                </div>

                                <button className="btn-primary">Send</button>
                            </div>
                        </div>

                        <div>
                            <p className="cta-contact-title">Get in touch instantly</p>
                            <div className="cta-contacts">
                                <a href="tel:+" className="cta-contact-link">
                                    <div className="contact-icon icon-call">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    Call us
                                </a>
                                <a href="mailto:hello@sciencesoft.com" className="cta-contact-link">
                                    <div className="contact-icon icon-email">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </div>
                                    Email us
                                </a>
                                <a href="#" className="cta-contact-link">
                                    <div className="contact-icon icon-wa">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                    </div>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="pd__glow" />

            <section className="pd__hero" ref={heroRef}>
                <div className="pd__container">
                    <div className="pd__hero-grid">
                        <div className="pd__hero-left">
                            <h1 className="pd__hero-title">{product.heroTitle}</h1>
                            <p className="pd__hero-desc">{product.desc}</p>
                            <a href="#" className="pd__cta-primary">Get Started <ArrowRight size={15} /></a>
                            <div className="pd__meta">
                                <div className="pd__meta-row">
                                    <span className="pd__meta-key">Services</span>
                                    <span className="pd__meta-val">{product.services}</span>
                                </div>
                                <div className="pd__meta-row">
                                    <span className="pd__meta-key">Industry</span>
                                    <span className="pd__meta-val">{product.industry}</span>
                                </div>
                                <div className="pd__meta-row">
                                    <span className="pd__meta-key">Business Type</span>
                                    <span className="pd__meta-val">{product.businessType}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pd__hero-right">
                            <MockupCard product={product} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pd__overview">
                <div className="pd__container">
                    <h2 className="pd__section-title">Project Overview</h2>
                    <div className="pd__overview-top">
                        <p className="pd__overview-body">{product.projectOverview}</p>
                        <svg className="pd__scribble" viewBox="0 0 130 110" fill="none" aria-hidden="true">
                            <path d="M15 90 C35 25,65 95,100 35 S120 65,125 22" stroke={product.colorHex} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" opacity="0.35"/>
                            <path d="M90 75 L108 58 L98 52" stroke={product.colorHex} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
                        </svg>
                    </div>

                    <div className="pd__overview-visual">
                        <div className="pd__overview-card">
                            <div className="pd__ov-card-icon">{product.icon}</div>
                            <div className="pd__ov-card-info">
                                <span className="pd__ov-card-name">{product.title}</span>
                                <span className="pd__ov-card-tag">{product.tag} · {product.label}</span>
                            </div>
                            <div className="pd__ov-card-stats">
                                {product.stats.map((s, i) => (
                                    <div key={i} className="pd__ov-card-stat">
                                        <b>{s.value}</b>
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="pd__overview-outcome">{product.projectOutcome}</p>
                </div>
            </section>

            <section className="pd__requirements">
                <div className="pd__container">
                    <div className="pd__req-grid">
                        <div className="pd__req-left">
                            <h2 className="pd__section-title">Client Requirements</h2>
                            <p className="pd__req-intro">
                                Every deployment starts with a set of non-negotiable capabilities.
                                Here are the core requirements that shaped the architecture and feature set of {product.title}.
                            </p>
                            <div className="pd-accordion">
                                {product.requirements.map((req, i) => (
                                    <AccordionItem
                                        key={i} item={req}
                                        isOpen={openIndex === i}
                                        onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                                        accent={product.colorHex}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="pd__req-right">
                            <div className="pd__req-cards">
                                {product.features.slice(0, 4).map((f, i) => (
                                    <div className="pd__req-card" key={i}>
                                        <CheckCircle2 size={15} className="pd__req-card-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pd__quote-section">
                <div className="pd__container">
                    <blockquote className="pd__quote">
                        <p>{product.quote}</p>
                        <cite>— {product.quoteAuthor}</cite>
                    </blockquote>
                </div>
            </section>

            <section className="pd__stack">
                <div className="pd__container">
                    <span className="pd__eyebrow">Built with</span>
                    <div className="pd__stack-chips">
                        {product.stack.map((t, i) => <span className="pd__chip" key={i}>{t}</span>)}
                    </div>
                </div>
            </section>

            <section className="pd__banner">
                <div className="pd__container">
                    <div className="pd__banner-inner">
                        <div>
                            <h3>Ready to deploy {product.title}?</h3>
                            <p>Get your team up and running in under 48 hours with dedicated onboarding support.</p>
                        </div>
                        <a href="#" className="pd__cta-primary">Request a Demo <ArrowRight size={15} /></a>
                    </div>
                </div>
            </section>

            <div className="pd__bottom-nav">
                <div className="pd__container">
                    <Link to="/products" className="pd-back-btn"><ArrowLeft size={15} /> Back to all products</Link>
                </div>
            </div> */}
        </div>
    );
};

export default ProductsDetails;