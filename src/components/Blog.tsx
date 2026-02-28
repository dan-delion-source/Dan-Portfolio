"use client";

import { motion } from "framer-motion";
import styles from "./Blog.module.css";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";

export default function Blog() {
    return (
        <section className={styles.blogSection} id="blog">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <h2 className={styles.sectionTitle}>Latest <span className={styles.highlight}>Writings</span></h2>
                    <p className={styles.subtitle}>Insights and thoughts on cybersecurity, development, and tech.</p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Placeholder Post 1 */}
                    <motion.div
                        className={styles.postCard}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <div className={styles.postIcon}>
                            <BookOpen size={24} />
                        </div>
                        <h3 className={styles.postTitle}>Arch+Hyprland Installation Guide</h3>
                        <p className={styles.postDate}>2026</p>
                        <p className={styles.postDescription}>A step-by-step guide to installing Arch Linux with Hyprland</p>
                        <a href="https://arch-hyprland-installation.vercel.app/" className={styles.readMore}>
                            Read Article <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Placeholder Post 2 */}
                    <motion.div
                        className={styles.postCard}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    >
                        <div className={styles.postIcon}>
                            <BookOpen size={24} />
                        </div>
                        <h3 className={styles.postTitle}>The Right Way to Home Lab For Beginners</h3>
                        <p className={styles.postDate}>Coming Soon</p>
                        <p className={styles.postDescription}>A guide to setting up a home lab for beginners</p>
                        <a href="#" className={styles.readMore}>
                            No Article Yet <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Placeholder Post 3 */}
                    <motion.div
                        className={styles.postCard}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    >
                        <div className={styles.postIcon}>
                            <BookOpen size={24} />
                        </div>
                        <h3 className={styles.postTitle}>A Begginers Guide to CTFs</h3>
                        <p className={styles.postDate}>Coming Soon</p>
                        <p className={styles.postDescription}>A guide to getting started with CTFs</p>
                        <a href="#" className={styles.readMore}>
                            No Article Yet <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
