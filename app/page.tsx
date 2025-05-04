"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import { sections } from "@/lib/sections";
import Section from "./components/section";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger);

function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionsEls = gsap.utils.toArray<HTMLElement>(".section");

    sectionsEls.forEach((section, index) => {
      const bg = getCSSVar(sections[index].bgColorVar);
      const text = getCSSVar(sections[index].textColorVar);

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () =>
          gsap.to(containerRef.current, {
            backgroundColor: bg,
            color: text,
            duration: 1,
          }),
        onEnterBack: () =>
          gsap.to(containerRef.current, {
            backgroundColor: bg,
            color: text,
            duration: 1,
          }),
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <Hero />
      {sections.map((section, index) => (
        <Section
          key={index}
          id={section.id}
          title={section.title}
          subheading={section.subheading}
          content={section.content}
          image={section.image}
          isCalendly={section.isCalendly}
        />
      ))}
    </div>
  );
}
