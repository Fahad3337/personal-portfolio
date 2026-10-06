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

// Calendly reads these query params to match the embed to the site's dark theme
// and to skip its own cookie banner inside the frame.
const calendlyEmbed = `${profile.calendly}?${new URLSearchParams({
  hide_gdpr_banner: "1",
  background_color: "0a0a0a",
  text_color: "f4f4f5",
  primary_color: "22c55e",
})}`;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden section-py">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[680px] -translate-x-1/2 opacity-[0.18] blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="container-page relative grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span aria-hidden>{"//"}</span>
              contact
            </span>
            <h2 className="heading-lg">Let&apos;s Work Together</h2>
            <p className="body-copy mt-5">
              Open to freelance work, collaborations, or just want to say hi. Reach out through any
              of the channels below, or book a call directly on my calendar.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 80}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-halo focus-ring group flex items-center gap-4 p-4 sm:p-5"
                >
                  <span
                    className={`icon-tile h-11 w-11 shrink-0 rounded-xl transition-transform duration-300 group-hover:scale-110 tint-${channel.tint}`}
                  >
                    <Icon name={channel.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.72rem] tracking-[0.15em] text-text-tertiary uppercase md:text-[0.68rem]">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-text-primary transition-colors group-hover:text-accent sm:text-base">
                      {channel.value}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-text-tertiary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs tracking-[0.1em] text-text-tertiary uppercase">
            {profile.location}
          </p>
        </div>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <iframe
              src={calendlyEmbed}
              title="Book a 30-minute call with Fahad"
              loading="lazy"
              className="block h-[700px] w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-text-tertiary">
            Calendar not loading?{" "}
            <a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring rounded text-text-secondary"
            >
              Open it on Calendly
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
