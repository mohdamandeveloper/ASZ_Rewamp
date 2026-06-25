import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../../Context/LanguageContext';

/* ─── DROPDOWN DATA ─────────────────────────────────────────── */
const SERVICES_ITEMS = [
  { label: "Software Development",   url: "/services/custom-software-development" },
  { label: "Web Development",        url: "/services/web-app-development"         },
  { label: "Mobile Development",     url: "/services/mobile-app-development"      },
  { label: "UX/UI Design",           url: "/services/ux-ui-design"                },
  { label: "IT Consulting",          url: "/services/it-consulting"               },
  { label: "Data Analytics",         url: "/services/data-analytics"              },
  { label: "CyberSecurity Services", url: "/services/cybersecurity-services"      },
];

const PRODUCTS_ITEMS = [
  { label: "Product 1", url: "/products" },
  { label: "Product 2", url: "/products" },
];

const NAV_LINKS = [
  { link: "Home",     url: "/",         dropdown: null            },
  { link: "About Us", url: "/about",    dropdown: null            },
  { link: "Services", url: "/service", dropdown: SERVICES_ITEMS  },
  { link: "Products", url: "/products", dropdown: PRODUCTS_ITEMS  },
];

const MOBILE_MENU = [
  { label: "Home",       url: "/",         children: null          },
  { label: "About Us",   url: "/about",    children: null          },
  { label: "Services",   url: "/service", children: SERVICES_ITEMS },
  { label: "Products",   url: "/products", children: PRODUCTS_ITEMS },
  { label: "Contact Us", url: "/contact",  children: null          },
];

/* ─── LANGUAGE SELECTOR ─────────────────────────────────────── */
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language: selected, setLanguage: setSelected } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="btn_language" ref={ref}>
      <button className="language_selector" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize: 16 }}>{selected.flag}</span>
        <span>{selected.label}</span>
        <span style={{
          fontSize: 10, opacity: 0.7,
          transform: open ? "rotate(180deg)" : "none",
          transition: "transform 0.2s",
        }}>
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => { setSelected(lang); setOpen(false); }}
                className={`lang-dropdown__item${selected.code === lang.code ? " active" : ""}`}
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

/* ─── NAV DROPDOWN ──────────────────────────────────────────── */
// Single reusable dropdown used by both Services and Products.
// open/close is React state — clicking a link calls onClose.
function NavDropdown({ items, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="nav-dropdown"
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.18 }}
        >
          <div className="nav-dropdown__arrow" />
          {items.map((item, i) => (
            <Link
              key={item.url}
              to={item.url}
              className="nav-dropdown__item"
              style={{
                borderBottom: i < items.length - 1
                  ? "1px solid rgb(255 255 255 / 3%)"
                  : "none",
              }}
              onClick={onClose}   // ← closes dropdown on click
            >
              {/* <span className="nav-dropdown__dot" /> */}
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── MOBILE MENU ───────────────────────────────────────────── */
function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  const sidebarVariants = {
    closed: { x: "-100%", transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    open:   { x: 0,       transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  };
  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: i => ({ opacity: 1, x: 0, transition: { delay: 0.08 + i * 0.045, duration: 0.28 } }),
  };
  const collapseV = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.22 } },
    open:   { height: "auto", opacity: 1, transition: { duration: 0.25 } },
  };

  const toggle = (label) => setExpanded(p => p === label ? null : label);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }} onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000 }}
          />
          <motion.div
            key="sidebar"
            variants={sidebarVariants} initial="closed" animate="open" exit="closed"
            style={{
              position: "fixed", top: 0, left: 0, bottom: 0, width: 300,
              background: "#2563eb", zIndex: 2001,
              overflowY: "auto", display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 16px" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>ASZ</span>
              <button onClick={onClose} style={{ background: "none", border: "none", color: "#ff4444", fontSize: 22, cursor: "pointer", fontWeight: 700 }}>✕</button>
            </div>

            <div style={{ flex: 1 }}>
              {MOBILE_MENU.map((item, i) => (
                <motion.div key={item.label} custom={i} variants={itemVariants} initial="closed" animate="open">
                  <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    {item.children ? (
                      <button
                        onClick={() => toggle(item.label)}
                        style={{
                          flex: 1, padding: "16px 20px", background: "none", border: "none",
                          color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left",
                        }}
                      >
                        <span>{item.label}</span>
                        <span style={{
                          fontSize: 12, opacity: 0.7,
                          transform: expanded === item.label ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}>▼</span>
                      </button>
                    ) : (
                      <Link
                        to={item.url}
                        onClick={onClose}
                        style={{
                          flex: 1, padding: "16px 20px",
                          color: "#fff", fontWeight: 700, fontSize: 15,
                          textDecoration: "none", display: "block",
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>

                  {item.children && (
                    <AnimatePresence>
                      {expanded === item.label && (
                        <motion.div
                          variants={collapseV} initial="closed" animate="open" exit="closed"
                          style={{ overflow: "hidden" }}
                        >
                          {item.children.map(child => (
                            <Link
                              key={child.url}
                              to={child.url}
                              onClick={onClose}
                              style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "13px 20px 13px 32px",
                                borderBottom: "1px solid rgba(255,255,255,0.07)",
                                background: "rgba(0,0,0,0.18)",
                                color: "rgba(255,255,255,0.85)",
                                fontSize: 13.5, textDecoration: "none",
                                transition: "color 0.15s",
                              }}
                              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                            >
                              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>

            <div style={{ padding: 20, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <Link
                to="/contact"
                onClick={onClose}
                style={{
                  display: "block", width: "100%", padding: 13,
                  background: "#fff", color: "#2563eb",
                  border: "none", borderRadius: 10,
                  fontWeight: 700, fontSize: 14,
                  textAlign: "center", textDecoration: "none",
                }}
              >
                Contact Us →
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── HEADER ────────────────────────────────────────────────── */
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); // "Services" | "Products" | null
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking anywhere outside the nav
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = (linkName) => {
    if (NAV_LINKS.find(l => l.link === linkName)?.dropdown) {
      setOpenDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <>
      <header className="header">
        <nav ref={navRef} className={`navbar${scrolled ? " scrolled" : ""}`}>
          <div className="navbar-inner">

            {/* Logo */}
            <div className="navbar-logo">
              <Link to="/"><img src="/images/asz-logo2.png" alt="ASZ" /></Link>
            </div>

            {/* Desktop nav */}
            <div className="desktop-nav">
              {NAV_LINKS.map(link => (
                <div
                  key={link.url}
                  className="nav-item"
                  onMouseEnter={() => handleMouseEnter(link.link)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.url}
                    className={`nav-link-btn${openDropdown === link.link ? " active" : ""}`}
                    onClick={closeDropdown}
                  >
                    {link.link}
                    {link.dropdown && (
                      <span className={`nav-chevron${openDropdown === link.link ? " rotated" : ""}`}>
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    )}
                  </Link>

                  {link.dropdown && (
                    <NavDropdown
                      items={link.dropdown}
                      open={openDropdown === link.link}
                      onClose={closeDropdown}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="navbar-actions">
              <Link to="/contact" className="contact-btn">
                Contact Us <i className="bi bi-chevron-right"></i>
              </Link>
              <LanguageSelector />
            </div>

            <button className="mobile-hamburger" onClick={() => setMobileOpen(true)}>☰</button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}