import { useRef, useEffect } from 'react';
import './MobileAppDevelopment.scss';
import HeroSectionServices from '../../../Common/HeroSectionServices/HeroSectionServices';

const SERVICES = [
    {
        icon: "🍎",
        title: "iOS Mobile App Development",
        desc: "Crafting pixel-perfect, high-performance apps for iPhone and iPad using Swift and SwiftUI. We build apps that feel native, intuitive, and ready for the App Store from day one.",
        tags: ["Swift", "SwiftUI", "Xcode", "TestFlight"],
        emoji: "📱",
    },
    {
        icon: "🤖",
        title: "Android Mobile App Development",
        desc: "Building robust Android apps with Kotlin and Jetpack Compose. We cover the full Android ecosystem — phones, tablets, foldables — with smooth performance and material design polish.",
        tags: ["Kotlin", "Jetpack", "Compose", "Play Store"],
        emoji: "🤖",
    },
    {
        icon: "⌚",
        title: "Wearable Mobile App Development",
        desc: "Developing sleek, context-aware apps for smartwatches and fitness trackers on WatchOS and Wear OS. Minimal UI, real-time sync, and health integration built in.",
        tags: ["WearOS", "WatchKit", "Health APIs", "BLE"],
        emoji: "⌚",
    },
    {
        icon: "🔀",
        title: "Cross-Platform Mobile App Development",
        desc: "One codebase, two platforms. Using React Native and Flutter, we ship apps that look and behave native on both iOS and Android — cutting cost without cutting quality.",
        tags: ["React Native", "Flutter", "Expo", "Dart"],
        emoji: "🔀",
    },
    {
        icon: "⚡",
        title: "Native Mobile App Development",
        desc: "Maximum performance, deepest device access. We write fully native apps when you need to push hardware limits, access low-level APIs, or deliver a truly platform-first experience.",
        tags: ["C++", "Metal", "Vulkan", "NDK"],
        emoji: "⚡",
    },
];

const INDUSTRIES = [
    { icon: "🏥", name: "Healthcare & MedTech" },
    { icon: "🛒", name: "E-Commerce & Retail" },
    { icon: "🏦", name: "Fintech & Banking" },
    { icon: "📚", name: "EdTech & E-Learning" },
    { icon: "🚚", name: "Logistics & Supply Chain" },
    { icon: "🎮", name: "Gaming & Entertainment" },
    { icon: "🏨", name: "Travel & Hospitality" },
    { icon: "🏗️", name: "Real Estate & PropTech" },
    { icon: "🌱", name: "AgriTech & Sustainability" },
    { icon: "🔧", name: "Field Service & IoT" },
    { icon: "💼", name: "Enterprise & SaaS" },
    { icon: "🍔", name: "Food & Restaurant Tech" },
];

const TECHS = [
    { icon: "🧠", name: "Artificial Intelligence (AI)" },
    { icon: "✨", name: "Generative AI" },
    { icon: "📊", name: "Machine Learning (ML)" },
    { icon: "🌐", name: "Internet of Things (IoT)" },
    { icon: "☁️", name: "Cloud" },
    { icon: "⛓️", name: "Blockchain" },
    { icon: "💰", name: "Cryptocurrency" },
    { icon: "🌌", name: "Metaverse" },
    { icon: "🥽", name: "AR / VR" },
    { icon: "📈", name: "Data Analytics" },
];

