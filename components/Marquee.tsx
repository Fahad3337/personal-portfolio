import { skills } from "@/lib/content";

const items = skills.flatMap((category) => category.items);

export default function Marquee() {
  return (
    <div className="marquee border-y border-border bg-bg py-5" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-8 px-8 font-mono text-sm whitespace-nowrap text-text-tertiary"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
