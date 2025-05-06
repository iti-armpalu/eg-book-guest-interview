'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import styles from "./section.module.css";

export default function CalendlyPopup() {
  const [isClient, setIsClient] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_AUDE_URL ?? "https://calendly.com/d/cr2h-f82-f7y/aude-roy-armale";


  useEffect(() => {
    // Ensures this only runs on the client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PopupButton
      url={calendlyUrl}
      rootElement={document.body}
      text="Book your interview slot on 12th of May"
      className={styles.calendlyButton}
    />
  );
}
