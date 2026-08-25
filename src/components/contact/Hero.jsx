import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const container = contentRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(`.${styles.tag}`, {
        opacity: 0,
        y: 10,
        duration: 0.5,
      })
        .from(
          `.${styles.headingLine}`,
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(
          `.${styles.content} p`,
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          `.${styles.trustRow}`,
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          `.${styles.actions} button`,
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle2}></div>

        <div className={styles.content} ref={contentRef}>
          <span className={styles.tag}>GET IN TOUCH</span>

          <h1>
  <span className={styles.headingLine}>Let's build</span>{" "}
  <span className={styles.headingLine}>something better</span>{" "}
  <span className={styles.headingLine}>together.</span>
</h1>

          <p>
            Whether you're redesigning your HR function, developing
            leaders or strengthening organisational performance, we'd
            love to hear about your goals.
          </p>

          <div className={styles.trustRow}>
            <span className={styles.trustDot}></span>
            We respond to every enquiry within one business day.
          </div>

          <div className={styles.actions}>
            <button className={styles.primary} onClick={scrollToForm}>
              Schedule Consultation
            </button>

            <a href="tel:+254700000000" className={styles.secondary}>
              Call Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
