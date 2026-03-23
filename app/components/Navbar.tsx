"use client";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Akshay</h2>

      <div style={styles.links}>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#contact" style={styles.link}>Contact</a>
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
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  },
};