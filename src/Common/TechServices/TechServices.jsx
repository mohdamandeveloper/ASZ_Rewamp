import { useRef, useEffect, useCallback, useState } from "react";
import { motion, useInView } from 'framer-motion';
import './TechServices.scss';

// ─── gsap shim (CDN-free, pure CSS/RAF fallback) ──────────────────────────────
// We inline a tiny GSAP-like tween so this component is self-contained.
const gsap = {
    to(el, { x, y, rotateX, rotateY, opacity, scale, duration = 0.3, ease, onComplete, repeat, yoyo, rotation, transformPerspective }) {
        if (!el) return { kill: () => { } };
        const start = performance.now();
        const ms = duration * 1000;
        let raf;
        const from = {};
        const to = { x, y, rotateX, rotateY, opacity, scale, rotation };
        const kill = () => cancelAnimationFrame(raf);
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        const tick = now => {
            const t = Math.min((now - start) / ms, 1);
            const e = easeOut(t);
            if (el.style) {
                let transform = "";
                const lx = lerp(parseFloat(el.dataset.tx || 0), x ?? parseFloat(el.dataset.tx || 0), e);
                const ly = lerp(parseFloat(el.dataset.ty || 0), y ?? parseFloat(el.dataset.ty || 0), e);
                const lrx = lerp(parseFloat(el.dataset.rx || 0), rotateX ?? parseFloat(el.dataset.rx || 0), e);
                const lry = lerp(parseFloat(el.dataset.ry || 0), rotateY ?? parseFloat(el.dataset.ry || 0), e);
                el.dataset.tx = x ?? el.dataset.tx ?? 0;
                el.dataset.ty = y ?? el.dataset.ty ?? 0;
                el.dataset.rx = rotateX ?? el.dataset.rx ?? 0;
                el.dataset.ry = rotateY ?? el.dataset.ry ?? 0;
                if (transformPerspective) transform += `perspective(${transformPerspective}px) `;
                transform += `translate(${lx}px,${ly}px) rotateX(${lrx}deg) rotateY(${lry}deg)`;
                el.style.transform = transform;
                if (opacity !== undefined) el.style.opacity = lerp(parseFloat(el.dataset.op ?? 1), opacity, e);
                if (opacity !== undefined) el.dataset.op = opacity;
            }
            if (t < 1) raf = requestAnimationFrame(tick);
            else { onComplete?.(); }
        };
        raf = requestAnimationFrame(tick);
        return { kill };
    },
    fromTo(el, from, to) { return gsap.to(el, to); },
    set(el, props) { gsap.to(el, { ...props, duration: 0 }); }
};
function lerp(a, b, t) { return a + (b - a) * t; }

