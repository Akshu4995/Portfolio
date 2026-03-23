"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "Socket.io",
    "REST APIs",
  ];

  return (
    <section id="skills" style={styles.container}>
      <h2 style={styles.heading}>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
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
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  card: {
    padding: "10px 18px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "14px",
  },
};