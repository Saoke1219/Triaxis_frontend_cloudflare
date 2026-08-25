import styles from "./Process.module.css";

const stepsData = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Understand your challenges and priorities.",
    image: "/discovery-call.jpg" // Add your image paths here
  },
  {
    number: "02",
    title: "System Audit & Automation Roadmap",
    description: "We map your bottlenecks and deliver a tailored framework with clear ROI metrics",
    image: "/assessment-proposal.png"
  },
  {
    number: "03",
    title: "Review & Ongoing Support",
    description: "Adjust, improve, and scale as needed.",
    image: "/ongoing-support.jpg"
  }
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className={styles.header}>
        <h2>
          How we work <span>together</span>
        </h2>
        <p>
          A simple, thoughtful process built on trust, clarity, and collaboration — ensuring you receive the right people advice at every stage of your journey.
        </p>
      </div>

      <div className={styles.stepsGrid}>
        {stepsData.map((step) => (
          <div className={styles.stepCard} key={step.number}>
            {/* The hidden background image container */}
            <div 
              className={styles.cardBg} 
              style={{ backgroundImage: `url(${step.image})` }}
            />
            
            {/* Foreground Content */}
            <div className={styles.cardContent}>
              <span className={styles.number}>{step.number}</span>
              <div className={styles.textGroup}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;