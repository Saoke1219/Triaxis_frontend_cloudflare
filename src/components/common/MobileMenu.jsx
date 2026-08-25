import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`${styles.overlay} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button
        className={styles.closeBtn}
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      <nav className={styles.menu}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/case-studies" onClick={closeMenu}>
        Case Studies
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={styles.contactBtn}
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;