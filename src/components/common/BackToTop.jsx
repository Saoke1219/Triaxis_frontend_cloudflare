import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${styles.backToTop} ${show ? styles.show : styles.hide}`}
      aria-label="Back to Top"
    >
      <span className={styles.text}>BACK TO TOP</span>

      <span className={styles.line}></span>
    </button>
  );
};

export default BackToTop;