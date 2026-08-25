import styles from "./Timeline.module.css";

const timeline = [
  {
    year: "2016",
    role: "Spearheading HR Data Systems & Digital Transformation",
    company: "Kenya National Highways Authority",
    title: "Building Strong Foundations",
    text: "Laid a strong HR foundation by improving HR data systems, supporting regulatory compliance, coordinating onboarding programmes and contributing to digital transformation initiatives that strengthened organisational efficiency."
  },

  {
    year: "2019",
    role: "Driving Workforce Compliance & Performance Initiatives",
    company: "Kenya National Highways Authority",
    title: "Developing People & Performance",
    text: "Led recruitment, learning and development, employee engagement and workforce planning initiatives, helping improve organisational performance while ensuring full compliance with labour regulations."
  },

  {
    year: "2022",
    role: "Leading Multi-Million Dollar Donor-Funded Programs (World Bank & AfDB)",
    company: "Kenya National Highways Authority",
    title: "Leading Strategic Transformation",
    text: "Managed organisation-wide performance initiatives, compensation reviews and HR analytics while delivering World Bank and AfDB-funded capacity-building programmes that equipped over 1,500 community members with employable skills."
  },

  {
    year: "2025",
    role: "Directing Enterprise Performance & Succession strategy",
    company: "Central Bank of Kenya",
    title: "Driving Enterprise Performance",
    text: "Leading performance management, succession planning and capability development by partnering with leadership teams to strengthen organisational performance, develop future leaders and build high-performing teams."
  },

  {
    year: "Today",
    role: "Founder",
    company: "TriAxis Consulting",
    title: "Helping Organisations Thrive",
    text: "Bringing together years of public sector leadership, people analytics and organisational transformation experience to help businesses build stronger cultures, develop leaders and unlock workforce potential."
  }
];

const Timeline = () => {
  return (
    <section id="the-journey" className={styles.section}>

      <h2>The Journey</h2>

      <div className={styles.line}></div>

      {timeline.map((item, index) => (
        <div
          key={item.year}
          className={`${styles.item} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <div className={styles.circle}></div>

          <div className={styles.content}>
            <span className={styles.year}>{item.year}</span>

            <h3>{item.title}</h3>

            <h4>{item.role}</h4>

            <span className={styles.company}>
              {item.company}
            </span>

            <p>{item.text}</p>
          </div>

        </div>
      ))}

    </section>
  );
};

export default Timeline;