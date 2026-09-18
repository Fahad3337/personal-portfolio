import { profile } from "@/lib/content";
import Icon, { type IconName } from "@/components/Icon";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", href: profile.github, icon: "github" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
        <a
          href="#top"
          className="focus-ring inline-flex min-h-11 items-center rounded font-mono text-base font-bold tracking-tight text-text-primary"
        >
          fahad<span className="text-accent">_</span>
        </a>

        <p className="font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
