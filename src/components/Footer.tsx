import styles from "./Footer.module.css";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Made with <Heart size={14} className={styles.heart} /> and caffeine.
                </p>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Daniel Hneturopui. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
