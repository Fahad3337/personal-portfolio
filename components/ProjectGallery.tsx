"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div className="relative">
      <div className="relative aspect-[16/10] bg-bg">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1} of ${count}`}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-contain"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="focus-ring absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-text-primary backdrop-blur transition-colors hover:border-border-hover hover:text-accent"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="focus-ring absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-text-primary backdrop-blur transition-colors hover:border-border-hover hover:text-accent"
            >
              <span aria-hidden>→</span>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-1.5 px-4 py-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="focus-ring group flex h-6 flex-1 items-center"
            >
              <span
                className={`h-1 w-full rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-white/15 group-hover:bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
