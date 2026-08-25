import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topSection}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
            <img
              src="/logo1.png"
              alt="TriAxis Consulting Logo"
              className={styles.logoIcon}
            />
          </div>

          <p className={styles.brandDesc}>
            Supporting leaders with thoughtful,
            <br />
            people-centered HR solutions.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className={styles.linksGrid}>
          <div className={styles.linkCol}>
            <h4>Quick Menu</h4>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className={styles.linkCol}>
            <h4>Resources</h4>

            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/contact">Get in Touch</NavLink>
          </div>

          <div className={styles.linkCol}>
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.legalLinks}>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/cookies">Cookie Policy</NavLink>
        </div>

        <p className={styles.copyright}>
          &copy; 2026 TriAxis Consulting. All rights reserved.
        </p>
      </div>

      {/* Background Watermark */}
      <div className={styles.watermarkText}>
        TriAxis
      </div>
    </footer>
  );
};

export default Footer;