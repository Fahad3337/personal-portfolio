"use client";

import { useEffect, useRef } from "react";

const COLS = 40;
const ROWS = 23;
/* Monospace cells are taller than wide, so the horizontal radius is scaled up
   to keep the cube from looking squashed. */
const RADIUS_X = 10.8;
const RADIUS_Y = 6.4;
/* The X tilt pushes the projection upward, so the grid centre is nudged down. */
const Y_OFFSET = 1.6;
const DISTANCE = 4;
const RAMP = ".:-=+*#%@";

const VERTICES: readonly [number, number, number][] = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];

const EDGES: readonly [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

export default function AsciiCube() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const cells = new Array<string>(COLS * ROWS);
    const depths = new Float32Array(COLS * ROWS);

    const render = (angleX: number, angleY: number) => {
      cells.fill(" ");
      depths.fill(Infinity);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const points = VERTICES.map(([x, y, z]) => {
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;
        const ry = y * cosX - rz * sinX;
        const depth = y * sinX + rz * cosX;
        const scale = DISTANCE / (DISTANCE + depth);
        return {
          x: COLS / 2 + rx * scale * RADIUS_X,
          y: ROWS / 2 + Y_OFFSET + ry * scale * RADIUS_Y,
          depth,
        };
      });

      for (const [from, to] of EDGES) {
        const a = points[from];
        const b = points[to];
        const steps =
          Math.ceil(Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y) * 2)) + 1;

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const col = Math.round(a.x + (b.x - a.x) * t);
          const row = Math.round(a.y + (b.y - a.y) * t);
          if (col < 0 || col >= COLS || row < 0 || row >= ROWS) continue;

          const depth = a.depth + (b.depth - a.depth) * t;
          const index = row * COLS + col;
          if (depth >= depths[index]) continue;

          depths[index] = depth;
          const nearness = 1 - (depth + 1.8) / 3.6;
          const rampIndex = Math.min(
            RAMP.length - 1,
            Math.max(0, Math.round(nearness * (RAMP.length - 1))),
          );
          cells[index] = RAMP[rampIndex];
        }
      }

      let out = "";
      for (let row = 0; row < ROWS; row++) {
        out += cells.slice(row * COLS, (row + 1) * COLS).join("") + "\n";
      }
      pre.textContent = out;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      render(-0.45, 0.7);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const elapsed = (now - start) / 1000;
      render(-0.45 + Math.sin(elapsed * 0.35) * 0.16, elapsed * 0.55);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden
      className="hidden shrink-0 font-mono text-[12px] leading-none text-accent/70 select-none xl:block"
      style={{
        width: `${COLS}ch`,
        height: `${ROWS}em`,
        textShadow: "0 0 12px rgba(34, 197, 94, 0.35)",
      }}
    />
  );
}
