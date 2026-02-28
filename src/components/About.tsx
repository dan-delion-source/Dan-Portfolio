"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { User, GraduationCap, Briefcase, Heart } from "lucide-react";

export default function About() {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.container}>
                {/* Left Side: Image Placeholder */}
                <motion.div
                    className={styles.imagePlaceholder}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <div className={styles.imageBox}>
                        <span className={styles.imageText}>[ Error 404:User Cute Photo Not Found ]</span>
                    </div>
                </motion.div>

                {/* Right Side: Clean Text */}
                <motion.div
                    className={styles.textWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <h2 className={styles.heading}>About Me</h2>
                    <p className={styles.description}>
                        Hello! I'm Daniel Hneturopui, a dedicated Developer and Cybersecurity Specialist. I blend my passion for writing clean, efficient code with a robust understanding of system security to build applications that are not just highly functional, but comprehensively secure from the ground up.
                    </p>

                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <div className={styles.iconBox}><GraduationCap size={20} /></div>
                            <div>
                                <h4 className={styles.itemTitle}>Education</h4>
                                <p className={styles.itemText}>MCA in Kristu Jayanti University</p>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.iconBox}><Briefcase size={20} /></div>
                            <div>
                                <h4 className={styles.itemTitle}>Role</h4>
                                <p className={styles.itemText}>Developer / Cybersecurity Specialist</p>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.iconBox}><Heart size={20} /></div>
                            <div>
                                <h4 className={styles.itemTitle}>Interests</h4>
                                <p className={styles.itemText}>Security, Networking, AI, Building, Exploring, Fitness</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
