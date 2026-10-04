"use client";

import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className={styles.container}>
                <a href="#hero" className={styles.logo}>Dan</a>
                <a
                    href="/Resume/Daniel%20Resume.pdf"
                    download="Daniel Resume.pdf"
                    className={styles.resumeLink}
                >
                    Download Resume
                </a>
            </div>
        </motion.nav>
    );
}
