import styles from "./ConsultationCTA.module.css";

const ConsultationCTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2>
          Ready to move forward with <br />
          <span>clarity and confidence?</span>
        </h2>

        <button className={styles.ctaButton}>
          Schedule a Consultation
        </button>

        <div className={styles.trustSignal}>
          <span className={styles.quoteOpen}>“</span>

          <p>
            Trusted by leaders in regulated, high-growth, and donor-funded
            sectors.
          </p>

          <span className={styles.quoteClose}>”</span>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;