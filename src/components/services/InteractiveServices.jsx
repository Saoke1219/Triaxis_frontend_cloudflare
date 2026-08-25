import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InteractiveServices.module.css";
import { useNavigate } from "react-router-dom";



const services = [
  {
    title: "Operational Efficiency & Data-Driven Design",
  
    heading:
      "Turn strategy into scalable systems that drive smarter, more efficient organisations.",
  
    text:
      "We go beyond designing strategy — we build the technological infrastructure to execute it. By combining strategic HR advisory, organisation design and workforce planning with predictive analytics, intelligent dashboards and automated workflows, we turn organisational strategy into practical, scalable systems that work in real time. From workforce forecasting and governance to compliance monitoring and decision intelligence, we create connected digital infrastructure that reduces administrative complexity, strengthens accountability and gives leaders the insights and systems they need to execute with precision.",
  
    image: "/digital_papers.png",
  
    bullets: [
      "HR Strategy & Organisation Design",
      "Predictive People Analytics & Dashboards",
      "Workforce Planning & Forecasting",
      "Automated Compliance & Risk Management Pipelines",
      "Compensation & Job Evaluation",
      "Digital Workflow & Process Automation",
    ],
  },
  
  {
    title: "Leadership Advisory & Programme Management",
  
    heading:
      "Deliver complex programmes at scale with real-time visibility, automated compliance and measurable accountability.",
  
    text:
      "We support organisations delivering large-scale vocational, institutional and donor-funded programmes by combining strategic leadership advisory with technology-enabled programme management. Our approach creates a connected digital operating system for programme delivery — strengthening stakeholder coordination, automating compliance workflows, monitoring implementation in real time and generating accurate, audit-ready reports. This enables leaders and programme teams to manage complex portfolios with greater transparency, accountability and pinpoint digital accuracy.",
  
    image: "/brainstorming.png",
  
    bullets: [
      "Leadership & Executive Advisory",
      "Scalable Programme Design & Delivery",
      "Automated Stakeholder & Donor Engagement",
      "Real-Time Programme Monitoring",
      "Automated Donor & Performance Reporting",
      "Compliance Automation & Audit-Ready Data",
    ],
  },
  
  {
    title: "Talent Development & Capacity Building",
  
    heading:
      "Develop capable people, strengthen institutions and build high-performing organisations.",
  
      text:
      "We transform performance management from an administrative burden into an intelligent, connected system. By automatically translating corporate goals into aligned team and individual KPIs, we give leaders real-time visibility into performance while reducing manual tracking, follow-ups and reporting for managers. Combined with succession planning, leadership development and institutional capacity building, our approach creates a measurable link between individual contribution, workforce capability and organisational performance.",
  
    image: "/office_tour.png",
  
    bullets: [
      "AI-Driven Performance Systems & Balanced ",
      "Automated & Bias-Fre Talent Acquisition Pipelines",
      "Learning & Development Strategy",
      "Institutional Capacity Strengthening",
      "Training Needs Assessment & ROI Evaluation",
      "Change Management & Employee Engagement",
    ],
  },
  ];

export default function InteractiveServices() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>Capabilities</span>

        <h2>Solutions tailored to every stage of your organisation.</h2>
      </div>

      {/* Tabs */}

      <div className={styles.tabs}>
        {services.map((service, index) => (
          <button
            key={service.title}
            onClick={() => setActive(index)}
            className={`${styles.tab} ${
              active === index ? styles.active : ""
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content */}

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.text}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: .45 }}
          >
            <h3>{services[active].heading}</h3>

            <p>{services[active].text}</p>

<ul>
  {services[active].bullets.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>

<button
  className={styles.cta}
  onClick={() => navigate("/contact")}
>
  Schedule Consultation
</button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-img`}
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: .5 }}
          >
            <img
              src={services[active].image}
              alt={services[active].title}
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}