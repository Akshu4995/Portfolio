"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectParticles from "./ProjectParticals"

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const projects: Array<{
    title: string;
    description: string;
    tech: string[];
    color: string;
    liveLink?: string;
    github?: string;
  }> = [
      {
        title: "Editorial AI",
        description: "An AI-powered resume intelligence platform that analyzes CVs against job descriptions using Llama 3.3, featuring a multi-step editor and real-time matching scores.",
        tech: ["Next.js", "FastAPI", "Python", "Redux"],
        color: "#00f0ff",
        liveLink: "https://ai-resume-analyzer-lemon-ten.vercel.app/", // Replace with your actual URL
        // github: "https://github.com/your-repo",   // Replace with your actual GitHub
      },
      {
        title: "Trabajitos",
        description: "Job portal with real-time chat for Job Seekers and Employers using WebSockets for instant communication.",
        tech: ["Next.js", "Node.js", "Socket.io"],
        color: "#00f0ff",
        // liveLink: "#", 
        // github: "#",
      },
      {
        title: "Employee Portal",
        description: "Enterprise-grade management system with role-based access control and detailed analytics dashboards.",
        tech: ["React.js", "Redux", "Node.js"],
        color: "#7000ff",
        // liveLink: "#",
        // github: "#",
      },
      {
        title: "Zoo Ticketing",
        description: "Modern ticketing system with animal information database and integrated event management features.",
        tech: ["React.js", "Node.js", "Stripe"],
        color: "#00ff8c",
        // liveLink: "#",
        // github: "#",
      },
      {
        title: "MedForEach",
        description: "Comprehensive medical portal featuring automated appointment scheduling and secure patient record management.",
        tech: ["Next.js", "Python", "FastAPI"],
        color: "#ff0055",
        // liveLink: "#",
        // github: "#",
      },
      {
        title: "CA-ERP",
        description: "Full-scale ERP solution for inventory tracking, sales forecasting, and financial reporting.",
        tech: ["React.js", "MUI", "PostgreSQL"],
        color: "#ffaa00",
        // liveLink: "#",
        // github: "#",
      },
    ];

  return (
    <section id="projects" style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p style={styles.overhead}>EXPLORE MY WORK</p>
        <h2 style={styles.heading}>Featured Projects</h2>
      </motion.div>

      <div style={styles.wrapper}>
        <div style={styles.progressContainer}>
          {projects.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.progressBar,
                background: i === index ? projects[i].color : "#333",
                width: i === index ? "30px" : "10px",
                boxShadow: i === index ? `0 0 10px ${projects[i].color}` : "none"
              }}
            />
          ))}
        </div>

        <div style={styles.carouselContainer}>
          <ProjectParticles color={projects[index].color} />
          <button onClick={prev} style={styles.navBtn}>◀</button>

          <div style={styles.perspectiveArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 30, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -30, x: -50, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                style={{
                  ...styles.mainCard,
                  border: `1px solid ${projects[index].color}44`,
                  boxShadow: `0 20px 50px ${projects[index].color}10`,
                }}
              >
                <div style={styles.cardContent}>
                  <div style={{ ...styles.glow, backgroundColor: projects[index].color }} />

                  <h3 style={styles.cardTitle}>{projects[index].title}</h3>
                  <p style={styles.cardDesc}>{projects[index].description}</p>

                  <div style={styles.techWrapper}>
                    {projects[index].tech?.map((t, i) => (
                      <span key={i} style={{ ...styles.badge, borderColor: projects[index].color, color: projects[index].color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={styles.btnGroup}>
                    {/* ONLY show buttons for Editorial AI */}
                    {projects[index].title === "Editorial AI" && (
                      <>
                        <motion.a
                          href={projects[index].liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ ...styles.mainBtn, background: projects[index].color }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div style={styles.pulseDot} />
                          Live Demo
                        </motion.a>

                        {/* <motion.a
                          href={projects[index].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.outlineBtn}
                          whileHover={{ borderColor: projects[index].color, color: projects[index].color }}
                        >
                          GitHub
                        </motion.a> */}
                      </>
                    )}

                    {/* Optional: Show a "Coming Soon" or different button for other projects */}
                    {projects[index].title !== "Editorial AI" && (
                      <span style={{ color: "#555", fontSize: "14px", fontWeight: "600" }}>
                        CASE STUDY COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} style={styles.navBtn}>▶</button>
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  overhead: {
    fontSize: "12px",
    letterSpacing: "4px",
    color: "#00f0ff",
    marginBottom: "10px",
    opacity: 0.8
  },
  heading: {
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: "800",
    marginBottom: "50px",
    color: "#fff"
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  progressContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "30px"
  },
  progressBar: {
    height: "4px",
    borderRadius: "2px",
    transition: "all 0.4s ease"
  },
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    position: "relative",
    width: "100%",
    minHeight: "500px",
    zIndex: 1,
  },
  perspectiveArea: {
    perspective: "1000px",
    width: "100%",
    maxWidth: "700px",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainCard: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(15px)",
    borderRadius: "24px",
    position: "relative",
    overflow: "hidden",
    padding: "40px",
    textAlign: "left"
  },
  glow: {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "250px",
    height: "250px",
    filter: "blur(100px)",
    opacity: 0.1,
    zIndex: 0,
  },
  cardContent: {
    position: "relative",
    zIndex: 1,
  },
  cardTitle: {
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#fff"
  },
  cardDesc: {
    fontSize: "16px",
    color: "#aaa",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  techWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "40px"
  },
  badge: {
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "11px",
    border: "1px solid",
    background: "rgba(255,255,255,0.03)",
    fontWeight: "600",
    textTransform: "uppercase"
  },
  btnGroup: {
    display: "flex",
    gap: "15px"
  },
  mainBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#000",
    textDecoration: "none",
    fontSize: "14px"
  },
  outlineBtn: {
    padding: "12px 24px",
    borderRadius: "12px",
    border: "1px solid #333",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s ease"
  },
  pulseDot: {
    width: "8px",
    height: "8px",
    background: "#000",
    borderRadius: "50%",
    boxShadow: "0 0 8px rgba(0,0,0,0.5)",
  },
  navBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10
  }
};