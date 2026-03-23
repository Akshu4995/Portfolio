export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Akshay Chavan. All rights reserved.
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center" as const,
    padding: "20px",
    color: "#888",
    fontSize: "14px",
  },
};