// components/Section.tsx
import Image from "next/image";
import styles from "./section.module.css";
import CalendlyPopup from "./calendlyPopup";

interface SectionProps {
  id: string;
  title: string;
  subheading?: string;
  content?: string;
  image?: string;
  isCalendly?: boolean;
}

export default function Section({
  id,
  title,
  subheading,
  content,
  image,
  isCalendly,
}: SectionProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.sectionNumber}>
            {id}
            <span className={styles.sectionTotal}>
              / 05
            </span>
          </span>
          <h1 className={styles.sectionTitle}>{title}</h1>
        </div>

        {isCalendly ? (
          <div className={styles.calendlyPopup}>
            <CalendlyPopup />
          </div>
        ) : (
          <>
            {image && (
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
            )}
            {subheading && <h3 className={styles.subheading}>{subheading}</h3>}
            {content && <p className={styles.content}>{content}</p>}
          </>
        )}
      </div>
    </section>
  );
}
