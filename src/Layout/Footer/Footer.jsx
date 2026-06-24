import React from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Footer() {
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
                ASZ Technologies is one of Asia’s leading innovative IT Solution Providers offering comprehensive and focused solutions in Cloud, Security, Media and Mobile.
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
                  <h5 className="footer-heading">Company</h5>
                  <ul className="footer-links">
                    {['Home', 'About Us', 'Career', 'Contact'].map(link => (
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
                  <h5 className="footer-heading">Our Services</h5>
                  <ul className="footer-links">
                    {['Software Development', 'Testing & QA', 'Application Services', 'AI Consulting', 'UI/UX Design', 'Data Analytics', 'Cybersecurity Services'].map(link => (
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
              <h5 className="footer-heading">Contact Info</h5>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Head Office<br />No.106, 4th floor, 10th cross, <br />Ganganagar, Bangalore-32, India</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>Call Us<br />+91 9876543210</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>Email Us <br />connect@asztechnologies.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 - ASZ Technologies</p>
          <div className="footer-bottom-links">
            <a href="#!">Terms & Conditions</a>
            <a href="#!">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}