const PROCESS_STEPS = [
    {
        title: "Discovery & Strategy",
        desc: "We start by understanding your goals, audience, and competitive landscape. This phase produces a detailed product brief, tech stack recommendation, and MVP scope.",
        deliverables: ["Product Brief", "Tech Stack", "MVP Scope"],
    },
    {
        title: "UX Research & Wireframing",
        desc: "Our designers map user journeys, define information architecture, and build low-fidelity wireframes — validated with real users before a pixel of UI is drawn.",
        deliverables: ["User Flows", "Wireframes", "IA Map"],
    },
    {
        title: "UI Design & Prototyping",
        desc: "High-fidelity, clickable prototypes in Figma. Every micro-interaction is designed before development starts, so engineers build with clarity and confidence.",
        deliverables: ["Design System", "Prototype", "Figma File"],
    },
    {
        title: "Agile Development",
        desc: "Two-week sprints, daily standups, and continuous integration. You see working software every two weeks — not a reveal at the end of the project.",
        deliverables: ["Sprint Demos", "CI/CD Pipeline", "Code Reviews"],
    },
    {
        title: "QA & Testing",
        desc: "Multi-device testing across real hardware, automated test suites, performance benchmarking, and security audits. We test what users actually do — and the edge cases they don't.",
        deliverables: ["Test Reports", "Performance Audit", "Security Scan"],
    },
    {
        title: "Launch & Post-Launch Support",
        desc: "App store submission, phased rollout, crash monitoring, and 30-day post-launch support included in every engagement. We stay on until the app is stable and growing.",
        deliverables: ["App Store Listing", "Monitoring", "30-day Support"],
    },
];

const FEATURES = [
    { icon: "🏥", title: "Healthcare & MedTech", desc: "Empowering patient care with secure, intelligent, and data-driven healthcare solutions." },
    { icon: "🛒", title: "E-Commerce & Retail", desc: "Driving seamless shopping experiences through scalable and customer-centric digital platforms." },
    { icon: "🏦", title: "Fintech & Banking", desc: "Delivering secure, compliant, and innovative financial solutions for the digital economy." },
    { icon: "📚", title: "EdTech & E-Learning", desc: "Transforming education with interactive, accessible, and personalized learning experiences." },
    { icon: "🚚", title: "Logistics & Supply Chain", desc: "Optimizing operations with real-time tracking, automation, and supply chain intelligence." },
    { icon: "🎮", title: "Gaming & Entertainment", desc: "Creating immersive, engaging, and high-performance digital entertainment experiences." },
    { icon: "🏨", title: "Travel & Hospitality", desc: "Enhancing guest experiences with smart booking, personalization, and travel management solutions." },
    { icon: "🌱", title: "AgriTech & Sustainability", desc: "Leveraging technology to improve agricultural productivity and promote sustainable growth." },
    { icon: "🔧", title: "Field Service & IoT", desc: "Connecting devices, assets, and teams with intelligent IoT-powered field service solutions." },
];

const WHY_FEATURES = [
    { icon: "🎯", title: "Product Thinking, Not Just Code", desc: "We question requirements, challenge assumptions, and focus on outcomes — not output." },
    { icon: "🔄", title: "Continuous Delivery", desc: "Working software every two weeks. You're never waiting months to see progress." },
    { icon: "📐", title: "Design-Driven Development", desc: "Every app we build starts with deep UX research and a tested prototype." },
    { icon: "🛡️", title: "Security-First Engineering", desc: "OWASP top-10 mitigations, encrypted storage, and penetration testing on every release." },
    { icon: "📊", title: "Built-In Analytics & Monitoring", desc: "Crash reporting, user analytics, and performance dashboards ready from day one." },
    { icon: "🤝", title: "Transparent, Collaborative Process", desc: "Slack access to your team, weekly reporting, and no surprises on scope or cost." },
];

