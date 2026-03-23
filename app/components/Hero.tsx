"use client";

import { motion } from "framer-motion";
import React from "react";
import ThreeScene from "./Threescene";

export default function Hero() {
  return (
    <section style={containerStyle}>
      <div style={leftStyle}>

        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Akshay 👋
        </motion.h1>

        <motion.h2
          style={subtitleStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
           React & Next Js | Python | Real-time Apps 
        </motion.h2>

        <motion.p
          style={descStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build scalable web applications using React, Next.js, and TypeScript
          with real-world features like admin dashboards and chat systems.
        </motion.p>
      </div>
      <div
        style={rightStyle}
      >
        <ThreeScene />
      </div>
      <div style={blobStyle}></div>
    </section>
  );

}


const containerStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  position: "relative",
};
const leftStyle: React.CSSProperties = {
  flex: 1,
};

const rightStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const blobStyle: React.CSSProperties = {
  position: "absolute",
  width: "800px",
  height: "450px",
  background: "radial-gradient(circle, #00f0ff33, transparent)",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  filter: "blur(100px)",
  zIndex: -1,
  animation: "float 6s ease-in-out infinite",
};
const titleStyle: React.CSSProperties = {
  fontSize: "48px",
  fontWeight: "bold",
};

const subtitleStyle: React.CSSProperties = {
  marginTop: "10px",
  fontSize: "22px",
  color: "#aaa",
};

const descStyle: React.CSSProperties = {
  marginTop: "20px",
  maxWidth: "500px",
  color: "#888",
};