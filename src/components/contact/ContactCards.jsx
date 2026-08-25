import { motion } from "framer-motion";
import styles from "./ContactCards.module.css";

const cards = [
  {
    label: "Email",
    value: "info@triaxisconsulting.com",
    href: "mailto:info@triaxisconsulting.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Office",
    value: "Nairobi, Kenya",
    href: "https://maps.google.com/?q=Nairobi,Kenya",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M12 21s7-6.1 7-11.3A7 7 0 105 9.7C5 14.9 12 21 12 21z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.4" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Follow our latest insights",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="7.5" y1="10.5" x2="7.5" y2="16" strokeLinecap="round" />
        <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
        <path
          d="M11.2 16v-3.2c0-1.3.9-2.3 2.1-2.3s2 1 2 2.3V16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ContactCards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <motion.a
            key={card.label}
            href={card.href}
            target={card.label === "LinkedIn" || card.label === "Office" ? "_blank" : undefined}
            rel="noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <span className={styles.icon}>{card.icon}</span>
            <span className={styles.label}>{card.label}</span>
            <span className={styles.value}>{card.value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
