import type { ReactNode } from "react";
import { profile, experience, education } from "@/lib/content";
import Reveal from "@/components/Reveal";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Studying", value: `${education.degree}, ${education.school.split(",")[0]}` },
  { label: "Focus", value: "Agentic AI & full-stack web" },
];

function TimelineItem({
  title,
  meta,
  subtitle,
  children,
}: {
  title: string;
  meta: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pl-7">
      <span
        aria-hidden
        className="absolute top-[0.45rem] left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg-elevated"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-base font-bold text-text-primary sm:text-lg">{title}</h4>
        <span className="font-mono text-[0.7rem] tracking-[0.12em] text-text-tertiary uppercase">
          {meta}
        </span>
      </div>
      <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
      {children}
    </li>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-bg-elevated section-py">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            about
          </span>
          <h2 className="heading-lg">Who I Am</h2>

          <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.8] text-text-secondary sm:text-base">
            <p>
              I&apos;m a Computer Science undergraduate and the founder of Dentivoice, where I build
              AI voice agents that answer calls and book appointments for dental clinics.
            </p>
            <p className="max-sm:hidden">
              Alongside that I build full-stack web products, from internal hospital systems to
              stock management for a pharmaceutical supplier. I&apos;m comfortable owning a product
              end to end, from architecture to shipping.
            </p>
          </div>

          <dl className="max-sm:hidden mt-8 max-sm:mt-6 divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="last:max-sm:hidden flex items-baseline justify-between gap-6 py-3 max-sm:flex-col max-sm:gap-1"
              >
                <dt className="font-mono text-[0.7rem] tracking-[0.12em] text-text-tertiary uppercase">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm font-medium text-text-primary max-sm:text-left">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="font-mono text-xs font-medium tracking-[0.2em] text-text-tertiary uppercase">
            Experience
          </h3>
          <ol className="mt-6 space-y-9 max-sm:space-y-7 border-l border-border">
            {experience.map((entry) => (
              <TimelineItem
                key={entry.org}
                title={`${entry.role} · ${entry.org}`}
                meta={entry.period}
                subtitle={entry.subtitle}
              >
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary">
                  {entry.bullets.map((bullet, bi) => (
                    <li key={bullet} className={`flex gap-3 ${bi > 0 ? "max-sm:hidden" : ""}`}>
                      <span aria-hidden className="mt-[0.6rem] h-px w-2.5 shrink-0 bg-text-tertiary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </ol>

          <h3 className="mt-12 font-mono text-xs font-medium tracking-[0.2em] text-text-tertiary uppercase">
            Education
          </h3>
          <ol className="mt-6 border-l border-border">
            <TimelineItem title={education.degree} meta={education.year} subtitle={education.school} />
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
