import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

const rotatingServices = [
  "HR Strategy",
  "Leadership Development",
  "People Analytics",
  "Performance Management",
  "Organisation Design",
  "Learning & Development",
  "Culture Transformation",
];

const splitLetters = (text) =>
  text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    return span;
  });

const Hero = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);

  useEffect(() => {
    const container = textRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.25,
      });

      rotatingServices.forEach((service) => {
        tl.add(() => {
          container.innerHTML = "";

          const letters = splitLetters(service);

          letters.forEach((letter) => container.appendChild(letter));

          gsap.set(letters, {
            opacity: 0,
            y: 12,
          });

          gsap.to(letters, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            stagger: {
              each: 0.03,
              from: "random",
            },
          });

          gsap.to(letters, {
            opacity: 0,
            y: -12,
            delay: 2.2,
            duration: 0.3,
            stagger: {
              each: 0.02,
              from: "random",
            },
          });
        });

        tl.to({}, { duration: 2.8 });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle2}></div>

        <div className={styles.content}>
          <span className={styles.tag}>OUR SERVICES</span>

          <h1>
            Building workplaces where
            <br />
            people, leadership and
            <br />
            performance thrive.
          </h1>

          <p>
          We partner with organisations to build future-ready workforces through 
          strategic HR advisory, leadership development, people analytics and 
          organisational transformation,backed by over 8 years of experience delivering 
          strategic HR solutions, leading donor-funded programmes and building the 
          capacity of more than 1,500 professionals.
          </p>

          <div className={styles.scrambleContainer}>
            <span className={styles.label}>Expertise</span>

            <h2
              ref={textRef}
              className={styles.scramble}
            ></h2>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.primary}
              onClick={() => navigate("/contact")}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className={styles.wheel}></div>
      </div>
    </section>
  );
};

export default Hero;