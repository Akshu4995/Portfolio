"use client";

import { motion } from "framer-motion";
import React from "react";
import ThreeScene from "./Threescene";

export default function Hero() {
  // Array for typewriter effect if you want to expand later
  const professions = "React & Next Js | Python | Gen Ai Enthusiast";

  return (
    <section style={containerStyle}>
      <div style={leftStyle}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span style={highlightStyle}>Akshay</span> 👋
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <h2 style={subtitleStyle}>{professions}</h2>
          {/* Terminal Cursor Animation */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            style={cursorStyle}
          >
            _
          </motion.span>
        </motion.div>

        <motion.p
          style={descStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Software Developer skilled in <b>React.js and Next.js</b>, with{" "}
          <b style={{ color: "#00f0ff" }}>2+ years</b> of experience, currently
          building AI-driven applications using Python and Generative AI.
        </motion.p>
        
        {/* New Call to Action Visual Hint */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
           style={{ marginTop: '30px', fontSize: '12px', color: '#555', letterSpacing: '2px' }}
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>

      <div style={rightStyle}>
        {/* The updated ThreeScene will now handle its own internal scaling */}
        <ThreeScene />
      </div>

      {/* Background Glow */}
      <div style={blobStyle}></div>
    </section>
  );
}

// --- Styles ---

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap-reverse", // Ensures text stays readable on mobile below the 3D object
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  gap: "20px",
  position: "relative",
  overflow: "hidden",
};

const leftStyle: React.CSSProperties = {
  flex: "1 1 400px",
  maxWidth: "600px",
  zIndex: 10,
};

const rightStyle: React.CSSProperties = {
  flex: "1 1 400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "40vh", // Ensures space for 3D on mobile
};

const highlightStyle: React.CSSProperties = {
  color: "#00f0ff",
  textShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
};

const cursorStyle: React.CSSProperties = {
  fontSize: "24px",
  color: "#00f0ff",
  fontWeight: "bold",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(32px, 8vw, 64px)", // Bigger and more dynamic
  fontWeight: "800",
  lineHeight: 1.1,
  marginBottom: "10px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "clamp(16px, 3vw, 20px)",
  color: "#00f0ffaa",
  fontFamily: "monospace", // Coding vibe
};

const descStyle: React.CSSProperties = {
  marginTop: "20px",
  fontSize: "clamp(15px, 2vw, 18px)",
  lineHeight: 1.8,
  color: "#aaa",
  maxWidth: "500px",
};

const blobStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05), transparent 70%)",
  top: "0",
  left: "0",
  zIndex: -1,
};