// ─── Particle helpers ─────────────────────────────────────────────────────────
const createParticle = (x, y, color = "20, 184, 166") => {
    const el = document.createElement("div");
    el.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;
    background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.7);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;`;
    return el;
};

// ─── ParticleCard ─────────────────────────────────────────────────────────────
const ParticleCard = ({ children, className = "", style, glowColor = "20,184,166", enableTilt = true, clickEffect = true, enableMagnetism = true }) => {
    const ref = useRef(null);
    const particles = useRef([]);
    const timeouts = useRef([]);
    const hovered = useRef(false);
    const magnetAnim = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onEnter = () => {
            hovered.current = true;
            const { width, height } = el.getBoundingClientRect();
            Array.from({ length: 10 }).forEach((_, i) => {
                const id = setTimeout(() => {
                    if (!hovered.current) return;
                    const p = createParticle(Math.random() * width, Math.random() * height, glowColor);
                    el.appendChild(p);
                    particles.current.push(p);
                    p.animate([{ transform: "scale(0)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 300, fill: "forwards" });
                    p.animate([
                        { transform: `translate(0,0) rotate(0deg)` },
                        { transform: `translate(${(Math.random() - .5) * 80}px,${(Math.random() - .5) * 80}px) rotate(${Math.random() * 360}deg)` }
                    ], { duration: 2000 + Math.random() * 2000, direction: "alternate", iterations: Infinity, easing: "ease-in-out" });
                }, i * 80);
                timeouts.current.push(id);
            });
        };

        const onLeave = () => {
            hovered.current = false;
            timeouts.current.forEach(clearTimeout);
            timeouts.current = [];
            particles.current.forEach(p => p.remove());
            particles.current = [];
            if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4 });
            if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.4 });
        };

        const onMove = e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cx = rect.width / 2, cy = rect.height / 2;
            if (enableTilt) gsap.to(el, { rotateX: ((y - cy) / cy) * -8, rotateY: ((x - cx) / cx) * 8, duration: 0.15, transformPerspective: 900 });
            if (enableMagnetism) magnetAnim.current = gsap.to(el, { x: (x - cx) * 0.04, y: (y - cy) * 0.04, duration: 0.3 });
        };

        const onClick = e => {
            if (!clickEffect) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const r = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
            const ripple = document.createElement("div");
            ripple.style.cssText = `position:absolute;width:${r * 2}px;height:${r * 2}px;border-radius:50%;
        background:radial-gradient(circle,rgba(${glowColor},0.35) 0%,transparent 70%);
        left:${x - r}px;top:${y - r}px;pointer-events:none;z-index:1000;`;
            el.appendChild(ripple);
            ripple.animate([{ transform: "scale(0)", opacity: 1 }, { transform: "scale(1)", opacity: 0 }], { duration: 700, easing: "ease-out" }).onfinish = () => ripple.remove();
        };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        el.addEventListener("mousemove", onMove);
        el.addEventListener("click", onClick);
        return () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("click", onClick);
            onLeave();
        };
    }, [glowColor, enableTilt, enableMagnetism, clickEffect]);

    return (
        <div ref={ref} className={className} style={{ ...style, position: "relative", overflow: "hidden" }}>
            {children}
        </div>
    );
};

// ─── Tab Data ─────────────────────────────────────────────────────────────────
const tabs = [
    {
        id: "web", label: "Web", number: "01",
        headline: "Web Development",
        description: "We craft pixel-perfect, performant web applications using modern frameworks and cutting-edge tooling — from marketing sites to complex SaaS platforms.",
        features: ["React / Next.js", "Progressive Web Apps", "CMS Integration"],
        glowColor: "20,184,166",
        accent: "var(--color-primary)",
        bgPattern: "web",
    },
    {
        id: "mobile", label: "Mobile", number: "02",
        headline: "Mobile Development",
        description: "Native-quality mobile experiences for iOS and Android built with cross-platform efficiency, ensuring your product reaches users wherever they are.",
        features: ["React Native", "App Store Publishing", "Offline-First Design"],
        glowColor: "99,102,241",
        accent: "var(--color-primary)",
        bgPattern: "mobile",
    },
    {
        id: "desktop", label: "Desktop", number: "03",
        headline: "Desktop Applications",
        description: "Powerful desktop software that combines web technologies with native OS capabilities for seamless, high-performance user experiences.",
        features: ["Electron / Tauri", "Cross-Platform Builds", "System Integration"],
        glowColor: "249,115,22",
        accent: "var(--color-primary)",
        bgPattern: "desktop",
    },
    {
        id: "database", label: "Database", number: "04",
        headline: "Database Architecture",
        description: "Robust, scalable data solutions — from schema design and query optimization to migrations and real-time data pipelines.",
        features: ["SQL & NoSQL", "Query Optimization", "Data Migrations"],
        glowColor: "234,179,8",
        accent: "var(--color-primary)",
        bgPattern: "database",
    },
    {
        id: "devops", label: "DevOps", number: "05",
        headline: "DevOps & CI/CD",
        description: "Streamlined delivery pipelines, infrastructure as code, and automated workflows that let your team ship with confidence.",
        features: ["CI/CD Pipelines", "Docker & Kubernetes", "Monitoring & Alerts"],
        glowColor: "236,72,153",
        accent: "var(--color-primary)",
        bgPattern: "devops",
    },
    {
        id: "cloud", label: "Cloud Services", number: "06",
        headline: "Cloud Services",
        description: "Architecting and managing cloud infrastructure that scales with your business — secure, cost-efficient, and always available.",
        features: ["AWS / GCP / Azure", "Serverless Functions", "Cost Optimization"],
        glowColor: "14,165,233",
        accent: "var(--color-primary)",
        bgPattern: "cloud",
    },
];

// ─── SVG Background Patterns ──────────────────────────────────────────────────
const patterns = {
    web: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="380" cy="80" r="140" stroke={accent} strokeWidth="1" strokeDasharray="6 4" opacity="0.12" />
            <circle cx="380" cy="80" r="100" stroke={accent} strokeWidth="1" opacity="0.08" />
            <circle cx="380" cy="80" r="60" stroke={accent} strokeWidth="1.5" opacity="0.12" />
            <rect x="260" y="100" width="180" height="120" rx="12" stroke={accent} strokeWidth="1.2" opacity="0.15" />
            <rect x="272" y="112" width="156" height="8" rx="4" fill={accent} opacity="0.08" />
            <rect x="272" y="126" width="100" height="6" rx="3" fill={accent} opacity="0.06" />
            <rect x="272" y="138" width="130" height="6" rx="3" fill={accent} opacity="0.06" />
            <path d="M320 180 L400 180" stroke={accent} strokeWidth="1" opacity="0.12" />
            <circle cx="60" cy="300" r="80" stroke={accent} strokeWidth="1" strokeDasharray="4 6" opacity="0.08" />
            <path d="M30 200 Q100 160 170 200 Q240 240 310 200" stroke={accent} strokeWidth="1" opacity="0.1" fill="none" />
        </svg>
    ),
    mobile: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="320" y="40" width="100" height="180" rx="16" stroke={accent} strokeWidth="1.5" opacity="0.15" />
            <rect x="330" y="60" width="80" height="120" rx="6" stroke={accent} strokeWidth="1" opacity="0.1" />
            <circle cx="370" cy="205" r="6" stroke={accent} strokeWidth="1.5" opacity="0.15" />
            <rect x="355" y="48" width="30" height="4" rx="2" fill={accent} opacity="0.12" />
            <circle cx="340" cy="100" r="60" stroke={accent} strokeWidth="1" strokeDasharray="5 5" opacity="0.1" />
            <circle cx="340" cy="100" r="40" stroke={accent} strokeWidth="0.8" opacity="0.08" />
            <path d="M60 120 Q120 80 180 120 Q240 160 300 120" stroke={accent} strokeWidth="1" opacity="0.1" fill="none" />
            <circle cx="80" cy="280" r="50" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />
        </svg>
    ),
    desktop: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="240" y="60" width="200" height="140" rx="8" stroke={accent} strokeWidth="1.5" opacity="0.15" />
            <rect x="250" y="72" width="180" height="100" rx="4" stroke={accent} strokeWidth="1" opacity="0.08" />
            <rect x="260" y="82" width="100" height="8" rx="4" fill={accent} opacity="0.07" />
            <rect x="260" y="96" width="140" height="6" rx="3" fill={accent} opacity="0.05" />
            <rect x="260" y="108" width="120" height="6" rx="3" fill={accent} opacity="0.05" />
            <rect x="320" y="200" width="40" height="20" rx="4" fill={accent} opacity="0.08" />
            <rect x="290" y="220" width="100" height="6" rx="3" fill={accent} opacity="0.08" />
            <polygon points="60,80 140,80 140,160 60,160" stroke={accent} strokeWidth="1.2" opacity="0.1" fill="none" />
            <line x1="60" y1="80" x2="140" y2="160" stroke={accent} strokeWidth="0.8" opacity="0.08" />
            <line x1="140" y1="80" x2="60" y2="160" stroke={accent} strokeWidth="0.8" opacity="0.08" />
            <circle cx="100" cy="300" r="60" stroke={accent} strokeWidth="1" strokeDasharray="6 4" opacity="0.08" />
        </svg>
    ),
    database: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <ellipse cx="360" cy="100" rx="80" ry="28" stroke={accent} strokeWidth="1.5" opacity="0.15" />
            <ellipse cx="360" cy="160" rx="80" ry="28" stroke={accent} strokeWidth="1.5" opacity="0.12" />
            <ellipse cx="360" cy="220" rx="80" ry="28" stroke={accent} strokeWidth="1.5" opacity="0.1" />
            <line x1="280" y1="100" x2="280" y2="220" stroke={accent} strokeWidth="1.5" opacity="0.1" />
            <line x1="440" y1="100" x2="440" y2="220" stroke={accent} strokeWidth="1.5" opacity="0.1" />
            <path d="M80 80 L140 140 L200 80 L140 20 Z" stroke={accent} strokeWidth="1.2" opacity="0.1" fill="none" />
            <path d="M80 140 L140 200 L200 140 L140 80 Z" stroke={accent} strokeWidth="1" opacity="0.08" fill="none" />
            <circle cx="100" cy="290" r="50" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />
        </svg>
    ),
    devops: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="360" cy="120" r="70" stroke={accent} strokeWidth="1.5" opacity="0.12" strokeDasharray="6 4" />
            <path d="M310 90 Q360 60 410 90 Q440 130 410 160 Q360 190 310 160 Q280 130 310 90Z" stroke={accent} strokeWidth="1.2" opacity="0.1" fill="none" />
            <path d="M330 120 L390 120 M360 90 L360 150" stroke={accent} strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
            <path d="M60 60 L120 60 L120 120 L60 120 Z" stroke={accent} strokeWidth="1.2" opacity="0.1" fill="none" />
            <path d="M120 90 L180 90 L180 150 L120 150 Z" stroke={accent} strokeWidth="1" opacity="0.08" fill="none" />
            <path d="M180 120 L240 120" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
            <circle cx="90" cy="280" r="55" stroke={accent} strokeWidth="1" strokeDasharray="5 5" opacity="0.08" />
        </svg>
    ),
    cloud: (accent) => (
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <path d="M280 160 Q300 120 350 130 Q360 90 400 100 Q440 100 440 140 Q460 145 455 165 Q450 185 430 180 L290 180 Q265 180 280 160Z" stroke={accent} strokeWidth="1.5" opacity="0.15" fill="none" />
            <path d="M60 130 Q80 100 120 110 Q128 80 158 88 Q188 88 188 118 Q200 122 198 136 Q194 150 180 147 L75 147 Q56 147 60 130Z" stroke={accent} strokeWidth="1.2" opacity="0.1" fill="none" />
            <line x1="340" y1="180" x2="340" y2="220" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.12" />
            <line x1="380" y1="180" x2="380" y2="230" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.12" />
            <line x1="420" y1="180" x2="420" y2="210" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.12" />
            <circle cx="340" cy="228" r="8" stroke={accent} strokeWidth="1.2" opacity="0.12" />
            <circle cx="380" cy="238" r="8" stroke={accent} strokeWidth="1.2" opacity="0.12" />
            <circle cx="420" cy="218" r="8" stroke={accent} strokeWidth="1.2" opacity="0.12" />
            <circle cx="150" cy="290" r="60" stroke={accent} strokeWidth="1" strokeDasharray="6 4" opacity="0.08" />
        </svg>
    ),
};

// ─── Feature Icon ─────────────────────────────────────────────────────────────
const CheckIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7.5" stroke={color} strokeOpacity="0.3" />
        <path d="M5 8.5L7 10.5L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.52, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TechServices() {
    const [activeTab, setActiveTab] = useState(0);
    const [prevTab, setPrevTab] = useState(null);
    const [animating, setAnimating] = useState(false);
    const contentRef = useRef(null);

    const tab = tabs[activeTab];

    const switchTab = (idx) => {
        if (idx === activeTab || animating) return;
        setAnimating(true);
        setPrevTab(activeTab);
        setTimeout(() => {
            setActiveTab(idx);
            setAnimating(false);
        }, 220);
    };

    return (
        <>
            <section className="tech_services">
                <DotGrid />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='tech_heading mb-5'>
                                <motion.h3 variants={fadeUp} className="asz-title mb-0">
                                    <h6 className='heading_tag'>AI-First Software Development</h6><br />
                                    Modern, <span>Battle-Tested</span> Stack
                                </motion.h3>
                                <motion.p>Make your product stand out with an appealing and interactive interface built by the ASZ team of experts! Our proficient developers utilize the best front-end and back-end technologies to provide you with solutions that cater to your requirements..</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content_container">
                    {/* ── Left: Tab list ────────────────────────────────────── */}
                    <nav className="tech_nav" aria-label="Service tabs">
                        {tabs.map((t, i) => (
                            <ParticleCard
                                key={t.id}
                                glowColor={t.glowColor}
                                enableTilt={false}
                                clickEffect={true}
                                enableMagnetism={true}
                                className=""
                                style={{ borderRadius: 12 }}
                            >
                                <button className="btn_tab"
                                    onClick={() => switchTab(i)}
                                    style={{
                                        ...(activeTab === i ? { ...styles.tabBtnActive, "--tab-accent": t.accent } : {}),
                                    }}
                                    aria-selected={activeTab === i}
                                >
                                    <span className="tab_num" style={{ color: activeTab === i ? t.accent : "#ccc" }}>{t.number}</span>
                                    <span className="tab_label" style={{ color: activeTab === i ? t.accent : "#1e293b" }}>{t.label}</span>
                                    {activeTab === i && (
                                        <span className="tab_indicator" style={{ ...styles.tabIndicator, background: t.accent }} />
                                    )}
                                </button>
                            </ParticleCard>
                        ))}
                    </nav>

                    {/* ── Right: Content panel ──────────────────────────────── */}
                    <ParticleCard
                        glowColor={tab.glowColor}
                        enableTilt={true}
                        clickEffect={true}
                        enableMagnetism={false}
                        style={{ ...styles.panel, borderColor: `${tab.accent}` }}
                    >
                        {/* Pattern overlay */}
                        <div style={styles.patternLayer} aria-hidden="true">
                            {patterns[tab.bgPattern]?.(tab.accent)}
                        </div>

                        {/* Subtle top accent line */}
                        <div style={{ ...styles.accentBar, background: tab.accent }} />

                        {/* Content */}
                        <div
                            ref={contentRef}
                            style={{ ...styles.content, opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.22s ease, transform 0.22s ease" }}
                        >

                            <p style={{ ...styles.tabBadge, color: tab.accent, borderColor: `${tab.accent}33`, background: `${tab.accent}0d` }}>
                                {tab.number} — {tab.label}
                            </p>
                            <h2 style={styles.headline}>{tab.headline}</h2>
                            <p style={styles.description}>{tab.description}</p>

                            <ul style={styles.featureList}>
                                {tab.features.map((f) => (
                                    <li key={f} style={styles.featureItem}>
                                        <CheckIcon color={tab.accent} />
                                        <span style={{ ...styles.featureText, color: "#334155" }}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                style={{ ...styles.cta, background: tab.accent }}
                                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                Explore {tab.label} Services →
                            </button>
                        </div>
                    </ParticleCard>
                </div>
            </section>
        </>
    );
}

// ─── Dot Grid ─────────────────────────────────────────────────────────────────
function DotGrid() {
    return (
        <div className="dotGrid" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dots" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" fill="#94a3b8" opacity="0.18" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
        </div>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {

    tabBtnActive: {
        background: "rgba(0,0,0,0.035)",
    },

    panel: {
        flex: 1,
        borderRadius: "20px",
        border: "1.5px solid #e2e8f0",
        background: "#fafbfc",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
        minHeight: "380px",
        display: "flex",
        flexDirection: "column",
    },
    patternLayer: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "55%",
        height: "100%",
        pointerEvents: "none",
        opacity: 1,
    },
    accentBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        borderRadius: "20px 20px 0 0",
        transition: "background 0.3s ease",
    },
    content: {
        position: "relative",
        zIndex: 2,
        maxWidth: "440px",
    },
    tabBadge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.4px",
        padding: "4px 10px",
        borderRadius: "20px",
        border: "1px solid",
        marginBottom: "16px",
        textTransform: "uppercase",
    },
    headline: {
        fontSize: "clamp(22px, 3vw, 30px)",
        fontWeight: "800",
        letterSpacing: "-0.6px",
        color: "#0f172a",
        margin: "0 0 14px",
        lineHeight: 1.2,
    },
    description: {
        fontSize: "15px",
        lineHeight: 1.7,
        color: "#64748b",
        margin: "0 0 24px",
        fontWeight: "400",
    },
    featureList: {
        listStyle: "none",
        margin: "0 0 28px",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    featureItem: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    featureText: {
        fontSize: "14px",
        fontWeight: "500",
    },
    cta: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "11px 22px",
        borderRadius: "10px",
        border: "none",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "opacity 0.2s, transform 0.2s",
        letterSpacing: "0.1px",
    },
};
