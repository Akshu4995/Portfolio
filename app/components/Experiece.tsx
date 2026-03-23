"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Experience</h2>

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Frontend Developer</h3>
        <p style={styles.company}>Stark Digital Media Services</p>
        <p style={styles.date}>Nov 2022 – Dec 2024</p>

        <ul style={styles.list}>
          <li>Built scalable apps using React.js, Next.js, TypeScript</li>
          <li>Improved performance by 30% using optimization techniques</li>
          <li>Developed admin panels and integrated REST APIs</li>
          <li>Worked in Agile teams and delivered production features</li>
        </ul>
      </motion.div>
    </section>
  );
}const styles: { [key: string]: React.CSSProperties } = {
 container: {
  padding: "100px 20px",
  textAlign: "center",
},
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "left",
  },
  company: {
    color: "#00f0ff",
    marginTop: "5px",
  },
  date: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    color: "#ccc",
  },
};