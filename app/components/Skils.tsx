"use client";

import { motion } from "framer-motion";
import React, { Suspense } from "react";
import TechMarquee from "./TechMarquee"; // Make sure to create this file from the previous code!

export default function Skills() {
  const skills = [
    { name: "React.js", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Redux", color: "#764ABC" },
    { name: "Python", color: "#3776AB" },
    { name: "Socket.io", color: "#ffffff" },
    { name: "REST APIs", color: "#00f0ff" },
    { name: "FastAPI", color: "#05998B" },
  ];

  return (
    <section id="skills" style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.heading}>Skills & Technologies</h2>
        <p style={styles.subheading}>Interactive 3D Universe — Grab and Rotate</p>
      </motion.div>

      {/* --- The 3D Component --- */}
      <div style={styles.canvasWrapper}>
        <Suspense fallback={<div style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}>Loading...</div>}>
   
          <div style={{ width: "100%", height: "300px", position: "relative" }}>
            <TechMarquee />
          </div>
        </Suspense>
      </div>

      {/* --- The "Quick View" Grid (Responsive & Clean) --- */}
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.card,
              borderColor: `${skill.color}33`, // Subtle color match
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderColor: skill.color
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <span style={{ color: skill.color, marginRight: "8px" }}>●</span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "60px 20px", // Reduced from 100px
    textAlign: "center",
  },
  heading: {
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#fff",
  },
  subheading: {
    fontSize: "14px",
    color: "#888",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "40px",
  },
// In Skills.tsx styles
canvasWrapper: {
  width: "100%",
  height: "350px",
  position: "relative",
  // This creates a subtle "portal" effect behind the 3D ring
  background: "radial-gradient(circle at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%)",
  marginTop: "-50px", // Pull it closer to the heading
},
grid: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "12px",
  maxWidth: "900px",
  margin: "0 auto",
  marginTop: "-80px", // Pull the cards UP into the 3D space
  position: "relative",
  zIndex: 10,
},
  card: {
    padding: "12px 20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "15px",
    fontWeight: "500",
    color: "#eee",
    cursor: "default",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
  },
};