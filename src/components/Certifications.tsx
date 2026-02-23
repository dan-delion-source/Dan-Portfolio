"use client";

import { motion } from "framer-motion";
import styles from "./Certifications.module.css";
import { Award } from "lucide-react";

type CertificationType = {
    name: string;
    issuer: string;
    year: string;
};

const certifications: CertificationType[] = [
    {
        name: "Ethical Hacking Essentials",
        issuer: "EC-Council",
        year: "2026",
    },
    {
        name: "Google Cybersecurity Professional",
        issuer: "Google",
        year: "2026",
    },
    {
        name: "Security Fundamentals",
        issuer: "TCM",
        year: "2025",
    },
    {
        name: "Network Security Fundamentals",
        issuer: "TCM",
        year: "2025",
    },
];

export default function Certifications() {
    return (
        <section className={styles.certSection} id="certifications">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    Certifications
                </motion.h2>

                <div className={styles.grid}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Award size={28} className={styles.icon} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.certName}>{cert.name}</h3>
                                <p className={styles.issuer}>{cert.issuer}</p>
                            </div>
                            <div className={styles.year}>{cert.year}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
