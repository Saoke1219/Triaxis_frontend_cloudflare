import styles from "./FounderLetter.module.css";

const FounderLetter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <span className={styles.tag}>From the Founder</span>

        <div className={styles.line}></div>

        <h2>
          Helping organizations
          grow through people,
          purpose and strategy.
        </h2>

        <div className={styles.line}></div>

        <p>
          For more than eight years I've worked at the intersection of
          people strategy, organisational performance and transformational
          change.
        </p>

        <p>
          From supporting national infrastructure programmes to leading
          performance management frameworks and talent development
          initiatives, one belief has remained constant:
          <strong> organizations thrive when their people do.</strong>
        </p>

        <p>
          Today, TriAxis Consulting exists to help organizations build
          stronger leadership, healthier cultures and future-ready
          workforces.
        </p>

        <div className={styles.signature}>
          <h3>Sylvia Kiprop</h3>
          <span>Founder, TriAxis Consulting</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img
            src="/founder.jpg"
            alt="Founder"
            className={styles.image}
          />

<button
  className={styles.storyBtn}
  onClick={() =>
    document.getElementById("the-journey")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
>
  Read My Story →
</button>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;