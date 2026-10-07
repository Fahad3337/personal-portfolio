"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const INTERVAL_MS = 4000;

/** Phone-only carousel: swipe or tap the dots, and it advances itself every 4s. */
export default function ProjectSlider({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const pausedUntil = useRef(0);
  const visible = useRef(false);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  }, []);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    indexRef.current = i;
    setIndex(i);
  };

  // After any manual touch, leave the user alone for a full interval.
  const pause = () => {
    pausedUntil.current = Date.now() + INTERVAL_MS;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    observer.observe(track);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = reduced
      ? undefined
      : window.setInterval(() => {
          if (!visible.current || Date.now() < pausedUntil.current) return;
          goTo((indexRef.current + 1) % slides.length);
        }, INTERVAL_MS);

    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, [goTo, slides.length]);

  const step = (dir: 1 | -1) => {
    pause();
    goTo((indexRef.current + dir + slides.length) % slides.length);
  };

  const arrowClass =
    "focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-primary shadow-sm transition-colors active:bg-accent-soft";

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        onScroll={onScroll}
        onTouchStart={pause}
        onPointerDown={pause}
        className="-mx-5 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className="w-full shrink-0 snap-center px-5"
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => step(-1)}
          className={arrowClass}
        >
          <span aria-hidden>←</span>
        </button>

        <div
          className="flex items-center justify-center gap-1"
          role="group"
          aria-label="Choose project"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show project ${i + 1}`}
              aria-current={i === index}
              onClick={() => {
                pause();
                goTo(i);
              }}
              className="focus-ring flex h-8 w-6 items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-slate-300"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => step(1)}
          className={arrowClass}
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
