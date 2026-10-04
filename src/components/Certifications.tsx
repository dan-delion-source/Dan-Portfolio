"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Certifications.module.css";
import { Award, RotateCw, ExternalLink } from "lucide-react";

type CertificationType = {
    name: string;
    issuer: string;
    year: string;
    image?: string;
};

const certifications: CertificationType[] = [
    {
        name: "Security+",
        image: "/certifications/Security +.png",
        issuer: "CompTIA",
        year: "2026",
    },
    {
        name: "Ethical Hacking Essentials",
        image: "/certifications/EHE.png",
        issuer: "EC-Council",
        year: "2026",
    },
    {
        name: "Google Cybersecurity Professional",
        image: "/certifications/Google Cert.png",
        issuer: "Google",
        year: "2026",
    },
    {
        name: "Practical Security Fundamentals",
        image: "/certifications/Practical security.png",
        issuer: "TCM",
        year: "2026",
    },
    {
        name: "Linux 100:Fundamentals",
        issuer: "TCM",
        year: "2025",
    },
    {
        name: "Cisco Certified Support Technician Cybersecurity",
        image: "/certifications/CCST.png",
        issuer: "Cisco",
        year: "2025",
    },
    {
        name: "Java Programming Fundamentals",
        issuer: "Infosys",
        year: "2025",
    },
    {
        name: "Google AI",
        issuer: "Google",
        year: "2026",
        image: "/certifications/Google AI.png",
    },
    {
        name: "Mobile Development with Android",
        issuer: "Infosys",
        year: "2026",
        image: "/certifications/Mobile application.png",
    },
];

function CertificationCard({ cert }: { cert: CertificationType }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <article className={styles.card} data-flippable={Boolean(cert.image)} data-flipped={flipped}>
            <div className={styles.rotor} aria-hidden={cert.image ? true : undefined}>
                <div className={styles.front}>
                    <div className={styles.iconWrapper}><Award size={28} className={styles.icon} /></div>
                    <div className={styles.content}>
                        <h3 className={styles.certName}>{cert.name}</h3>
                        <p className={styles.issuer}>{cert.issuer}</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <span className={styles.year}>{cert.year}</span>
                        {cert.image && <span className={styles.flipHint}><RotateCw size={14} /> View certificate</span>}
                    </div>
                </div>
                {cert.image && <div className={styles.back}>
                    <div className={styles.certificateImage}>
                        <Image src={cert.image} alt="" fill sizes="(max-width: 650px) 90vw, (max-width: 900px) 45vw, 360px" />
                    </div>
                    <div className={styles.backFooter}><span><RotateCw size={14} /> Flip back</span></div>
                </div>}
            </div>
            {cert.image && <>
                <button className={styles.flipButton} type="button" aria-label={`${flipped ? "Flip back" : "View certificate"}: ${cert.name}, ${cert.issuer}, ${cert.year}`} aria-pressed={flipped} onClick={() => setFlipped(value => !value)} onKeyDown={event => { if (event.key === "Escape") setFlipped(false); }} />
                {flipped && <a className={styles.fullSize} href={cert.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${cert.name} certificate full size (new tab)`}>Open full size <ExternalLink size={13} /></a>}
            </>}
        </article>
    );
}

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
                            className={styles.cardContainer}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                        >
                            <CertificationCard cert={cert} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
