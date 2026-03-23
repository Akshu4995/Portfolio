"use client";

import { motion } from "framer-motion";

export default function WhatIBuild() {
  const items = [
    "Admin Dashboards",
    "Real-time Chat Systems (Socket.io)",
    "Role-based Applications",
    "API-driven Web Apps",
    "Scalable Frontend Architecture",
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>What I Build</h2>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
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
    gap: "20px",
  },
  card: {
    padding: "15px 25px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "16px",
  },
};