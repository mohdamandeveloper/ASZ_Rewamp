import { useState, useEffect, useRef, useCallback } from "react";
import "./FaqSection.scss";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQ_CATEGORIES = [
    {
        id: "about",
        label: "About ASZ",
        questions: [
            {
                q: "What services does ASZ offer?",
                a: "ASZ offers a comprehensive suite of technology services including mobile app development, web development, UI/UX design, cloud solutions, AI/ML integration, IoT development, and digital transformation consulting.",
            },
            {
                q: "Why should I choose ASZ over other app & software development companies?",
                a: "ASZ brings 10+ years of industry expertise, a dedicated team of 200+ professionals, transparent processes, on-time delivery, and post-launch support. Our client-first approach and track record of 1000+ successful projects set us apart.",
            },
            {
                q: "How experienced is your team in software development and digital transformation?",
                a: "Our team comprises senior engineers, architects, and designers with an average of 7+ years of experience. We've led digital transformation projects for startups, SMEs, and Fortune 500 companies across 30+ countries.",
            },
            {
                q: "What industries do you specialize in?",
                a: "We specialize in Healthcare, FinTech, E-commerce, EdTech, Logistics, Real Estate, On-Demand services, Social Networking, and Enterprise Software — delivering tailored solutions that solve real business challenges.",
            },
            {
                q: "Do you have offices or operations globally?",
                a: "Yes, ASZ has a global presence with offices in major locations like the US, UAE, and India. Our international presence allows us to serve clients from across the world effectively.",
            },
            {
                q: "How many projects has ASZ delivered?",
                a: "We have successfully delivered 1000+ projects globally, ranging from MVP launches for early-stage startups to large-scale enterprise platforms used by millions of users daily.",
            },
            {
                q: "What makes ASZ different from a freelancing platform?",
                a: "Unlike freelancing platforms, ASZ provides a structured team with dedicated project management, QA, design, and development — ensuring accountability, consistency, and professional delivery standards throughout.",
            },
            {
                q: "Does ASZ work with startups or only large enterprises?",
                a: "We work with everyone — from pre-seed startups building their first MVP to Fortune 500 enterprises modernizing legacy systems. Our engagement models and pricing are designed to scale with your stage and budget.",
            },
            {
                q: "Can I see your portfolio before engaging?",
                a: "Absolutely. We're happy to share relevant case studies and portfolio pieces during our initial consultation. We also have publicly available work on our website showcasing a range of industries and platforms.",
            },
            {
                q: "What technologies does your team specialize in?",
                a: "Our team is proficient in React, React Native, Flutter, Node.js, Python, Swift, Kotlin, AWS, Azure, GCP, and more. We choose the best tech stack for your specific use case rather than forcing a one-size-fits-all approach.",
            },
        ],
    },
    {
        id: "process",
        label: "Process and Collaboration",
        questions: [
            {
                q: "What is your typical project development process?",
                a: "We follow an Agile methodology with iterative sprints — Discovery → Design → Development → QA → Deployment → Support. You'll get regular updates and demos so there are no surprises at launch.",
            },
            {
                q: "How do you communicate during a project?",
                a: "We use Slack, Jira, Confluence, and scheduled video calls. A dedicated project manager serves as your single point of contact, ensuring clear and consistent communication throughout.",
            },
            {
                q: "Can I be involved in the development process?",
                a: "Absolutely. We encourage active client involvement through sprint reviews, milestone demos, and real-time access to project boards. Your feedback directly shapes the product.",
            },
            {
                q: "What happens after the project is delivered?",
                a: "We provide free bug-fix support for 30 days post-launch. Beyond that, flexible maintenance retainers are available to ensure your product keeps performing at its best.",
            },
            {
                q: "How long does a typical project take?",
                a: "Timelines vary by complexity. A basic MVP typically takes 6–10 weeks. Mid-complexity apps take 3–6 months. Enterprise-grade platforms can take 6–12 months. We provide a detailed timeline after the discovery phase.",
            },
            {
                q: "Do you conduct a discovery phase before development starts?",
                a: "Yes. Every project begins with a discovery phase where we align on goals, map user journeys, define technical architecture, and create a detailed project plan. This prevents costly pivots later in development.",
            },
            {
                q: "How do you handle changes in project scope?",
                a: "Change requests are handled through a formal change control process. We assess impact on timeline and cost, present options, and proceed only with your approval — keeping everything transparent and documented.",
            },
            {
                q: "What project management tools do you use?",
                a: "We primarily use Jira for sprint planning and issue tracking, Confluence for documentation, Figma for design handoffs, and Slack or Microsoft Teams for day-to-day communication.",
            },
            {
                q: "Do you provide regular progress reports?",
                a: "Yes. You receive weekly status reports, sprint summaries, and demo access at the end of each sprint. You're never left wondering about the status of your project.",
            },
            {
                q: "Can I scale the team up or down during the project?",
                a: "Yes. With our Time & Material and Dedicated Team models, you can scale developers, designers, or QA engineers up or down based on your phase, budget, or urgency.",
            },
        ],
    },
    {
        id: "pricing",
        label: "Pricing and Engagement Models",
        questions: [
            {
                q: "How do you price your projects?",
                a: "We offer Fixed Price, Time & Material, and Dedicated Team models. The right fit depends on your project scope, flexibility needs, and budget. We'll recommend the best model after our initial discovery call.",
            },
            {
                q: "Do you offer flexible payment terms?",
                a: "Yes. Payment is milestone-based for fixed-price projects, and monthly for T&M and dedicated engagements. We work with clients to structure a plan that suits their cash flow.",
            },
            {
                q: "Can I hire dedicated developers from ASZ?",
                a: "Yes. You can hire individual developers or full teams on a dedicated model. Engagements start from 1 month with no long-term lock-in, giving you full flexibility to scale up or down.",
            },
            {
                q: "What is included in your project quotes?",
                a: "Our quotes include design, development, QA, project management, and 30 days of post-launch support. Any third-party costs (APIs, licenses, hosting) are itemized separately so there are no surprises.",
            },
            {
                q: "Is there a minimum project size or budget?",
                a: "We typically engage with projects starting at $10,000. However, for very focused MVPs or consultation engagements, we can discuss options that work within tighter budgets.",
            },
            {
                q: "Do you charge for the initial consultation?",
                a: "No. Our initial discovery call and project assessment are completely free. We take time to understand your needs before recommending a solution or quoting a cost.",
            },
            {
                q: "What is the difference between Fixed Price and T&M models?",
                a: "Fixed Price is best for well-defined scopes with predictable budgets. Time & Material (T&M) suits projects with evolving requirements where you pay for actual hours worked, offering more flexibility.",
            },
            {
                q: "Are there any hidden costs I should know about?",
                a: "We believe in full transparency. All costs are documented in the contract. If scope changes arise, we notify you immediately with revised estimates before proceeding.",
            },
            {
                q: "Do you offer discounts for long-term engagements?",
                a: "Yes. Clients committing to 6+ month dedicated engagements are eligible for preferential rates. Reach out to our sales team to discuss a customized long-term partnership package.",
            },
            {
                q: "Can I get a refund if I'm not satisfied?",
                a: "We're committed to satisfaction. If deliverables don't meet the agreed specifications, we revise them at no cost. Refund policies are outlined in the project contract and handled case-by-case for fairness.",
            },
        ],
    },
    {
        id: "confidentiality",
        label: "Confidentiality and Security",
        questions: [
            {
                q: "How do you protect my idea and intellectual property?",
                a: "We sign a strict NDA before any discussions. All IP rights, source code, and assets created during the project are fully transferred to you upon final payment. We never reuse client code.",
            },
            {
                q: "What security practices do you follow during development?",
                a: "We follow OWASP guidelines, conduct regular code reviews, use encrypted communication channels, enforce role-based access control, and perform penetration testing before deployment.",
            },
            {
                q: "Are you compliant with data protection regulations?",
                a: "Yes. We ensure compliance with GDPR, HIPAA, CCPA, and other relevant data protection regulations based on your industry and operating geography.",
            },
            {
                q: "Who owns the source code after delivery?",
                a: "You do — 100%. Upon full payment, all source code, assets, databases, and documentation are transferred to you. ASZ retains no rights to your product.",
            },
            {
                q: "How do you secure communication of sensitive project files?",
                a: "We use encrypted file sharing (AWS S3 with access controls, Google Workspace), VPN-protected environments for sensitive projects, and end-to-end encrypted messaging where required.",
            },
            {
                q: "Do your developers sign NDAs?",
                a: "Yes. All ASZ employees and contractors sign comprehensive NDAs and confidentiality agreements as part of their onboarding, covering all client projects they work on.",
            },
            {
                q: "What happens to my data when the project ends?",
                a: "All client data is securely handed over during offboarding. We delete our working copies within 30 days of project closure unless you request an extended retention period.",
            },
            {
                q: "Do you conduct security audits on your own infrastructure?",
                a: "Yes. Our internal infrastructure undergoes quarterly security audits by a third-party firm. We maintain ISO-aligned practices to ensure our development environment doesn't introduce vulnerabilities into your product.",
            },
            {
                q: "Can you build apps compliant with HIPAA or PCI-DSS?",
                a: "Yes. We have experience building HIPAA-compliant healthcare platforms and PCI-DSS compliant payment systems. Our team follows strict data handling and encryption standards required by these frameworks.",
            },
            {
                q: "How do you handle security vulnerabilities discovered after launch?",
                a: "If a security vulnerability is identified in our delivered code within 90 days, we treat it as a critical bug and fix it at no charge. For older issues, we offer priority support under a maintenance retainer.",
            },
        ],
    },
];

