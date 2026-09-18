import { profile, type TintKey } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";

const channels: { label: string; value: string; href: string; icon: IconName; tint: TintKey }[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    tint: "emerald",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: "linkedin",
    tint: "sky",
  },
  {
    label: "GitHub",
    value: "See my code",
    href: profile.github,
    icon: "github",
    tint: "slate",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden section-py">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[680px] -translate-x-1/2 opacity-[0.18] blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="container-page relative text-center">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            contact
          </span>
          <h2 className="heading-lg">Let&apos;s Work Together</h2>
          <p className="body-copy mx-auto mt-5 text-center">
            Open to freelance work, collaborations, or just want to say hi — reach out through any
            of the channels below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 80} className="h-full">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-halo focus-ring group flex h-full flex-col items-center gap-3 p-6 sm:p-8"
              >
                <span
                  className={`icon-tile h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-110 tint-${channel.tint}`}>
                  <Icon name={channel.icon} />
                </span>
                <span className="font-mono text-[0.72rem] md:text-[0.68rem] tracking-[0.15em] text-text-tertiary uppercase">
                  {channel.label}
                </span>
                <span className="text-sm font-medium break-all text-text-primary transition-colors group-hover:text-accent">
                  {channel.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-mono text-xs tracking-[0.1em] text-text-tertiary uppercase">
          {profile.location}
        </p>
      </div>
    </section>
  );
}
