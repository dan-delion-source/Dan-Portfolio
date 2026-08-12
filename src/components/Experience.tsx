"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Calendar, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

type ExperienceType = {
    role: string;
    company: string;
    period: string;
    type: string;
    highlights: string[];
};

const experiences: ExperienceType[] = [
    {
        role: "Cybersecurity Intern",
        company: "CynuxEra",
        period: "May 2026 – July 2026",
        type: "Internship",
        highlights: [
            "Completed hands-on training in cybersecurity fundamentals, including networking, subnetting, IP addressing, and core security concepts.",
            "Worked on an AWS Cloud Security project using LocalStack to simulate AWS services in a local development environment.",
            "Developed a custom cloud security dashboard to monitor AWS resources, visualize security events, and centralize cloud security insights."
        ]
    }
];

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    Work Experience
                </motion.h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.roleGroup}>
                                    <h3 className={styles.roleTitle}>
                                        <ShieldCheck size={24} style={{ color: "var(--accent)" }} />
                                        {exp.role}
                                    </h3>
                                    <div className={styles.company}>
                                        <Building2 size={18} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className={styles.metaInfo}>
                                    <div className={styles.dateBadge}>
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <span className={styles.typeBadge}>{exp.type}</span>
                                </div>
                            </div>

                            <ul className={styles.bulletList}>
                                {exp.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className={styles.bulletItem}>
                                        <CheckCircle2 size={16} className={styles.checkIcon} />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
