"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { profile } from "@/lib/content";

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

const whoami = profile.name.toLowerCase().replace(/\s+/g, "_");

type Line = { prompt?: boolean; text: string };

const LINES: Line[] = [
  { prompt: true, text: "whoami" },
  { text: whoami },
  { prompt: true, text: "cat role.txt" },
  { text: profile.title },
  { prompt: true, text: "./status.sh" },
  { text: "[ok] voice-agent   online" },
  { text: "[ok] uptime        99.9%" },
];

const CHAR_DELAY_MS = 26;
const LINE_PAUSE_MS = 380;

function Cursor() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-accent"
      style={{ animation: "blink 1s step-end infinite" }}
    />
  );
}

function LineContent({ line, text }: { line: Line; text: string }) {
  if (line.prompt) {
    return (
      <>
        <span className="text-accent">$ </span>
        <span className="text-text-primary">{text}</span>
      </>
    );
  }
  return <span className="text-text-secondary">{text}</span>;
}

export default function TerminalPanel() {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let line = 0;
    let char = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      char++;
      setCharIndex(char);

      if (char >= LINES[line].text.length) {
        timeoutId = setTimeout(() => {
          line++;
          char = 0;
          setLineIndex(line);
          setCharIndex(0);
          if (line < LINES.length) {
            timeoutId = setTimeout(tick, CHAR_DELAY_MS);
          }
        }, LINE_PAUSE_MS);
      } else {
        timeoutId = setTimeout(tick, CHAR_DELAY_MS);
      }
    };

    timeoutId = setTimeout(tick, CHAR_DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  const done = reducedMotion || lineIndex >= LINES.length;
  const visibleLines = reducedMotion ? LINES : LINES.slice(0, lineIndex);
  const activeLine = !reducedMotion && lineIndex < LINES.length ? LINES[lineIndex] : null;

  return (
    <div
      aria-hidden
      className="card-surface hidden w-[400px] shrink-0 p-0 font-mono text-[13px] leading-relaxed xl:block"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
        <span className="ml-2 text-[0.72rem] tracking-wide text-text-tertiary">
          fahad@portfolio:~
        </span>
      </div>

      <div className="min-h-[168px] px-4 py-4">
        {visibleLines.map((line, i) => (
          <div key={i} className={line.prompt && i > 0 ? "mt-3" : undefined}>
            <LineContent line={line} text={line.text} />
          </div>
        ))}

        {activeLine && (
          <div className={activeLine.prompt && lineIndex > 0 ? "mt-3" : undefined}>
            <LineContent line={activeLine} text={activeLine.text.slice(0, charIndex)} />
            <Cursor />
          </div>
        )}

        {done && (
          <div className="mt-3">
            <Cursor />
          </div>
        )}
      </div>
    </div>
  );
}
