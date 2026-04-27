import { useEffect, useRef } from "react";

/**
 * useScrollReveal Hook - Ahura Mind
 * Triggers animations when elements come into view
 */

export function useScrollReveal(options = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
}
