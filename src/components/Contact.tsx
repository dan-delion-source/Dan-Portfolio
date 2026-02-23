"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

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
                    Let's Connect
                </motion.h2>

                <div className={styles.contactGrid}>
                    {/* Left Side: Social & Email */}
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <h3 className={styles.infoTitle}>Reach Out</h3>
                        <p className={styles.infoSubtitle}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className={styles.linksContainer}>
                            <a href="mailto:contact@daniel.xyz" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Mail size={20} /></div>
                                <span>danhneturopui@gmail.com</span>
                            </a>
                            <a href="https://github.com/dan-delion-source" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Github size={20} /></div>
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.contactLink}>
                                <div className={styles.iconWrapper}><Linkedin size={20} /></div>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    >
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className={styles.textarea}
                                    placeholder="Hello Daniel..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
