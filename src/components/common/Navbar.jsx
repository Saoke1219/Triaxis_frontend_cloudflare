import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isHome ? styles.homeNavbar : styles.pageNavbar
        }`}
      >
        <NavLink to="/" className={styles.logo}>
  <img src="/logo1.png" alt="TriAxis Consulting Logo" />
</NavLink>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Case Studies
            </NavLink>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <NavLink to="/contact">
          <button className={styles.contactBtn}>
            Contact Us
          </button>
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={30} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;