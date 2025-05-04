// components/Section.tsx
import Image from "next/image";
import styles from "./section.module.css";
import { PopupButton, PopupWidget } from "react-calendly";

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
          <span className={styles.sectionNumber}>{id}</span>
          <h1 className={styles.sectionTitle}>{title}</h1>
        </div>
        {/* <div className={styles.imageWrapper}>
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
        <p className={styles.content}>{content}</p> */}

        {isCalendly ? (
          <div className={styles.calendlyPopup}>
            {/* <button
              className={styles.calendlyButton}
              onClick={() =>
                window.Calendly?.initPopupWidget({
                  url: "https://calendly.com/iti-armpalu/expert-interview?month=2025-05",
                })
              }
            >
              Book your interview slot
            </button> */}
            <PopupButton
              url="https://calendly.com/iti-armpalu/expert-interview?month=2025-05"
              rootElement={document.body}
              text="Book your interview slot"
            />
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
