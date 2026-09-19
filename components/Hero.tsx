import { profile, heroTitles } from "@/lib/content";
import Typewriter from "@/components/Typewriter";

const nameWords = profile.name.split(" ");

export default function Hero() {
  return (
    <section
      id="top"
      /* svh tracks the *small* viewport, so iOS Safari's collapsing address bar
         can't push the hero content out of view. min-h-screen is the fallback. */
      className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-height)] pb-16 min-h-svh sm:pb-0"
    >
      {/* Decorative background: drifting gradient mesh + dot grid, no photo.
          Purely presentational — kept quiet and behind the text. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-36 -left-36 h-[560px] w-[560px] rounded-full opacity-20 blur-[90px]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            animation: "drift 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full opacity-[0.15] blur-[90px]"
          style={{
            background: "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
            animation: "drift 20s ease-in-out infinite -6s",
          }}
        />
        <div
          className="absolute bottom-[-160px] left-1/3 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-[90px]"
          style={{
            background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)",
            animation: "drift 18s ease-in-out infinite -10s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        {/* Fade the hero into the section below */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-2xl text-left">
          <h1
            className="font-black tracking-[-0.04em]"
            style={{ fontSize: "var(--fs-hero)", lineHeight: 1.02 }}
          >
            {nameWords.map((word, i) => (
              <span
                key={word}
                className="headline-sheen rise mr-[0.25em] inline-block last:mr-0"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="rise mt-5 flex min-h-[1.6em] items-center justify-start gap-2 font-mono text-lg text-text-secondary sm:text-xl"
            style={{ animationDelay: "320ms" }}
          >
            <span aria-hidden className="text-accent">
              $
            </span>
            <Typewriter words={heroTitles} />
          </p>

          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg"
            style={{ animationDelay: "420ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:gap-4"
            style={{ animationDelay: "520ms" }}
          >
            <a href="#projects" className="btn btn-primary w-full xs:w-auto">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full xs:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="focus-ring absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] text-text-tertiary uppercase sm:flex"
        style={{ animation: "float-x-center 3s ease-in-out infinite" }}
      >
        Scroll
        <span
          aria-hidden
          className="h-10 w-px"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </a>
    </section>
  );
}
