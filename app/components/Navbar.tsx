"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div className="logo-flip">
        <div className="logo-inner">
          <span className="logo-front">Akshay</span>
          <span className="logo-back">Frontend Dev 🚀</span>
        </div>
      </div>

      <div style={styles.links}>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    boxSizing: "border-box" as const,
  },
  logo: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  },
};