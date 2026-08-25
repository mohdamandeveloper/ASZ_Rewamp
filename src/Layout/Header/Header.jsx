import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../../Context/LanguageContext';

/* ─── DROPDOWN DATA ─────────────────────────────────────────── */
const SERVICES_ITEMS = [
  { label: "Software Development", url: "/services/custom-software-development" },
  { label: "Testing & QA", url: "/services/testing-qa" },
  { label: "Mobile Development", url: "/services/mobile-app-development" },
  { label: "UX/UI Design", url: "/services/ux-ui-development" },
  { label: "IT Consulting", url: "/services/it-consulting" },
  { label: "Data Analytics", url: "/services/data-analytics" },
  { label: "CyberSecurity Services", url: "/services/cybersecurity-services" },
];

const INDUSTRIES_ITEMS = [
  { label: "Healthcare", url: "/work/healthcare" },
  { label: "Banking", url: "/work/banking" },
  { label: "Logistics & Transport", url: "/work/logistics-transport" },
  { label: "Payments", url: "/work/payments" },
  { label: "Manufacturing", url: "/work/manufacturing" },
  { label: "Investment", url: "/work/investment" },
  // { label: "CyberSecurity Services", url: "/services/cybersecurity-services" },
];

const PRODUCTS_ITEMS = [
  { label: "Product 1", url: "/products" },
  { label: "Product 2", url: "/products" },
];

const NAV_LINKS = [
  { link: "Home", url: "/", dropdown: null },
  { link: "About Us", url: "/about", dropdown: null },
  { link: "Services", url: "/service", dropdown: SERVICES_ITEMS },
  { link: "Products", url: "/products", dropdown: null },
  { link: "Our Work", url: "/work", dropdown: INDUSTRIES_ITEMS },
];

const MOBILE_MENU = [
  { label: "Home", url: "/", children: null },
  { label: "About Us", url: "/about", children: null },
  { label: "Services", url: "/service", children: SERVICES_ITEMS },
  { label: "Products", url: "/products", children: PRODUCTS_ITEMS },
  { label: "Our Work", url: "/work", children: null },
  { label: "Contact Us", url: "/contact", children: null },
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
              onClick={onClose}
            >
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
    setExpanded(p => p === label ? null : label)
    p == 'services' ? onClose : null;
  };

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
            className='side_nav'
            key="sidebar"
            variants={sidebarVariants} initial="closed" animate="open" exit="closed"
          >
            <div className='logo'>
              <Link to="/">
                <img src="/images/asz-logo2.png" alt="ASZ" style={{ height: '40px' }} />
              </Link>
              <button onClick={onClose}>✕</button>
            </div>

            <div className='menu_list'>
              {MOBILE_MENU.map((item, i) => (
                <motion.div className='menu_item' key={item.label} custom={i} variants={itemVariants} initial="closed" animate="open">
                  <div className='menu_item_inner'>
                    {item.children ? (
                      <Link to={item.url}
                        onClick={() => toggle(item.label)}>
                        <span>{item.label}</span>
                        <span style={{
                          transform: expanded === item.label ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}><i class="bi bi-chevron-down"></i></span>
                      </Link>
                    ) : (
                      <Link
                        to={item.url}
                        onClick={onClose}>
                        {item.label}
                      </Link>
                    )}
                  </div>

                  {item.children && (
                    <AnimatePresence>
                      {expanded === item.label && (
                        <motion.div
                          className='sub_menu'
                          variants={collapseV} initial="closed" animate="open" exit="closed"
                        >
                          {item.children.map(child => (
                            <Link
                              key={child.url}
                              to={child.url}
                              onClick={onClose}
                              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                            >
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

            <div className='btn_footer'>
              <Link
                to="/contact"
                onClick={onClose}
                className='btn-primary' style={{ width: '100%' }}>
                Contact Us <i class="bi bi-arrow-right"></i>
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
  const [openDropdown, setOpenDropdown] = useState(null);
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
            <div className="navbar-logo">
              <Link to="/"><img src="/images/asz-logo2.png" alt="ASZ" /></Link>
            </div>
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