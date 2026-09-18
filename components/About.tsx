import { profile, experience, education } from "@/lib/content";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

export default function About() {
  return (
    <section id="about" className="bg-bg-elevated section-py">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            about
          </span>
          <h2 className="heading-lg">Who I Am</h2>

          <div className="body-copy mt-6 space-y-4">
            <p>
              I&apos;m a <strong className="font-semibold text-text-primary">Computer Science undergraduate</strong>{" "}
              and startup founder building <strong className="font-semibold text-text-primary">AI voice-agent infrastructure</strong>{" "}
              for dental and aesthetic clinics, currently shipping products through Techudev.
            </p>
            <p>
              My work spans <strong className="font-semibold text-text-primary">full-stack web development</strong>,{" "}
              <strong className="font-semibold text-text-primary">agentic AI</strong> (Retell, Vapi, Livekit), and applied{" "}
              <strong className="font-semibold text-text-primary">cybersecurity</strong> — I&apos;m comfortable owning a
              product end-to-end, from architecture to shipping user-facing features.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring inline-flex min-h-11 items-center rounded text-text-primary"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring inline-flex min-h-11 items-center rounded text-text-primary"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-14 space-y-5">
          {experience.map((entry, i) => (
            <SpotlightCard key={entry.org} delay={i * 80} className="card-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-text-primary">
                  {entry.role} — {entry.org}
                </h3>
                <span className="font-mono text-[0.72rem] md:text-[0.68rem] font-medium tracking-[0.1em] text-text-secondary uppercase">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-accent-2">{entry.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-0.5 text-accent-2">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}

          <SpotlightCard delay={experience.length * 80} className="card-surface p-6 sm:p-7">
            <h3 className="text-lg font-bold text-text-primary">{education.degree}</h3>
            <p className="mt-1.5 text-sm text-text-secondary">
              {education.school} · {education.year}
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
