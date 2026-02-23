"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import {
    SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiKotlin,
    SiHtml5, SiCss3, SiGnubash, SiReact, SiNextdotjs, SiBootstrap,
    SiNodedotjs, SiDjango, SiFlask, SiFastapi, SiTensorflow, SiPytorch,
    SiScikitlearn, SiNumpy, SiTailwindcss, SiPandas, SiMysql, SiPostgresql,
    SiMongodb, SiFirebase, SiDocker, SiGit, SiGithub,
    SiLinux, SiAmazonwebservices, SiVercel, SiJupyter,
    SiFigma, SiAdobephotoshop, SiWireshark
} from "react-icons/si";
import { FaNetworkWired, FaShieldAlt, FaMicrosoft } from "react-icons/fa";
import { TbTerminal2 } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

const technologies = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Flask", icon: SiFlask, color: "#ffffff" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Azure", icon: VscAzure, color: "#0089D6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Nmap", icon: FaNetworkWired, color: "#1d1d1d" },
    { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
    { name: "Metasploit", icon: TbTerminal2, color: "#1282ec" },
    { name: "Burp Suite", icon: FaShieldAlt, color: "#FF6633" },
    { name: "MS Office", icon: FaMicrosoft, color: "#D83B01" },
];

export default function TechStack() {
    return (
        <section className={styles.techSection} id="tech-stack">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    Tech Stack
                </motion.h2>

                <div className={styles.grid}>
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className={styles.card}
                            style={{ "--brand-color": tech.color } as React.CSSProperties}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.02 }}
                        >
                            <div className={styles.logoWrapper}>
                                <tech.icon size={48} className={styles.icon} />
                            </div>
                            <span className={styles.techName}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
