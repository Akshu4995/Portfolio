"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function Projects() {


  const [index, setIndex] = useState(0);
  const cardWidth = 300;
  const visibleWidth = 900; // 3 cards

  const visibleCount = 3;

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projects = [
    {
      title: "Trabajitos",
      desc: "Job portal with Admin Panel & Real-time Chat (Socket.io)",
      tech: "Next.js, Node.js",
      features: ["Admin Panel", "Real-time Chat", "Multi-role"],
      github: "#",
      live: "#",
    },
    {
      title: "Employee Portal",
      desc: "Admin dashboard with HR management system",
      tech: "React.js, Redux",
      features: ["Admin Dashboard", "Role-based Access"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Management System",
      desc: "Task tracking with analytics dashboard",
      tech: "React.js, MUI",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Management System",
      desc: "Task tracking with analytics dashboard",
      tech: "React.js, MUI",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Management System",
      desc: "Task tracking with analytics dashboard",
      tech: "React.js, MUI",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Management System",
      desc: "Task tracking with analytics dashboard",
      tech: "React.js, MUI",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" style={styles.container}>
      <p style={{ color: "#888", marginBottom: "10px" }}>
        ← Scroll to explore more →
      </p>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.carousel}>
        <button onClick={prev} style={styles.arrow}>◀</button>

        <div style={styles.window}>
          <motion.div
            style={styles.track}
            animate={{
              x: -(index * cardWidth - visibleWidth / 2 + cardWidth / 2),
            }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            {[...projects].map((project, i) => (
              <div
                key={i}
                style={{
                  ...styles.card,
                  transform: i === index ? "scale(1.1)" : "scale(0.9)",
                  opacity: i === index ? 1 : 0.8,
                }}
              >
                <h3>{project.title}</h3>
                <p style={styles.desc}>{project.desc}</p>
                <p style={styles.tech}>{project.tech}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <button onClick={next} style={styles.arrow}>▶</button>
      </div>
    </section>
  );
}
const styles: { [key: string]: React.CSSProperties } = {

  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

 window: {
  width: "900px",
  overflow: "hidden",
  perspective: "1000px",
  position: "relative",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
},

  track: {
  display: "flex",
  transformStyle: "preserve-3d",
},

  // card: {
  //   width: "280px",
  //   margin: "0 10px",
  //   padding: "20px",
  //   borderRadius: "12px",
  //   background: "rgba(255,255,255,0.05)",
  //   border: "1px solid rgba(255,255,255,0.1)",
  // },

  arrow: {
    background: "transparent",
    border: "1px solid #00f0ff",
    color: "#00f0ff",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },
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
    overflowX: "auto",
    gap: "20px",
    paddingBottom: "10px",
    scrollSnapType: "x mandatory",
  },
  card: {
    minWidth: "280px",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    scrollSnapAlign: "start",
    transition: "0.3s",
  },
  desc: {
    marginTop: "10px",
    color: "#aaa",
  },
  tech: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#00f0ff",
  },
  features: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },

  badge: {
    background: "#00f0ff22",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
  },

  buttons: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },

  btn: {
    padding: "6px 12px",
    background: "#00f0ff",
    color: "black",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
  },

  btnOutline: {
    padding: "6px 12px",
    border: "1px solid #00f0ff",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
    color: "#00f0ff",
  },
};