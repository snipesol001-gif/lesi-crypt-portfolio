import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "proof-of-work",
  "currently-building",
  "straight-from-x",
  "contact",
];

/**
 * Reports the id of the section currently occupying the upper
 * band of the viewport. Powers the navbar active state.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      // A narrow band between roughly 15% and 25% down the viewport,
      // below the sticky bar. A section is active while it passes
      // through this band.
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}