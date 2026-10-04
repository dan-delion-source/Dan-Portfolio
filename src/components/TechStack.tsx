"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import {
    SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus,
    SiHtml5, SiCss3, SiGnubash, SiReact, SiNextdotjs,
    SiNodedotjs, SiMysql, SiMongodb, SiFirebase, SiSupabase, SiDocker, 
    SiAmazonwebservices, SiVercel, SiJupyter,
    SiFigma, SiAdobephotoshop, SiWireshark, SiJenkins, SiSplunk,
    SiMetasploit, SiBurpsuite
} from "react-icons/si";
import { FaMicrosoft, FaJava } from "react-icons/fa";
import { TbShieldSearch } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const WazuhIcon = ({ size, ...props }: any) => (
    <svg 
        viewBox="0 0 500 500" 
        fill="currentColor" 
        width={size || "1em"} 
        height={size || "1em"} 
        {...props}
    >
        <path 
            d="M693.8 630.2 631 425.7h-49.7l-62.8 204.5L456 425.7h-57l91 298h46.2L606 508.1l69.7 215.6H722l91-298h-56.8l-62.4 204.5Z" 
            transform="translate(-356, -324.7)" 
        />
        <circle cx="470" cy="120" r="30" fill="#3585f9" />
    </svg>
);

const NmapIcon = ({ size, ...props }: any) => (
    <img
        src="/icons/nmap.svg"
        alt="Nmap"
        width={size || 48}
        height={size || 48}
        style={{ objectFit: "contain" }}
        {...props}
    />
);

const JohnTheRipperIcon = ({ size, ...props }: any) => (
    <img 
        src="/icons/john.svg" 
        alt="John the Ripper" 
        width={size || 48} 
        height={size || 48} 
        style={{ objectFit: "contain" }}
        {...props} 
    />
);

const HydraIcon = ({ size, ...props }: any) => (
    <img 
        src="/icons/hydra.svg" 
        alt="Hydra" 
        width={size || 48} 
        height={size || 48} 
        style={{ objectFit: "contain" }}
        {...props} 
    />
);

const technologies = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Nmap", icon: NmapIcon, color: "#7B79F5" },
    { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
    { name: "Metasploit", icon: SiMetasploit, color: "#2596CD" },
    { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633" },
    { name: "Wazuh", icon: WazuhIcon, color: "#3585f9" },
    { name: "SIEM", icon: TbShieldSearch, color: "#6366F1" },
    { name: "John the Ripper", icon: JohnTheRipperIcon, color: "#fc4" },
    { name: "Hydra", icon: HydraIcon, color: "#00E676" },
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
