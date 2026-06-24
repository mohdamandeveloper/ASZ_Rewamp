import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../../Context/LanguageContext';

/* ─── DATA ──────────────────────────────────────────────────── */
const SERVICES_MENU = {
  coreServices: [
    { label: "Product Engineering", active: true },
    { label: "Enterprise Software", active: false },
    { label: "IT & Strategic Consulting", active: false },
  ],
  panels: {
    "Product Engineering": {
      title: "Product Engineering",
      subtitle: "From idea to a live product — we engineer it end to end.",
      columns: [
        {
          icon: "⬡",
          heading: "WEB & SOFTWARE",
          items: ["Custom Software Development", "Web App Development", "Mobile App Development", "Android App Development", "iOS App Development"],
        },
        {
          icon: "✦",
          heading: "DESIGN & PROTOTYPE",
          items: ["Digital Product Development", "Digital Product Design", "Progressive Web Development", "Application Managed Services", "Software Security"],
        },
        {
          icon: "◈",
          heading: "QUALITY & DEVOPS",
          items: ["API Development", "DevOps Services", "QA & Testing", "Test Automation", "IT Maintenance"],
        },
      ],
      cta: { text: "Got a product idea? We turn it into a fully engineered, market-ready solution.", btn: "Start Building" },
    },
    "Enterprise Software": {
      title: "Enterprise Software",
      subtitle: "Scalable, secure enterprise solutions built for growth.",
      columns: [
        { icon: "⬡", heading: "ERP & CRM", items: ["ERP Implementation", "CRM Solutions", "Business Intelligence", "Data Analytics", "Cloud Migration"] },
        { icon: "✦", heading: "INTEGRATION", items: ["API Integration", "Microservices", "Legacy Modernization", "System Architecture", "Security Audits"] },
        { icon: "◈", heading: "SUPPORT", items: ["Managed Services", "24/7 Support", "Performance Tuning", "SLA Management", "Disaster Recovery"] },
      ],
      cta: { text: "Need enterprise-grade software?", btn: "Talk to Experts" },
    },
    "Web 3.0 & Blockchain": {
      title: "Web 3.0 & Blockchain",
      subtitle: "Decentralized solutions for the next generation of the web.",
      columns: [
        { icon: "⬡", heading: "BLOCKCHAIN", items: ["Smart Contracts", "DeFi Solutions", "NFT Development", "DAO Platforms", "Token Development"] },
        { icon: "✦", heading: "WEB3 APPS", items: ["dApp Development", "Wallet Integration", "IPFS Solutions", "Cross-chain Bridges", "Web3 Consulting"] },
        { icon: "◈", heading: "METAVERSE", items: ["Virtual Worlds", "AR/VR Experiences", "Digital Twins", "Spatial Computing", "3D Asset Creation"] },
      ],
      cta: { text: "Ready to build on Web3?", btn: "Get Started" },
    },
  },
};

const NAV_LINKS = [
  {
    link: 'Home',
    url: '/'
  },
  {
    link: 'About Us',
    url: '/about'
  },
  {
    link: 'Services',
    url: ''
  },
  {
    link: 'Products',
    url: '/products'
  },
  {
    link: 'Products2',
    url: '/products2'
  }
];

// LANGUAGES is imported from LanguageContext — single source of truth

const MOBILE_MENU = [
  { label: "Home", children: null },
  { label: "About Us", children: null },
  {
    label: "Services",
    isServices: true,
    children: SERVICES_MENU.coreServices.map(svc => ({
      label: svc.label,
      items: (SERVICES_MENU.panels[svc.label]?.columns || []).flatMap(col => col.items),
    })),
  },
  {
    label: "Industries", children: [
      { label: "ISVs & Digital Natives" }, { label: "GovTech" },
      { label: "Travel, Transportation, & Logistics" }, { label: "Media & Entertainment" },
      { label: "BFSI" }, { label: "Construction" }, { label: "Healthcare" },
      { label: "On Demand" }, { label: "Real Estate" }, { label: "Education" },
      { label: "Travel & Hospitality" },
    ],
  },
  {
    label: "Career", children: [{ label: "Our Story" },
    { label: "Leadership" },
    { label: "Careers" },
    { label: "Press & Media" }]
  },
  { label: "Contact Us", children: null },
];


