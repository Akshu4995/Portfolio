"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function Projects() {


  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const cardWidth = 200;
  const gap = 20;
  const visibleWidth = 1000; // 3 cards
  const offset = (900 - 300) / 2

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
      desc: "Job portal with real-time chat For Job Seekers and Employers",
      tech: "Next.js, Node.js",
      features: [" Payment Integration", "Admin Panel", "Real-time Chat", "Multi-role"],
      github: "#",
      live: "#",
    },
    {
      title: "Employee Portal",
      desc: "Employee management with role-based access and analytics dashboard For HR,employees and Managers",
      tech: "React.js, Redux,Node.js",
      features: ["Admin Dashboard", "Role-based Access"],
      github: "#",
      live: "#",
    },
    {
      title: "Zoo",
      desc: "Zoo Ticketing and Management System with features for ticket booking, animal info, and event management For Zoo Visitors and Staff",
      tech: "React.js, Node.js",
      features: ["Ticket Booking", "Payment Integration"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Management System",
      desc: "Task and Time tracking with analytics dashboard For Teams and Project Managers to improve productivity",
      tech: "React.js, CSS Modules node.js",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
    {
      title: "MedForEach",
      desc: "Portal for medical professionals with appointment scheduling and patient management For Doctors and Patients",
      tech: "Next.js, Python Redux",
      features: ["Analytics", "Task Tracking"],
      github: "#",
      live: "#",
    },
    {
      title: "CA-ERP",
      desc: "Comprehensive ERP system with modules for inventory, sales, and finance For Small to Medium Businesses",
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
        <button
          onClick={prev}
          style={{ ...styles.arrow, left: "5px" }}
        >
          ◀
        </button>



        <div style={styles.window}>
          <motion.div
            style={styles.track}
            animate={{
              x:
                -index * (cardWidth + gap) +
                visibleWidth / 2 -
                cardWidth / 2,
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

        <button
          onClick={next}
          style={{ ...styles.arrow, right: "5px" }}
        >
          ▶
        </button>
      </div>
    </section>
  );
}
const styles: { [key: string]: React.CSSProperties } = {

  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",// IMPORTANT
    position: "relative",
    width: "100%",
  },

  window: {
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    overflow: "hidden",
    // display: "flex",
    position: "relative",
  },

  track: {
    display: "flex",
    // alignItems: "center",
    gap: "20px",
    // justifyContent: "center", // Important
    // paddingBottom: "10px",
    // transformStyle: "preserve-3d",
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
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.6)",
    border: "1px solid #00f0ff",
    color: "#00f0ff",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 20,
  },
  container: {
    padding: "100px 20px",
    textAlign: "center",
    marginBottom: "0",
    paddingBottom: "20px",
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
    minWidth: "250px",
    maxWidth: "1000px",
    flex: "Wx0 0 auto",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    // scrollSnapAlign: "start",
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