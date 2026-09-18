"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerSnapshot() {
  return false;
}

export default function Typewriter({ words }: { words: string[] }) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 55 : 90);
    };

    timeoutId = setTimeout(tick, 900);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion, words]);

  if (reducedMotion) {
    return <span className="text-accent-2">{words[0]}</span>;
  }

  return (
    <>
      <span aria-hidden className="text-accent-2">
        {text}
        {/* Solid block cursor, terminal-style */}
        <span
          aria-hidden
          className="ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.12em] bg-accent"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </>
  );
}
