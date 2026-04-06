"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// --- 3D Tilt Card Component ---
// This handles the magnetic hover effect
function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Calculate tilt (adjust the divisor to make it more/less sensitive)
    const tiltX = ((y - centerY) / centerY) * -10; 
    const tiltY = ((x - centerX) / centerX) * 10;
    
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={styles.card}
      >
        {/* Subtle hover glare effect */}
        <div style={styles.cardGlare} />
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Convert scroll progress (0 to 1) into a height percentage (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Stark Digital Media Services",
      date: "Nov 2022 – Dec 2024",
      points: [
        "Built scalable apps using React.js, Next.js, TypeScript",
        "Improved performance by 30% using optimization techniques",
        "Developed admin panels and integrated REST APIs",
        "Worked in Agile teams and delivered production features",
      ],
    },
  ];

  return (
    <section id="experience" style={styles.container} ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={styles.heading}
      >
        Experience
      </motion.h2>

      <div style={styles.timelineWrapper}>
        {/* 1. The Faded Background Line */}
        <div style={styles.verticalLineBackground} />
        
        {/* 2. The Animated "Fill" Line based on Scroll */}
        <motion.div 
          style={{ ...styles.verticalLineFill, height: lineHeight }} 
        />

        {experiences.map((exp, index) => (
          <div key={index} style={styles.timelineItem}>
            {/* The Pulsing Node */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              style={styles.circleNode} 
            />

            {/* The 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltCard>
                <h3 style={styles.role}>{exp.role}</h3>
                <p style={styles.company}>{exp.company}</p>
                <p style={styles.date}>{exp.date}</p>

                <ul style={styles.list}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={styles.listItem}>{point}</li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "clamp(32px, 5vw, 48px)",
    marginBottom: "60px",
    fontWeight: "800",
    color: "#fff",
  },
  timelineWrapper: {
    position: "relative",
    paddingLeft: "40px",
    textAlign: "left",
  },
  verticalLineBackground: {
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    width: "2px",
    background: "rgba(255, 255, 255, 0.1)", // Faded track
  },
  verticalLineFill: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "2px",
    background: "linear-gradient(to bottom, #00f0ff, #7000ff)",
    boxShadow: "0 0 15px rgba(0, 240, 255, 0.6)", // Glowing scroll line
    zIndex: 1,
  },
  timelineItem: {
    position: "relative",
    marginBottom: "60px",
  },
  circleNode: {
    position: "absolute",
    left: "-45px", // Adjust to center on the line
    top: "20px",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#00f0ff",
    border: "3px solid #0a0a0a",
    boxShadow: "0 0 15px #00f0ff",
    zIndex: 2,
  },
  card: {
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    position: "relative",
    overflow: "hidden", // Keeps the glare inside
    cursor: "crosshair", // Cool developer cursor
  },
  cardGlare: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
    opacity: 0,
    transition: "opacity 0.3s",
    pointerEvents: "none",
  },
  role: {
    fontSize: "22px",
    margin: "0",
    color: "#fff",
    transform: "translateZ(30px)", // Pops text off the card in 3D
  },
  company: {
    color: "#00f0ff",
    fontSize: "16px",
    fontWeight: "600",
    margin: "8px 0",
    transform: "translateZ(20px)",
  },
  date: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "20px",
    letterSpacing: "1px",
    transform: "translateZ(10px)",
  },
  list: {
    paddingLeft: "20px",
    color: "#ccc",
    lineHeight: "1.7",
    transform: "translateZ(15px)",
  },
  listItem: {
    marginBottom: "10px",
  }
};