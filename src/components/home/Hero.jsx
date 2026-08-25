import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          
          <span className={styles.eyebrow}>
            STRATEGY • INSIGHT • PERFORMANCE
          </span>

          <h1>
            Build Stronger Organisations. 
            Unlock Better Performance.
          </h1>

          <p>
            We help organisations strengthen their workforce, improve
            performance and build the systems they need for sustainable growth.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.primary}
              onClick={() => navigate("/contact")}
            >
              Schedule a Consultation
            </button>

            <button
              className={styles.secondary}
              onClick={() => navigate("/services")}
            >
              Explore Our Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;