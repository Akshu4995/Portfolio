"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectParticles from "./ProjectParticals"; // Ensure this filename is correct!

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Editorial AI",
      description: "An AI-powered resume intelligence platform that analyzes CVs against job descriptions using Llama 3.3, featuring a multi-step editor and real-time matching scores.",
      tech: ["Next.js", "FastAPI", "Python", "Redux"], 
      color: "#00f0ff",
      liveLink: "https://ai-resume-analyzer-lemon-ten.vercel.app/", 
      // github: "https://github.com/your-repo",   
    },
    {
      title: "Trabajitos",
      description: "Job portal with real-time chat for Job Seekers and Employers using WebSockets for instant communication.",
      tech: ["Next.js", "Node.js", "Socket.io"],
      color: "#00f0ff",
      liveLink: "#", 
      github: "#",
    },
    {
      title: "Employee Portal",
      description: "Enterprise-grade management system with role-based access control and detailed analytics dashboards.",
      tech: ["React.js", "Redux", "Node.js"],
      color: "#7000ff",
      liveLink: "#",
      github: "#",
    },
    {
      title: "Zoo Ticketing",
      description: "Modern ticketing system with animal information database and integrated event management features.",
      tech: ["React.js", "Node.js", "Stripe"],
      color: "#00ff8c",
      liveLink: "#",
      github: "#",
    },
    {
      title: "MedForEach",
      description: "Comprehensive medical portal featuring automated appointment scheduling and secure patient record management.",
      tech: ["Next.js", "Python", "FastAPI"],
      color: "#ff0055",
      liveLink: "#",
      github: "#",
    },
    {
      title: "CA-ERP",
      description: "Full-scale ERP solution for inventory tracking, sales forecasting, and financial reporting.",
      tech: ["React.js", "MUI", "PostgreSQL"],
      color: "#ffaa00",
      liveLink: "#",
      github: "#",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const styles = getStyles(isMobile);

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
          
          {/* LEFT ARROW - Positioned Absolutely */}
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
                  <div style={{...styles.glow, backgroundColor: projects[index].color}} />
                  
                  <h3 style={styles.cardTitle}>{projects[index].title}</h3>
                  <p style={styles.cardDesc}>{projects[index].description}</p>
                  
                  <div style={styles.techWrapper}>
                    {projects[index].tech?.map((t, i) => (
                      <span key={i} style={{...styles.badge, borderColor: projects[index].color, color: projects[index].color}}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Button Group Pinned to Bottom */}
                  <div style={styles.btnGroup}>
                    {projects[index].title === "Editorial AI" ? (
                      <>
                        <motion.a 
                          href={projects[index].liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{...styles.mainBtn, background: projects[index].color}}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span style={styles.pulseDot} />
                          Live Demo
                        </motion.a>
                        
                        <motion.a 
                          href={projects[index].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.outlineBtn}
                          whileHover={{ borderColor: projects[index].color, color: projects[index].color }}
                        >
                          GitHub
                        </motion.a>
                      </>
                    ) : (
                      <span style={styles.comingSoon}>
                        CASE STUDY COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW - Positioned Absolutely */}
          <button onClick={next} style={{...styles.navBtn, ...styles.nextBtn}}>▶</button>
        </div>
      </div>
    </section>
  );
}

const getStyles = (isMobile: boolean): { [key: string]: React.CSSProperties } => ({
  container: {
    padding: isMobile ? "60px 10px" : "80px 20px",
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
    position: "relative", // Required for absolute arrows
    width: "100%",
    minHeight: isMobile ? "520px" : "550px", // Stabilizes the overall section height
    margin: "0 auto",
    zIndex: 1,
  },
  perspectiveArea: {
    perspective: "1000px",
    width: isMobile ? "85%" : "100%", 
    maxWidth: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  mainCard: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(15px)",
    borderRadius: "24px",
    position: "relative",
    overflow: "hidden",
    padding: isMobile ? "30px 15px" : "40px", 
    textAlign: isMobile ? "center" : "left",
    display: "flex",
    flexDirection: "column",
    minHeight: isMobile ? "460px" : "420px", // Keeps cards consistent size
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    position: "relative",
    zIndex: 1,
  },
  cardTitle: {
    fontSize: isMobile ? "26px" : "36px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#fff"
  },
  cardDesc: {
    fontSize: isMobile ? "14px" : "16px",
    color: "#aaa",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  techWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: "8px",
    marginBottom: "30px"
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    border: "1px solid",
    background: "rgba(255,255,255,0.03)",
    fontWeight: "600",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  },
  btnGroup: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: "center",
    gap: "15px",
    marginTop: "auto", // Forces buttons to stay at bottom of card
  },
  comingSoon: {
    color: "#555", 
    fontSize: "14px", 
    fontWeight: "600", 
    width: "100%", 
    textAlign: isMobile ? "center" : "left",
    paddingBottom: "10px"
  },
  mainBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 24px",
    width: isMobile ? "100%" : "auto",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#000",
    textDecoration: "none",
    fontSize: "14px"
  },
  outlineBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    width: isMobile ? "100%" : "auto",
    borderRadius: "12px",
    border: "1px solid #333",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)", // Center vertically based on container
    left: isMobile ? "0px" : "-60px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    transition: "all 0.3s ease",
  },
  nextBtn: {
    left: "auto",
    right: isMobile ? "0px" : "-60px",
  },
  pulseDot: {
    width: "8px",
    height: "8px",
    background: "#000",
    borderRadius: "50%",
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
  }
});