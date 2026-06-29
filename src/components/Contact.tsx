"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    {"Let's Connect"}
                </motion.h2>

                <div className={styles.cardContainer}>
                    <motion.div
                        className={styles.contactCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <h3 className={styles.infoTitle}>Reach Out</h3>
                        <p className={styles.infoSubtitle}>
                            {"I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."}
                        </p>

                        <div className={styles.linksContainer}>
                            <a href="mailto:danhneturopui@gmail.com" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Mail size={20} /></div>
                                <div className={styles.linkText}>
                                    <span className={styles.linkLabel}>Email</span>
                                    <span className={styles.linkVal}>danhneturopui@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://github.com/dan-delion-source" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Github size={20} /></div>
                                <div className={styles.linkText}>
                                    <span className={styles.linkLabel}>GitHub</span>
                                    <span className={styles.linkVal}>dan-delion-source</span>
                                </div>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Linkedin size={20} /></div>
                                <div className={styles.linkText}>
                                    <span className={styles.linkLabel}>LinkedIn</span>
                                    <span className={styles.linkVal}>Connect on LinkedIn</span>
                                </div>
                            </a>
                            <a href="https://tryhackme.com/p/danhneturopui" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Shield size={20} /></div>
                                <div className={styles.linkText}>
                                    <span className={styles.linkLabel}>TryHackMe</span>
                                    <span className={styles.linkVal}>danhneturopui</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

