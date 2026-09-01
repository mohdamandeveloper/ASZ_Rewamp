import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useLanguage, useTranslation, LANGUAGES } from '../../Context/LanguageContext';

/* ─── DROPDOWN DATA ─────────────────────────────────────────── */
/* Built from `t` so labels re-render in the active language. URLs stay fixed. */
const getServicesItems = (t) => [
  { label: t.nav_services_software_development, url: "/services/custom-software-development" },
  { label: t.nav_services_testing_qa, url: "/services/testing-qa" },
  { label: t.nav_services_mobile_development, url: "/services/mobile-app-development" },
  { label: t.nav_services_ux_ui_design, url: "/services/ux-ui-development" },
  { label: t.nav_services_it_consulting, url: "/services/it-consulting" },
  { label: t.nav_services_data_analytics, url: "/services/data-analytics" },
  { label: t.nav_services_cybersecurity, url: "/services/cybersecurity-services" },
];

const getProductsItems = (t) => [
  { label: t.nav_products_product1, url: "/products" },
  { label: t.nav_products_product2, url: "/products" },
];

const getNavLinks = (t) => [
  { link: t.nav_home, url: "/", dropdown: null },
  { link: t.nav_about, url: "/about", dropdown: null },
  { link: t.nav_services, url: "/service", dropdown: getServicesItems(t) },
  { link: t.nav_products, url: "/products", dropdown: null },
  { link: t.nav_our_work, url: "/works", dropdown: null },
];

const getMobileMenu = (t) => [
  { label: t.nav_home, url: "/", children: null },
  { label: t.nav_about, url: "/about", children: null },
  { label: t.nav_services, url: "/service", children: getServicesItems(t) },
  { label: t.nav_products, url: "/products", children: getProductsItems(t) },
  { label: t.nav_our_work, url: "/work", children: null },
  { label: t.nav_contact, url: "/contact", children: null },
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
                <span style={{ marginInlineStart: "auto", fontSize: 11, opacity: 0.5 }}>{lang.code}</span>
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
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const dir = isRTL ? "rtl" : "ltr";
  const MOBILE_MENU = getMobileMenu(t);

  // Slide in from the reading-direction "start" edge: left in LTR, right in RTL.
  const offscreenX = dir === "rtl" ? "100%" : "-100%";
  const sidebarVariants = {
    closed: { x: offscreenX, transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    open: { x: 0, transition: { type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  };
  const itemVariants = {
    closed: { opacity: 0, x: dir === "rtl" ? 20 : -20 },
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
                        }}><i className="bi bi-chevron-down"></i></span>
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
                {t.nav_contact} <i className={`bi bi-arrow-${dir === "rtl" ? "left" : "right"}`}></i>
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
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const dir = isRTL ? "rtl" : "ltr";
  const NAV_LINKS = getNavLinks(t);

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
                {t.nav_book_call} <i className={`bi bi-chevron-${dir === "rtl" ? "left" : "right"}`}></i>
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