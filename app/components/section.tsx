// components/Section.tsx
import Image from 'next/image';
import styles from './section.module.css';

interface SectionProps {
  id: string;
  title: string;
  subheading: string;
  content: string;
  image: string;
}

export default function Section({ id, title, subheading, content, image }: SectionProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.sectionNumber}>{id}</span>
          <h1 className={styles.sectionTitle}>{title}</h1>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={600}
            className={styles.image}
            priority
          />
        </div>
        <h3 className={styles.subheading}>{subheading}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </section>
  );
}