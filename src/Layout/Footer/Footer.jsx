import React from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../Context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Footer() {
  const t = useTranslation();

  const companyLinks = [
    t.footer_link_home,
    t.footer_link_about,
    t.footer_link_career,
    t.footer_link_contact,
  ];

  const serviceLinks = [
    t.footer_service_software_development,
    t.footer_service_testing_qa,
    t.footer_service_application_services,
    t.footer_service_ai_consulting,
    t.footer_service_ui_ux_design,
    t.footer_service_data_analytics,
    t.footer_service_cybersecurity,
  ];

  return (
    <footer className="footer-asz" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="row g-4">
            {/* Brand Column */}
            <motion.div
              className="col-lg-4 col-sm-6"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <img src='/images/asz-logo2.png' />
              </div>
              <p className="footer-desc">
                {t.footer_description}
              </p>
              <div className="footer-socials">
                {/* <Link to="/" aria-label="Facebook"><i className="bi bi-facebook"></i></Link> */}
                <Link to="/" aria-label="Twitter"><i className="bi bi-twitter-x"></i></Link>
                <Link to="/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></Link>
                <Link to="/" aria-label="Instagram"><i className="bi bi-instagram"></i></Link>
              </div>
            </motion.div>

            <motion.div
              className='col-lg-5 col-sm-12 order-lg-1 order-sm-2'
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className='row'>
                {/* Company Links */}
                <motion.div
                  className="col-lg-5"
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h5 className="footer-heading">{t.footer_company_heading}</h5>
                  <ul className="footer-links">
                    {companyLinks.map(link => (
                      <li key={link}><a href="#!">{link}</a></li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services Links */}
                <motion.div
                  className="col-lg-7"
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h5 className="footer-heading">{t.footer_services_heading}</h5>
                  <ul className="footer-links">
                    {serviceLinks.map(link => (
                      <li key={link}><a href="#!">{link}</a></li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>



            {/* Contact */}
            <motion.div
              className="col-lg-3 col-sm-6 order-lg-2 order-sm-1"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h5 className="footer-heading">{t.footer_contact_heading}</h5>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>{t.footer_head_office_label}<br />{t.footer_head_office_address}</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>{t.footer_call_us_label}<br />+91 9876543210</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>{t.footer_email_us_label} <br />connect@asztechnologies.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>{t.footer_copyright}</p>
          <div className="footer-bottom-links">
            <a href="#!">{t.footer_terms}</a>
            <a href="#!">{t.footer_privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}