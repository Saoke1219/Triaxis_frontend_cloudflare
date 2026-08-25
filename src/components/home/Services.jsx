import { useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "HR Strategy & Organization Redesign",
    description:
      "Designing scalable structures, compliance frameworks, and job evaluations tailored for growth."
  },
  {
    title: "People Analytics & AI Automations",
    description:
      "Streamlining recruitment,onboarding, and internal workflows using custom AI and n8n Pipelines to eliminate manual overhead"
  },
  {
    title: "Performance Management & Scorecards",
    description:
      "Implementing balanced scorecards and realtime tracking systems that align individual goals with corporate targets."
  }
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.servicesContainer}>
      <div className={styles.leftSide}>
        <img
          src="/hr_dashboard.png"
          alt="Team meeting"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.rightSide}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            Our <span>services</span>
          </h2>

          <p className={styles.subtitle}>
            With experience across HR strategy, people management and
            organizational development.
          </p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.serviceItem} ${
                active === index ? styles.activeItem : ""
              }`}
              onMouseEnter={() => setActive(index)}
            >
              <div className={styles.iconCircle}>
                →
              </div>

              <div className={styles.itemText}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;