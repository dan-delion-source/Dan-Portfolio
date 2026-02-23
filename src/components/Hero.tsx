"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section className={styles.heroSection}>
            {init && (
                <Particles
                    id="tsparticles"
                    className={styles.particlesContainer}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fullScreen: {
                            enable: false,
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    links: {
                                        opacity: 0.8,
                                        color: "#38bdf8", // Reacts with accent color
                                    },
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#888888",
                                distance: 150,
                                enable: true,
                                opacity: 0.1,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.8, // Slow, peaceful movement
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 800,
                                    height: 800,
                                },
                                value: 100, // More crowded
                            },
                            opacity: {
                                value: 0.1, // Even less opaque, very subtle until hovered
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm <span className={styles.highlight}>Daniel Hneturopui</span>
                </h1>
                <h2 className={styles.subtitle}>
                    Developer / Cybersecurity Specialist
                </h2>
            </div>

            <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down">
                <ChevronDown size={32} />
            </a>
        </section>
    );
}
