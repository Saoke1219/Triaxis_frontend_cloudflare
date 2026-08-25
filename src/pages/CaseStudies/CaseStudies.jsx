import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { caseStudies } from "../../data/caseStudies";
import styles from "./CaseStudies.module.css";

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>

      {/* ===========================
          Hero
      =========================== */}

      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <span className={styles.eyebrow}>
            Case Studies
          </span>

          <h1>
            Strategy is only valuable
            <span> when it produces measurable results.</span>
          </h1>

          <p>
            Selected examples of how strategic HR, programme management
            and workforce interventions have translated into measurable
            organisational outcomes.
          </p>

        </div>
      </section>

      {/* ===========================
          Case Study Grid
      =========================== */}

      <section className={styles.caseGridSection}>

        <div className={styles.caseGrid}>

          {caseStudies.map((study, index) => (

            <motion.article
              key={study.slug}
              className={styles.caseCard}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* Image */}

              <div className={styles.cardImageWrapper}>

                <img
                  src={study.image}
                  alt=""
                  className={styles.cardImage}
                />

                <span className={styles.cardNumber}>
                  {study.number}
                </span>

              </div>

              {/* Content */}

              <div className={styles.cardContent}>

                <span className={styles.category}>
                  {study.category}
                </span>

                <h2>
                  {study.title}
                </h2>

                <p className={styles.cardIntro}>
                  {study.intro}
                </p>

                {/* Metrics */}

                <div className={styles.metrics}>

                  <div className={styles.metric}>

                    <strong>
                      {study.metricPrimary}
                    </strong>

                    <span>
                      {study.metricPrimaryLabel}
                    </span>

                  </div>

                  <div className={styles.metric}>

                    <strong>
                      {study.metricSecondary}
                    </strong>

                    <span>
                      {study.metricSecondaryLabel}
                    </span>

                  </div>

                </div>

                {/* Link */}

                <button
                  className={styles.exploreButton}
                  onClick={() =>
                    navigate(`/case-studies/${study.slug}`)
                  }
                >
                  Explore Case Study

                  <span>
                    →
                  </span>
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* ===========================
          CTA
      =========================== */}

      <section className={styles.ctaSection}>

        <span>
          Ready to build measurable results?
        </span>

        <h2>
          Let’s turn strategy into
          <em> intelligent execution.</em>
        </h2>

        <button
          onClick={() => navigate("/contact")}
        >
          Schedule a Consultation
        </button>

      </section>

    </main>
  );
};

export default CaseStudies;