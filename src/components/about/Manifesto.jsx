import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Manifesto.module.css";

const principles = [
  "People before process.",
  "Data informs better decisions.",
  "Culture drives performance.",
  "Leadership can be developed.",
  "Transformation is collaborative.",
  "Every strategy should create measurable impact."
];

const Manifesto = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const container = textRef.current;

    const splitLetters = (text) =>
      text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = 0;
        span.style.display = "inline-block";
        return span;
      });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.3,
    });

    principles.forEach((line) => {
      tl.add(() => {
        container.innerHTML = "";

        const letters = splitLetters(line);

        letters.forEach((letter) =>
          container.appendChild(letter)
        );

        gsap.to(letters, {
          opacity: 1,
          stagger: {
            each: 0.04,
            from: "random",
          },
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(letters, {
          opacity: 0,
          stagger: {
            each: 0.02,
            from: "random",
          },
          duration: 0.3,
          delay: 2.5,
        });
      });

      tl.to({}, { duration: 3 });
    });

    return () => tl.kill();
  }, []);

  return (
    <section className={styles.section}>

      <span className={styles.tag}>
        Our Manifesto
      </span>

      <h2>
        The principles that guide every
        partnership.
      </h2>

      <div className={styles.scrambleContainer}>
        <h3
          ref={textRef}
          className={styles.scramble}
        ></h3>
      </div>

    </section>
  );
};

export default Manifesto;