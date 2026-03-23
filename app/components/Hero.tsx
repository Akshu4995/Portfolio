"use client";

import { color, motion } from "framer-motion";
import React from "react";
import ThreeScene from "./Threescene";
import { Color } from "three";

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
          React & Next Js | Python | Gen Ai Enthusiast
        </motion.h2>

        <motion.p
          style={descStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Software Developer skilled in React.js and Next.js, with <b>  2+years  </b>of experience, currently building AI-driven applications using Python and Generative AI.
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
  minHeight: "100vh",
  display: "flex",
  flexWrap: "wrap", // IMPORTANT
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  gap: "30px",
};
const leftStyle: React.CSSProperties = {
  flex: "1 1 300px,",
  maxWidth: "500px",
};

const rightStyle: React.CSSProperties = {
  flex: "1 1 300px",
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
  fontSize: "clamp(28px, 5vw, 48px)",
  fontWeight: "bold",
};

const subtitleStyle: React.CSSProperties = {
  // marginTop: "10px",
  fontSize: "clamp(16px, 3vw, 22px)",
  color: "#aaa",
};

const descStyle: React.CSSProperties = {
 fontSize: "clamp(14px, 2.5vw, 16px)",
 lineHeight: 1.6,
  color: "#888",
};