"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra classes (grids, alignment helpers). */
  className?: string;
  /** Delay before this element animates in, in ms. */
  delay?: number;
  /** Stagger the direct children instead of the wrapper. */
  stagger?: boolean;
  id?: string;
};

/**
 * Fades + lifts its content into view the first time it enters the
 * viewport. Respects `prefers-reduced-motion` (content shows instantly)
 * and degrades gracefully when JavaScript is unavailable.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    stagger ? "reveal-stagger" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      id={id}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
