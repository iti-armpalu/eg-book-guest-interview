// components/Hero.tsx
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          So you’re considering being interviewed.
        </h1>
        <p className={styles.cta}>
          Here’s why your contribution is is not just important to us, it’s
          important to a lot of people that risk being left behind by AI
          <span className={styles.info}>
            The journey ahead has 5 short sections and will only take a few minutes.
          </span>
          <span className={styles.arrow}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          </span>
          
        </p>
      </div>
    </div>
  );
}
