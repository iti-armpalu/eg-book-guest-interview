'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import styles from "./section.module.css";

export default function CalendlyPopup() {
  const [isClient, setIsClient] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_GENERAL_URL ?? '';


  useEffect(() => {
    // Ensures this only runs on the client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PopupButton
      url={calendlyUrl}
      rootElement={document.body}
      text="Book your interview slot"
      className={styles.calendlyButton}
    />
  );
}
