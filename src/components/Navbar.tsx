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

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About Me", href: "#about" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className={styles.container}>
                <div className={styles.logo}>dandev</div>
                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
