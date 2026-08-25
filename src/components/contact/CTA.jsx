import { motion } from "framer-motion";
import styles from "./CTA.module.css";

const CTA = () => {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.floatingCircle}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Ready to build
          <br />a stronger workplace?
        </h2>

        <button className={styles.primary} onClick={scrollToForm}>
          Schedule a Consultation
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;