/* ─── LANGUAGE SELECTOR ─────────────────────────────────────── */
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language: selected, setLanguage: setSelected } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className='btn_language' ref={ref} style={{ position: "relative" }}>
      <button className="language_selector"
        onClick={() => setOpen(o => !o)}
      >
        <span style={{ fontSize: 16 }}>{selected.flag}</span>
        <span>{selected.label}</span>
        <span style={{ fontSize: 10, opacity: 0.7, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "absolute", top: "calc(100% + 10px)", right: 0,
              background: "#0d1b3e", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14, overflow: "hidden", minWidth: 160,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)", zIndex: 9999,
            }}
          >
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => { setSelected(lang); setOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  width: "100%", padding: "10px 16px",
                  background: selected.code === lang.code ? "rgba(59,130,246,0.25)" : "transparent",
                  border: "none", color: "#fff", cursor: "pointer", fontSize: 13,
                  textAlign: "left", transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = selected.code === lang.code ? "rgba(59,130,246,0.25)" : "transparent"}
              >
                <span style={{ fontSize: 18 }}>{lang.flag}</span>
                <span style={{ fontWeight: 500 }}>{lang.label}</span>
                <span style={{ marginLeft: "auto", fontSize: 11, opacity: 0.5 }}>{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── SERVICES MEGA MENU ────────────────────────────────────── */
function ServicesMegaMenu({ onClose }) {
  const [activeService, setActiveService] = useState("Product Engineering");
  const panel = SERVICES_MENU.panels[activeService] || SERVICES_MENU.panels["Product Engineering"];
  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return (
    <motion.div
      className="mega_menu"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div style={{ display: "flex", minHeight: 400 }}>
        {/* Sidebar */}
        <div style={{ width: 220, background: "rgba(255,255,255,0.04)", borderRight: "1px solid rgba(255,255,255,0.07)", padding: "24px 0", flexShrink: 0 }}>
          <div style={{ padding: "0 20px 16px", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
            CORE SERVICES
          </div>
          {SERVICES_MENU.coreServices.map(svc => (
            <button
              key={svc.label}
              onClick={() => setActiveService(svc.label)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "13px 20px",
                background: activeService === svc.label ? "rgba(59,130,246,0.15)" : "transparent",
                border: "none", borderLeft: activeService === svc.label ? "3px solid #3b82f6" : "3px solid transparent",
                color: activeService === svc.label ? "#fff" : "rgba(255,255,255,0.55)",
                fontWeight: activeService === svc.label ? 700 : 400,
                fontSize: 13.5, cursor: "pointer", textAlign: "left", transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (activeService !== svc.label) e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (activeService !== svc.label) e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
            >
              <span>{svc.label}</span>
              <span style={{ opacity: 0.4, fontSize: 11 }}>›</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div style={{ flex: 1, padding: "28px 32px 0" }}>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#fff" }}>{panel.title}</h3>
            <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "rgba(255,255,255,0.5)" }}>{panel.subtitle}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {panel.columns.map(col => (
              <div key={col.heading}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  {/* <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                    {col.icon}
                  </div> */}
                  <span style={{ fontWeight: 700, color: "#fff" }}>
                    {col.heading}
                  </span>
                </div>
                {col.items.map(item => (
                  <div key={item}
                    style={{ padding: "7px 0", fontSize: 13.5, color: "rgba(255,255,255,0.7)", cursor: "pointer", transition: "color 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                  >
                    <Link to={`/services/${slugify(item)}`} onClick={onClose} style={{color: '#d6d6d6ff'}}>
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MOBILE MENU ───────────────────────────────────────────── */
function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  const [expandedSvc, setExpandedSvc] = useState(null);

  const sidebarVariants = {
    closed: { x: "-100%", transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    open: { x: 0, transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  };
  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: i => ({ opacity: 1, x: 0, transition: { delay: 0.08 + i * 0.045, duration: 0.28 } }),
  };
  const collapseV = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.22 } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.25 } },
  };

  const toggle = (label) => {
    setExpanded(p => p === label ? null : label);
    setExpandedSvc(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }} onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000 }}
          />
          <motion.div key="sidebar"
            variants={sidebarVariants} initial="closed" animate="open" exit="closed"
            style={{
              position: "fixed", top: 0, left: 0, bottom: 0, width: 320,
              background: "#2563eb", zIndex: 2001, overflowY: "auto", display: "flex", flexDirection: "column"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 16px" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>ASZ</span>
              <button onClick={onClose} style={{ background: "none", border: "none", color: "#ff4444", fontSize: 22, cursor: "pointer", fontWeight: 700 }}>✕</button>
            </div>

            <div style={{ flex: 1 }}>
              {MOBILE_MENU.map((item, i) => (
                <motion.div key={item.label} custom={i} variants={itemVariants} initial="closed" animate="open">
                  <button
                    onClick={() => item.children ? toggle(item.label) : null}
                    style={{
                      width: "100%", padding: "16px 20px", background: "none", border: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <span style={{ fontSize: 12, opacity: 0.7, transform: expanded === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                    )}
                  </button>

                  {item.children && (
                    <AnimatePresence>
                      {expanded === item.label && (
                        <motion.div variants={collapseV} initial="closed" animate="open" exit="closed" style={{ overflow: "hidden" }}>
                          {item.isServices
                            ? item.children.map(svc => (
                              <div key={svc.label}>
                                <button
                                  onClick={() => setExpandedSvc(p => p === svc.label ? null : svc.label)}
                                  style={{
                                    width: "100%", padding: "13px 20px 13px 32px",
                                    background: "rgba(0,0,0,0.2)", border: "none",
                                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                                    color: "#fff", fontSize: 13.5, cursor: "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                  }}
                                >
                                  <span>{svc.label}</span>
                                  <span style={{ fontSize: 10, opacity: 0.5, transform: expandedSvc === svc.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                                </button>
                                <AnimatePresence>
                                  {expandedSvc === svc.label && (
                                    <motion.div variants={collapseV} initial="closed" animate="open" exit="closed" style={{ overflow: "hidden" }}>
                                      {svc.items.map(subItem => (
                                        <div key={subItem} style={{
                                          padding: "10px 20px 10px 48px",
                                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                                          background: "rgba(0,0,0,0.28)",
                                          color: "rgba(255,255,255,0.75)", fontSize: 12.5, cursor: "pointer",
                                        }}
                                          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                                          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                                        >{subItem}</div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))
                            : item.children.map(child => (
                              <div key={child.label} style={{
                                padding: "12px 20px 12px 32px",
                                borderBottom: "1px solid rgba(255,255,255,0.07)",
                                background: "rgba(0,0,0,0.15)",
                                color: "rgba(255,255,255,0.85)", fontSize: 13.5, cursor: "pointer",
                              }}
                                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                              >{child.label}</div>
                            ))
                          }
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>

            <div style={{ padding: 20, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <button style={{
                width: "100%", padding: 13, background: "#fff", color: "#2563eb",
                border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer",
              }}>
                Contact Us →
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className='header'>
        <nav
          ref={navRef}
          className={`navbar${scrolled ? " scrolled" : ""}`}
        >
          <div className="navbar-inner">
            {/* Logo */}
            <div className="navbar-logo">
              <Link to="/">
                <img src='/images/asz-logo2.png' />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="desktop-nav">
              {NAV_LINKS.filter(l => l !== "AI").map(link => (
                <div
                  key={link?.url}
                  style={{ position: "relative" }}
                  onMouseEnter={() => link?.link === "Services" ? setServicesOpen(true) : null}
                  onMouseLeave={() => link?.link === "Services" ? setServicesOpen(false) : null}
                >
                  <Link
                    to={link?.url}
                    className={`nav-link-btn${link?.link === "Services" && servicesOpen ? " active" : ""}`}
                  >
                    {link?.link}{" "}
                    {link?.link === "Services" && (
                      <span style={{ fontSize: 10, opacity: 0.6 }}>
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    )}
                  </Link>
                  {link?.link === "Services" && (
                    <AnimatePresence>
                      {servicesOpen && <ServicesMegaMenu onClose={() => setServicesOpen(false)} />}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="navbar-actions">
              {/* ── Contact Us — animated spinning border ── */}
              <Link to={'/contact'} className="contact-btn">
                Contact Us <i className="bi bi-chevron-right"></i>
              </Link>
              <LanguageSelector />
            </div>
            <button className="mobile-hamburger" onClick={() => setMobileOpen(true)}>
              ☰
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}