export default function MobileAppDevelopment() {
    const sectionRef = useRef(null);
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
        <>
            <div className="mobile-app-development">
                <section className="hero-section" ref={sectionRef} aria-label="ASZ Technologies hero banner">
                    <HeroSectionServices
                        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
                        title={
                            <>
                                Mobile Application
                            </>
                        }
                        subtitle="Modernize outdated systems with custom Software development services designed to streamline operations, improve scalability, and accelerate business growth."
                        ctaText="Build a Custom Web App"
                        ctaHref="#contact"
                        features={[
                            "SEO & User Friendly UI Designs",
                            "Certified Web Designers & Developers",
                            "Bug-free & Standardized Code",
                            "Unmatched User Experience",
                        ]}
                    />
                </section>
                <section className="hero">
                    <div className="hero-bg-glow" />
                    <div className="hero-bg-glow2" />
                    <div className="hero-grid-overlay" />

                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero_badge"><span />Mobile App Development</div>
                            <h1 className="heading_title" style={{ color: 'white' }}>
                                <span>Build Apps</span> That Users Love — and Businesses Rely On
                            </h1>
                            <p className="heading_subtitle">
                                From concept to App Store, we design, develop, and deploy enterprise-grade mobile applications
                                across iOS, Android, and cross-platform — powered by AI and built for scale.
                            </p>
                            <div className="hero-ctas">
                                <button className="btn-primary">Start Your Project →</button>
                                <button className="btn-secondary">View Portfolio</button>
                            </div>
                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <div className="hero-stat-num">200+</div>
                                    <div className="hero-stat-label">Apps Delivered</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-num">50+</div>
                                    <div className="hero-stat-label">Industries Served</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-num">12+</div>
                                    <div className="hero-stat-label">Years of Experience</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="orbit-ring r1" />
                            <div className="orbit-ring r2" />
                            {/* <div className="phone-mockup-wrap">
                                <div className="phone-outer">
                                    <div className="phone-screen">
                                        <img src='/images/asz/Gemini_Generated_Image_mfh661mfh661mfh6.png' />
                                        <div className="phone-notch" />
                                        <div className="phone-ui-bar w80" />
                                        <div className="phone-ui-bar w60" />
                                        <div className="phone-ui-card">
                                            <div className="phone-ui-dot-row">
                                                <div className="phone-ui-dot" />
                                                <div className="phone-ui-dot blue" />
                                                <div className="phone-ui-dot green" />
                                            </div>
                                            <div className="phone-ui-bar w90" />
                                            <div style={{ height: 8 }} />
                                            <div className="phone-ui-bar w60" />
                                        </div>
                                        <div style={{ height: 12 }} />
                                        <div className="phone-ui-bar w80" />
                                        <div style={{ height: 8 }} />
                                        <div className="phone-ui-card">
                                            <div className="phone-ui-bar w90" />
                                            <div style={{ height: 8 }} />
                                            <div className="phone-ui-bar w60" />
                                        </div>
                                        <div style={{ height: 12 }} />
                                        <div className="phone-ui-bar w80" />
                                    </div>
                                </div>
                                <div className="phone-float-badge top-right">🍎 iOS Ready</div>
                                <div className="phone-float-badge bottom-left">🤖 Android Ready</div>
                            </div> */}
                            <img src='/images/asz/Gemini_Generated_Image_mfh661mfh661mfh6.png' />
                        </div>
                    </div>
                </section>

                {/* ── 2. SERVICES (STICKY) ── */}
                <section className='our_services' style={{ background: "#0a0a0f", padding: "0 0 80px" }}>
                    <div className="services-section">
                        <div className="services-left">
                            <div className="hero_badge">Our Services</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                <span>Mobile Development</span> Services Built for Every Platform
                            </h2>
                            <p className="heading_subtitle">
                                Whether you need an app for Apple's ecosystem, the Android world, wearables, or everywhere at once —
                                we have a dedicated practice for it. Every service is staffed by specialists, not generalists.
                            </p>
                            <div className="services-left-cta">
                                <button className="btn-primary">Discuss Your Project →</button>
                                <div className="services-trust-row mt-5">
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">4.9★</div>
                                        <div className="services-trust-label">Clutch Rating</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">98%</div>
                                        <div className="services-trust-label">Client Retention</div>
                                    </div>
                                    <div className="services-trust-item">
                                        <div className="services-trust-num">2wk</div>
                                        <div className="services-trust-label">Avg Kickoff</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-right">
                            {SERVICES.map((s, i) => (
                                <div className="service-card reveal" ref={addReveal} key={i}>
                                    <div>
                                        <div className="service-card-icon">{s.icon}</div>
                                        <div className="service-card-title">{s.title}</div>
                                        <p className="service-card-desc">{s.desc}</p>
                                        <div className="service-card-tags">
                                            {s.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}
                                        </div>
                                    </div>
                                    <div className="service-card-img">{s.emoji}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 3. ABOUT MOBILE DEV ── */}
                {/* <section className="about-section">
                    <div className="about-inner">
                        <div className="about-grid">
                            <div className="about-visual reveal" ref={addReveal}>
                                <div className="about-main-card">
                                    <div style={{ fontSize: 64, marginBottom: 24 }}>📱</div>
                                    <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 700, color: "#f0f0f8", marginBottom: 12 }}>
                                        What Does Mobile App Development Actually Mean?
                                    </h3>
                                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#7878a0" }}>
                                        It's the end-to-end process of conceiving, designing, building, testing, and shipping
                                        software applications that run on mobile operating systems — and beyond. Today that includes
                                        wearables, tablets, and connected devices.
                                    </p>
                                    <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                        {["iOS", "Android", "Cross-Platform", "Wearables"].map(t => (
                                            <span key={t} style={{ background: "rgba(230,100,30,0.08)", border: "1px solid rgba(230,100,30,0.2)", color: "#e6641e", padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500 }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="about-accent-box">
                                    <div className="about-accent-num">500+</div>
                                    <div className="about-accent-label">Team Members</div>
                                </div>
                            </div>

                            <div className="reveal" ref={addReveal}>
                                <div className="hero_badge">About Mobile Development</div>
                                <h2 className="heading_title" style={{ color: 'white' }}>
                                    Mobile Apps Are the <span>Front Door</span> to Your Business
                                </h2>
                                <p className="heading_subtitle">
                                    Over 90% of mobile time is spent inside apps. A well-built mobile application doesn't just represent
                                    your brand — it IS the primary way most of your customers experience it.
                                </p>
                                <p className="heading_subtitle">
                                    At ASZ, we build mobile products that drive measurable business outcomes: user retention, conversion,
                                    and lifetime value — not just app downloads. We think like product owners, not just engineers.
                                </p>

                                <div className="about-process-steps">
                                    {[
                                        ["Ideation to Launch", "Full-lifecycle partnership from idea to App Store approval."],
                                        ["Ongoing Optimization", "Post-launch A/B testing, performance tuning, and feature iteration."],
                                        ["Platform Compliance", "App Store & Play Store guidelines handled — rejections avoided."],
                                        ["Real Device Testing", "Tests on 200+ physical devices before any public release."],
                                    ].map(([title, desc], i) => (
                                        <div className="about-step" key={i}>
                                            <div className="about-step-num">0{i + 1}</div>
                                            <div className="about-step-text">
                                                <strong>{title}</strong>
                                                <span>{desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="about-pills">
                                    {["Swift", "Kotlin", "Flutter", "React Native", "TypeScript", "Firebase", "AWS Amplify", "GraphQL"].map(p => (
                                        <span className="about-pill" key={p}>{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ── 7. FEATURES (BOXY) ── */}
                <section className="features-section">
                    <div className="features-inner">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Industries</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Mobile Apps <span>We Develop for<br /> Various Industries</span>
                            </h2>
                            <p className="heading_subtitle">
                                Every feature we build is chosen with purpose — to increase engagement, drive conversion, or reduce churn. No vanity functionality.
                            </p>
                        </div>
                        <div className="features-boxy-grid reveal" ref={addReveal}>
                            {FEATURES.map((f, i) => (
                                <div className="feature-box" key={i}>
                                    <div className="feature-box-icon">{f.icon}</div>
                                    <div className="feature-box-title">{f.title}</div>
                                    <p className="feature-box-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 4. INDUSTRIES ── */}
                {/* <section style={{ padding: "100px 40px", background: "#0a0a0f" }}>
                    <div className="industries-section" style={{ padding: 0 }}>
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Industries</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Mobile Apps <span>We Develop for <br />Various Industries</span>
                            </h2>
                            <p className="heading_subtitle">
                                Deep domain expertise across verticals — we know your industry's regulations, user expectations, and competitive landscape before we write a line of code.
                            </p>
                        </div>
                        <div className="industries-grid">
                            {INDUSTRIES.map((ind, i) => (
                                <div className="industry-card reveal" ref={addReveal} key={i}
                                    style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                                    <span className="industry-icon">{ind.icon}</span>
                                    <div className="industry-name">{ind.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* ── 5. TECHNOLOGIES ── */}
                {/* <section className="tech-section">
                    <div className="tech-inner">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Advanced Technologies</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Advanced Technologies<span>We Use to Build Future-Ready Apps</span>
                            </h2>
                            <p className="heading_subtitle">
                                We don't bolt on buzzwords. Every technology in our stack is chosen because it solves a real problem for your users or your business.
                            </p>
                        </div>
                        <div className="tech-grid">
                            {TECHS.map((tech, i) => (
                                <div className="tech-card reveal" ref={addReveal} key={i}
                                    style={{ transitionDelay: `${(i % 5) * 0.07}s` }}>
                                    <span className="tech-icon">{tech.icon}</span>
                                    <div className="tech-name">{tech.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* ── 6. PROCESS ── */}
                <section style={{ background: "#0a0a0f" }}>
                    <div className="process-section">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Our Process</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                <span>Our Proven</span> Mobile App Development <span>Process</span>
                            </h2>
                            <p className="heading_subtitle">
                                No black boxes. No months of silence. Our process gives you visibility, predictability, and working software at every stage.
                            </p>
                        </div>
                        <div className="process-timeline">
                            {PROCESS_STEPS.map((step, i) => (
                                <div className="process-step reveal" ref={addReveal} key={i}>
                                    <div className="process-step-left">
                                        <div className="process-step-num">{String(i + 1).padStart(2, "0")}</div>
                                        <div className="process-step-line" />
                                    </div>
                                    <div className="process-step-content">
                                        <div className="process-step-title">{step.title}</div>
                                        <p className="process-step-desc">{step.desc}</p>
                                        <div className="process-step-deliverables">
                                            {step.deliverables.map(d => <span className="deliverable-tag" key={d}>{d}</span>)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                

                {/* ── 8. WHY ASZ ── */}
                {/* <section style={{ background: "#0a0a0f" }}>
                    <div className="why_section">
                        <div className="section-header reveal" ref={addReveal}>
                            <div className="hero_badge" style={{ justifyContent: "center" }}>Why ASZ</div>
                            <h2 className="heading_title" style={{ color: 'white' }}>
                                Why Businesses Choose ASZ <br /><span>for Mobile App Development</span>
                            </h2>
                            <p className="heading_subtitle">
                                We've built apps used by millions. Here's what makes our approach different from every other agency you've talked to.
                            </p>
                        </div>

                        <div className="why-grid">
                            <div className="reveal" ref={addReveal}>
                                <h3 className="heading_title" style={{ color: 'white', fontSize: '24px', fontWeight: '600', lineHeight: '1.5' }}>
                                    We Build Apps That Grow Businesses — Not Just Ship Software
                                </h3>
                                <p className="heading_subtitle">
                                    Most agencies hand you a finished app and disappear. We stay invested in your product's success —
                                    because our reputation depends on apps that perform in the market, not just in the demo.
                                </p>
                                <div className="why-cta-block">
                                    <div className="why-cta-text">
                                        <strong>Ready to build your app?</strong>
                                        <span>Free 30-minute strategy call<br /> — no strings attached.</span>
                                    </div>
                                    <button className="btn-primary">Book a Call →</button>
                                </div>
                            </div>

                            <div className="why-right reveal" ref={addReveal}>
                                {[
                                    ["200+", "Apps Launched Globally"],
                                    ["98%", "Client Retention Rate"],
                                    ["12+", "Years of Mobile Excellence"],
                                    ["50+", "Industries Served"],
                                ].map(([num, label], i) => (
                                    <div className="why-stat-card" key={i}>
                                        <div className="why-stat-num">{num}</div>
                                        <div className="why-stat-label">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="why-features-list">
                            {WHY_FEATURES.map((f, i) => (
                                <div className="why-feature" key={i}>
                                    <div className="why-feature-icon">{f.icon}</div>
                                    <div>
                                        <div className="why-feature-title">{f.title}</div>
                                        <p className="why-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    )
}