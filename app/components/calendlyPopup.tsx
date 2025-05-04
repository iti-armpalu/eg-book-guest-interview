'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

export default function CalendlyPopup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this only runs on the client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PopupButton
      url="https://calendly.com/iti-armpalu/expert-interview"
      rootElement={document.body}
      text="Book your interview slot"
    />
  );
}
