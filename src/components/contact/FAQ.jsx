import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "How soon do you respond to enquiries?",
    a: "We respond to every enquiry within one business day, and often much sooner. Once we hear from you, we'll schedule an initial consultation to understand your goals.",
  },
  {
    q: "Do you work with organisations outside Kenya?",
    a: "Yes. While we're based in Nairobi, we work with organisations across the region and internationally, both remotely and on-site depending on the engagement.",
  },
  {
    q: "Can engagements be conducted remotely?",
    a: "Absolutely. Most of our advisory and coaching engagements can be delivered remotely, with on-site visits arranged where they add the most value.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "You'll receive a confirmation, and a member of our team will reach out to schedule a short discovery call to learn more about your needs before proposing next steps.",
  },
  {
    q: "Is there a minimum engagement size?",
    a: "Not necessarily. We scope engagements to fit the challenge at hand, from focused advisory projects to long-term retained partnerships.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>FAQ</span>
        <h2>Questions, answered.</h2>
      </div>

      <div className={styles.list}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.q} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                {item.q}
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className={styles.answerWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className={styles.answer}>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
