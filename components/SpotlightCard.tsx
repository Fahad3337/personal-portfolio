"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export default function SpotlightCard({
  children,
  delay = 0,
  className = "",
  wrapperClassName = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Classes for the outer (grid-item) element — e.g. a col-span utility. */
  wrapperClassName?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Written straight to the DOM so pointer movement never triggers a re-render.
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={wrapperRef}
      className={`reveal ${visible ? "is-visible" : ""} ${wrapperClassName}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div ref={cardRef} onMouseMove={handleMouseMove} className={`spotlight-card ${className}`}>
        {children}
      </div>
    </div>
  );
}
