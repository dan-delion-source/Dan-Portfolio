"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { RotateCcw, Square } from "lucide-react";
import styles from "./ProfileGlitch.module.css";

const transcript = [
    "[init] portrait.feed / connection open",
    "[recv] unexpected frame at 0x7FF0",
    "[warn] frame signature mismatch",
    "[trace] isolating corrupted buffer",
    "[check] sha256 / integrity FAILED",
    "[warn] unsigned instruction detected",
    "[mem] 0x7FF0 → 0x0000 / remapped",
    "[exec] injecting display override",
    "[auth] permission boundary crossed",
    "[warn] session ownership changed",
    "[exec] replacing render pipeline",
    "[write] framebuffer / 32 blocks",
    "[write] framebuffer / 64 blocks",
    "[write] framebuffer / 96 blocks",
    "[done] display override committed",
    "[lock] portrait.feed suspended",
    "[root] control channel established",
    "[halt] original process terminated",
    "[fail] recovery handshake rejected",
    "[root] awaiting next instruction_",
];
// Keep the portrait pause unchanged; stretch the effect timings by 50%.
const TIMING_SCALE = 1.5;
const START = 1800;
const TAKEOVER = START + 620 * TIMING_SCALE;
const RECOVER = START + 4400 * TIMING_SCALE;
const END = START + 4850 * TIMING_SCALE;
const LOG_INTERVAL = 80 * TIMING_SCALE;

export default function ProfileGlitch() {
    const frame = useRef<HTMLDivElement>(null);
    const visible = useInView(frame, { amount: 0.6 });
    const reducedMotion = useReducedMotion();
    const elapsed = useRef(0);
    const [time, setTime] = useState(0);
    const [playing, setPlaying] = useState(true);
    const [manual, setManual] = useState(false);
    const [hidden, setHidden] = useState(false);
    const running = playing && (reducedMotion === false || manual);
    const phase = time < START ? "portrait" : time < TAKEOVER ? "static" : time < RECOVER ? "breach" : time < END ? "recover" : "portrait";
    const count = Math.min(transcript.length, Math.max(0, Math.floor((time - TAKEOVER) / LOG_INTERVAL) + 1));
    const breached = time >= TAKEOVER + 1500 * TIMING_SCALE;
    const tick = Math.floor(time / LOG_INTERVAL);
    const memory = Array.from({ length: 4 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => ((tick * 37 + row * 71 + col * 29) % 256).toString(16).padStart(2, "0").toUpperCase()).join(" ")
    );

    useEffect(() => {
        const update = () => setHidden(document.hidden);
        document.addEventListener("visibilitychange", update);
        return () => document.removeEventListener("visibilitychange", update);
    }, []);

    useEffect(() => {
        if (!running || !visible || hidden) return;
        let previous = performance.now();
        const timer = window.setInterval(() => {
            const now = performance.now();
            const delta = now - previous;
            previous = now;
            if (document.hidden) return;
            elapsed.current += Math.min(delta, 100);
            setTime(elapsed.current);
            if (elapsed.current >= END) setPlaying(false);
        }, 50);
        return () => window.clearInterval(timer);
    }, [running, visible, hidden]);

    function togglePlayback() {
        elapsed.current = 0;
        setTime(0);
        setManual(true);
        setPlaying(!running);
    }

    return (
        <div className={styles.profile} ref={frame}>
            <div className={styles.frame} data-phase={phase} data-paused={!visible || hidden} role="img" aria-label="Daniel's illustrated avatar with an optional simulated hacked-screen effect">
                <Image className={styles.portrait} src="/mascot.png" alt="" fill sizes="(max-width: 768px) 100vw, 350px" />
                <div className={styles.distortion} aria-hidden="true">
                    {["red", "cyan", "sliceOne", "sliceTwo", "sliceThree"].map(layer => (
                        <div key={layer} className={`${styles.fragment} ${styles[layer]}`}>
                            <Image src="/mascot.png" alt="" fill sizes="(max-width: 768px) 100vw, 350px" />
                        </div>
                    ))}
                    <div className={styles.syncLine} />
                </div>
                <div className={styles.terminal} aria-hidden="true" data-breached={breached}>
                    <div className={styles.terminalBar}><span>portrait.feed</span><span>{breached ? "ACCESS OVERRIDDEN" : "SIGNAL HIJACK"}</span></div>
                    <div className={styles.logWindow}>
                        <div className={styles.code} style={{ transform: `translateY(-${Math.max(0, count - 7) * 16}px)` }}>
                            {transcript.slice(0, count).map((line, index) => (
                                <span key={line} data-warning={/warn|fail|halt/.test(line)}><i>{(index * LOG_INTERVAL / 1000).toFixed(3)}</i> {line}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.memory}>
                        {memory.map((line, index) => <span key={index}><i>0x{(0x7ff0 + index * 16).toString(16).toUpperCase()}</i> {line}</span>)}
                    </div>
                    <div className={styles.error}>
                        {breached ? <><span className={styles.errorCode}>ERR_ACCESS_VIOLATION / 0x0005</span><strong>YOU HAVE BEEN<br />COMPROMISED.</strong><span className={styles.status}>Session terminated. Control lost.<b>_</b></span></> : <><span className={styles.errorCode}>Rewriting display buffer</span><div className={styles.progress}><span style={{ transform: `scaleX(${Math.min(1, count / 19)})` }} /></div><span className={styles.status}>{String(Math.min(100, Math.floor(count / 19 * 100))).padStart(3, "0")}% / override in progress</span></>}
                    </div>
                    <span className={styles.simulation}>Visual simulation / portfolio effect</span>
                </div>
                {phase === "recover" && <div className={styles.recovery} aria-hidden="true">[ reinitializing portrait.feed ]</div>}
            </div>
            <div className={styles.controls}>
                <span>Portrait / signal {phase === "portrait" ? "online" : phase === "recover" ? "restoring" : "interrupted"}</span>
                <button type="button" onClick={togglePlayback}>
                    {running ? <Square size={12} /> : <RotateCcw size={12} />}
                    {running ? "Stop effect" : "Replay effect"}
                </button>
            </div>
        </div>
    );
}
