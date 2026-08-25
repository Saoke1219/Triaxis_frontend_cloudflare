import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Gem,
  Network,
  ChartNoAxesColumnIncreasing,
  Eye,
  ClipboardCheck,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../../data/caseStudies";

import styles from "./CaseStudyDetail.module.css";

const resultPresentation = [
  {
    title: "Improved goal alignment",
    icon: Gem,
  },
  {
    title: "Connected performance objectives",
    icon: Network,
  },
  {
    title: "Stronger accountability",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Greater performance visibility",
    icon: Eye,
  },
  {
    title: "Structured performance reviews",
    icon: ClipboardCheck,
  },
];

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const study = getCaseStudyBySlug(slug);

  /* ===========================
     Scroll to Top
  =========================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  /* ===========================
     Invalid Case Study
  =========================== */

  if (!study) {
    return (
      <main className={styles.notFound}>

        <span>
          Case Study Not Found
        </span>

        <h1>
          This case study could not be found.
        </h1>

        <button
          type="button"
          onClick={() => navigate("/case-studies")}
        >
          Return to Case Studies
        </button>

      </main>
    );
  }

  /* ===========================
     Related Case Studies
  =========================== */

  const relatedStudies = caseStudies.filter(
    (item) => item.slug !== study.slug
  );

  return (
    <main className={styles.page}>

      {/* ===========================
          Hero
      =========================== */}

      <section className={styles.hero}>

        <motion.div
          className={styles.heroInner}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate("/case-studies")}
          >
            ← All Case Studies
          </button>

          <div className={styles.heroMeta}>

            <span>
              {study.number}
            </span>

            <span>
              {study.category}
            </span>

          </div>

          <h1>
            {study.title}
          </h1>

          <p className={styles.heroIntro}>
            {study.intro}
          </p>

          {/* Metrics */}

          <div className={styles.heroMetrics}>

            <div>

              <strong>
                {study.metricPrimary}
              </strong>

              <span>
                {study.metricPrimaryLabel}
              </span>

            </div>

            <div>

              <strong>
                {study.metricSecondary}
              </strong>

              <span>
                {study.metricSecondaryLabel}
              </span>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ===========================
          Main Image
      =========================== */}

      <section className={styles.imageSection}>

        <motion.div
          className={styles.imageWrapper}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <img
            src={study.image}
            alt={study.shortTitle || study.title}
            className={styles.heroImage}
          />

        </motion.div>

      </section>

      {/* ===========================
          Overview
      =========================== */}

      <section className={styles.overviewSection}>

        <div className={styles.overviewMeta}>

          <span>
            Client Context
          </span>

          <p>
            {study.client}
          </p>

        </div>

        <div className={styles.overviewContent}>

          <span className={styles.sectionNumber}>
            01
          </span>

          <h2>
            The Context
          </h2>

          <p>
            {study.context}
          </p>

        </div>

      </section>

      {/* ===========================
          Challenge
      =========================== */}

      <section className={styles.storySection}>

        <div className={styles.storyLabel}>

          <span>
            02
          </span>

          <p>
            The Challenge
          </p>

        </div>

        <div className={styles.storyContent}>

          <h2>
            Understanding the problem before designing the solution.
          </h2>

          <p>
            {study.challenge}
          </p>

        </div>

      </section>

      {/* ===========================
          Intervention
      =========================== */}

      <section
        className={`${styles.storySection} ${styles.altSection}`}
      >

        <div className={styles.storyLabel}>

          <span>
            03
          </span>

          <p>
            The Intervention
          </p>

        </div>

        <div className={styles.storyContent}>

          <h2>
            Turning insight into structured action.
          </h2>

          <p>
            {study.approach}
          </p>

        </div>

      </section>

      {/* ===========================
          Results
      =========================== */}

      <section className={styles.resultsSection}>

        <div className={styles.resultsInner}>

          <div className={styles.resultsHeader}>

            <span>
              04 — The Results
            </span>

            <h2>
              Measurable organisational impact.
            </h2>

            <p>
              The intervention created clearer connections between
              organisational strategy, departmental priorities and
              individual performance.
            </p>

          </div>

          <div className={styles.resultsGrid}>

            {study.results.map((result, index) => {
              const presentation =
                resultPresentation[index] ||
                resultPresentation[
                  index % resultPresentation.length
                ];

              const Icon = presentation.icon;

              return (
                <motion.article
                  key={result}
                  className={styles.resultItem}
                  initial={{
                    opacity: 0,
                    y: 24,
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >

                  <div className={styles.resultIcon}>

                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />

                  </div>

                  <h3>
                    {presentation.title}
                  </h3>

                  <p>
                    {result}
                  </p>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===========================
          Impact
      =========================== */}

      <section className={styles.impactSection}>

        <span>
          05 — The Impact
        </span>

        <blockquote>
          {study.impact}
        </blockquote>

      </section>

      {/* ===========================
          Automation
      =========================== */}

      <section className={styles.automationOuter}>

        <div className={styles.automationSection}>

          <div className={styles.automationTop}>

            <span>
              AI + Workflow Automation
            </span>

            <h2>
              {study.automationTitle}
            </h2>

            <p className={styles.automationIntro}>
              {study.automationIntro}
            </p>

          </div>

          <div className={styles.automationDescription}>

            <p>
              {study.automationText}
            </p>

          </div>

          {/* Workflow */}

          <div className={styles.automationFlow}>

            {study.automationSteps.map(
              (step, index) => (
                <motion.article
                  key={step.title}
                  className={styles.flowCard}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >

                  <span className={styles.flowNumber}>
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                  {index <
                    study.automationSteps.length - 1 && (
                    <span
                      className={styles.arrow}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}

                </motion.article>
              )
            )}

          </div>

          {/* Transformation */}

          <div className={styles.transformation}>

            <span>
              The TriAxis Approach
            </span>

            <div className={styles.transformationFlow}>

              <strong>
                Strategy
              </strong>

              <span aria-hidden="true">
                →
              </span>

              <strong>
                Automation
              </strong>

              <span aria-hidden="true">
                →
              </span>

              <strong>
                Real-Time Intelligence
              </strong>

              <span aria-hidden="true">
                →
              </span>

              <strong>
                Measurable Execution
              </strong>

            </div>

          </div>

        </div>

      </section>

      {/* ===========================
          Related Case Studies
      =========================== */}

      <section className={styles.relatedSection}>

        <div className={styles.relatedHeader}>

          <span>
            Continue Exploring
          </span>

          <h2>
            More measurable outcomes.
          </h2>

        </div>

        <div className={styles.relatedGrid}>

          {relatedStudies.map((item) => (
            <article
              key={item.slug}
              className={styles.relatedCard}
              role="link"
              tabIndex={0}
              onClick={() =>
                navigate(`/case-studies/${item.slug}`)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();

                  navigate(
                    `/case-studies/${item.slug}`
                  );
                }
              }}
            >

              <span>
                {item.category}
              </span>

              <h3>
                {item.title}
              </h3>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();

                  navigate(
                    `/case-studies/${item.slug}`
                  );
                }}
              >
                Read Case Study →
              </button>

            </article>
          ))}

        </div>

      </section>

      {/* ===========================
          CTA
      =========================== */}

      <section className={styles.cta}>

        <span>
          Facing a similar challenge?
        </span>

        <h2>
          Let’s build the systems that turn
          strategy into measurable results.
        </h2>

        <button
          type="button"
          onClick={() => navigate("/contact")}
        >
          Schedule a Consultation
        </button>

      </section>

    </main>
  );
};

export default CaseStudyDetail;