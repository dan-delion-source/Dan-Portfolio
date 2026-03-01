"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { Github, ExternalLink } from "lucide-react";

type ProjectType = {
    title: string;
    description: string;
    tools: string[];
    githubUrl: string;
    liveUrl: string;
    image: string;
};

const projects: ProjectType[] = [
    {
        title: "Minecraft Seed Map",
        description: "A web application that displays the map of a Minecraft world based on the seed provided.",
        tools: ["C", "Typescript", "Node.js"],
        githubUrl: "https://github.com/dan-delion-source/Minecraft-Seed-Map",
        liveUrl: "https://minecraft-seed-map.vercel.app",
        image: "/projects/Minecraft.png",
    },
    {
        title: "Phishing URL Detection System",
        description: "A machine learning-based phishing URL detection system.",
        tools: ["AI/ML", "Python", "Pandas", "Numpy"],
        githubUrl: "https://github.com/dan-delion-source/AI-Based-Phishing-URL-Detection-System",
        liveUrl: "https://ai-based-phishing-url-detection-sys.vercel.app/",
        image: "/projects/Phishing.png",
    },
    {
        title: "Simple Weather Forcast",
        description: "A simple weather web application that provides real-time data.",
        tools: ["Html", "Css", "JavaScript"],
        githubUrl: "https://github.com/dan-delion-source/Simple-Weather-Forcast",
        liveUrl: "https://simple-weather-forcast.vercel.app",
        image: "/projects/Weather.png",
    },
    {
        title: "Youtube Downloader",
        description: "A Youtube downloader web application that allows mp4 and mp3 downloads using Yt-dlp.",
        tools: ["Typescript", "Yt-dlp", "Node.js", "FFmpeg"],
        githubUrl: "https://github.com/dan-delion-source/Youtube-Downloader",
        liveUrl: "https://youtube-downloader-one-tau.vercel.app/",
        image: "/projects/Youtube.png",
    },
    {
        title: "Web Technology Intelligence Scanner",
        description: "TECHRADAR is a powerful web technology fingerprinting and intelligence gathering tool",
        tools: ["Axios", "Node.js", "Express", "Tailwind CSS"],
        githubUrl: "https://github.com/dan-delion-source/TECHRADAR",
        liveUrl: "#",
        image: "/projects/TechRadar.png",
    },
];

export default function Projects() {
    return (
        <section className={styles.projectsSection} id="projects">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                        >
                            <div className={styles.imagePlaceholder}>
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            </div>

                            <div className={styles.cardHeader}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.links}>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <Github className={styles.icon} size={20} />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
                                        <ExternalLink className={styles.icon} size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className={styles.projectDescription}>{project.description}</p>

                            <div className={styles.tagsContainer}>
                                {project.tools.map((tool) => (
                                    <span key={tool} className={styles.tag}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
