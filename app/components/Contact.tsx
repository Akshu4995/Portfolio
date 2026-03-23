"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" style={styles.container}>
            <h2 style={styles.heading}>Get In Touch</h2>

            <motion.p
                style={styles.text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                I’m open to opportunities and collaborations. Feel free to reach out!
            </motion.p>

            <div style={styles.links}>
                <a
                    href="mailto:akshaychavan7668@gmail.com"
                    style={styles.btn}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "0 0 15px #00f0ff")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                    }
                >
                    Email Me
                </a>

                <a href="#"  style={styles.btn}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "0 0 15px #cfabab")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                    }>
                    LinkedIn
                </a>

                {/* <a href="#" style={styles.btnOutline}>
          GitHub
        </a> */}
            </div>
        </section>
    );
} const styles: { [key: string]: React.CSSProperties } = {
    container: {
  padding: "100px 20px",
  textAlign: "center",
},
    heading: {
        fontSize: "32px",
        marginBottom: "20px",
    },
    text: {
        color: "#aaa",
        marginBottom: "30px",
    },
    links: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
    },
    btn: {
        padding: "10px 18px",
        background: "#00f0ff",
        color: "black",
        borderRadius: "8px",
        textDecoration: "none",
    },
    btnOutline: {
        padding: "10px 18px",
        border: "1px solid #00f0ff",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#00f0ff",
    },
};