// ─── Arrow SVG ────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        style={{ width: 14, height: 14 }}>
        <path d="M6 9l6 6 6-6" />
    </svg>
);

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({ question, answer, isOpen, onToggle }) {
    return (
        <div style={{
            background: "var(--surface)",
            border: `1px solid ${isOpen ? "rgba(255,107,53,0.35)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: 14,
            marginBottom: 12,
            overflow: "hidden",
            boxShadow: isOpen
                ? "0 0 0 1px rgba(255,107,53,0.25), 0 8px 32px rgba(255,107,53,0.08)"
                : "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
        }}>
            {/* Question row */}
            <button
                onClick={onToggle}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    width: "100%",
                    padding: "22px 24px",
                    background: isOpen ? "#121212" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    transition: "background 0.2s",
                }}
            >
                <span style={{ flex: 1 }}>{question}</span>

                {/* Arrow circle */}
                <span style={{
                    flexShrink: 0,
                    width: 32, height: 32,
                    borderRadius: "50%",
                    border: `1px solid ${isOpen ? "rgb(255,107,53)" : "rgba(255,255,255,0.07)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isOpen ? "rgb(255,107,53)" : "transparent",
                    color: isOpen ? "#fff" : "var(--text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "background 0.3s, border-color 0.3s, transform 0.35s, color 0.3s",
                }}>
                    <ArrowIcon />
                </span>
            </button>

            {/* Answer */}
            <div style={{
                maxHeight: isOpen ? 400 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}>
                <div style={{
                    padding: "16px 24px 24px",
                    fontSize: "0.915rem",
                    lineHeight: 1.75,
                    color: "var(--text-muted)",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                }}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

// ─── Main FAQ Component ───────────────────────────────────────────────────────
export default function FAQSection() {
    const [activeTab, setActiveTab] = useState("about");
    const [openIndex, setOpenIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const panelsRef = useRef(null);

    // Reset open accordion when tab changes
    const handleTabChange = (id) => {
        setActiveTab(id);
        setOpenIndex(null);
        if (panelsRef.current) panelsRef.current.scrollTop = 0;
    };

    const toggleItem = (i) => setOpenIndex(prev => prev === i ? null : i);


    // ── Scroll trap ──
    //   const handleWheel = useCallback((e) => {
    //     if (window.innerWidth <= 900) return;
    //     const el = panelsRef.current;
    //     if (!el) return;

    //     const rect = el.getBoundingClientRect();
    //     const inView = rect.top < window.innerHeight && rect.bottom > 0;
    //     if (!inView) return;

    //     const goingDown = e.deltaY > 0;
    //     const atBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 2;
    //     const atTop = el.scrollTop <= 0;

    //     if (goingDown && !atBottom) {
    //       e.preventDefault();
    //       el.scrollTop += e.deltaY * 0.9;
    //     } else if (!goingDown && !atTop) {
    //       e.preventDefault();
    //       el.scrollTop += e.deltaY * 0.9;
    //     }
    //   }, []);

    //   useEffect(() => {
    //     window.addEventListener("wheel", handleWheel, { passive: false });
    //     return () => window.removeEventListener("wheel", handleWheel);
    //   }, [handleWheel]);

    // ── Touch scroll trap ──
    //   const touchStartY = useRef(0);

    //   const handleTouchStart = (e) => {
    //     touchStartY.current = e.touches[0].clientY;
    //   };

    //   const handleTouchMove = (e) => {
    //     if (window.innerWidth <= 900) return;
    //     const el = panelsRef.current;
    //     if (!el) return;
    //     const dy = touchStartY.current - e.touches[0].clientY;
    //     const atBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 2;
    //     const atTop = el.scrollTop <= 0;
    //     if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) {
    //       e.stopPropagation();
    //     }
    //   };

    const activeCategory = FAQ_CATEGORIES.find(c => c.id === activeTab);

    return (
        <>
            {/* Page bg layer */}
            <div style={{
                position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
                background: `
          radial-gradient(70% 50% at 20% 30%, rgba(255, 107, 53, 0.04) 0%, transparent 60%), radial-gradient(60% 60% at 80% 70%, rgb(110 52 13 / 18%) 0%, #00000000 60%)
        `,
            }} />

            <section className="faq-section" style={{
                position: "relative", zIndex: 1,
                padding: "80px 24px 100px",
            }}>
                <div className="container">
                    {/* Heading */}
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <h2 className="heading_title">
                            <span>FAQ</span>'s
                        </h2>
                        <p style={{ marginTop: 12, fontSize: "1rem", color: "var(--text-muted-light)" }}>
                            Everything you need to know about us
                        </p>
                    </div>

                    {/* Layout */}
                    <div className="faq-layout-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "300px 1fr",
                        gap: 32,
                        alignItems: "start",
                    }}>

                        {/* LEFT: Tabs */}
                        <aside className="faq-tabs-sidebar" style={{
                            position: "sticky",
                            top: 32,
                            background: "var(--surface)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: 16,
                            overflow: "hidden",
                            padding: 8,
                        }}>
                            {FAQ_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`faq-tab-btn${activeTab === cat.id ? " active" : ""}`}
                                    onClick={() => handleTabChange(cat.id)}
                                    aria-selected={activeTab === cat.id}
                                    role="tab"
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </aside>

                        {/* RIGHT: Accordion panels */}
                        <div
                            ref={panelsRef}
                            className="faq-panels-scroll"
                            // onTouchStart={handleTouchStart}
                            // onTouchMove={handleTouchMove}
                            style={{ scrollBehavior: "smooth" }}
                        >
                            {activeCategory?.questions.map((item, i) => (
                                <AccordionItem
                                    key={`${activeTab}-${i}`}
                                    question={item.q}
                                    answer={item.a}
                                    isOpen={openIndex === i}
                                    onToggle={() => toggleItem(i)}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}