import styles from "./Statement.module.css";

const Statement = () => {
  return (
    <section className={styles.statement}>
      <img
        src="/team-1.jpg"
        alt=""
        className={`${styles.floatingImage} ${styles.top}`}
      />

      <img
        src="/team-2.jpg"
        alt=""
        className={`${styles.floatingImage} ${styles.left}`}
      />

      <img
        src="/team-3.jpg"
        alt=""
        className={`${styles.floatingImage} ${styles.right}`}
      />

      <img
        src="/team-4.jpg"
        alt=""
        className={`${styles.floatingImage} ${styles.bottom}`}
      />

      <div className={styles.content}>
        <h2>
        Data-Driven HR & AI Automation for Growing Enterprises.
            We build scalable workfoce systems,automate administrative overhead and align talent with
          <span> organizational strategy.</span>
        </h2>

        <p>
          With experience across HR strategy, people management,
          and organizational development, we support leaders
          in making better people decisions.
        </p>
      </div>
    </section>
  );
};

export default Statement;