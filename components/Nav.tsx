"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Written straight to the DOM — this fires on every scroll frame.
      const bar = progressRef.current;
      if (bar) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        bar.style.transform = `scaleX(${Math.min(progress, 1)})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page behind the full-screen menu from scrolling.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    // Track every section currently in the band and pick the first in document
    // order, so the highlight also clears when scrolling back up into the hero.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        const current = links.find((link) => visible.has(link.href.slice(1)));
        setActive(current ? current.href.slice(1) : "");
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex items-center justify-between py-3"
      >
        <a
          href="#top"
          className="focus-ring inline-flex min-h-11 items-center rounded font-mono text-[1.05rem] font-bold tracking-tight text-text-primary"
        >
          fahad<span className="text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={`focus-ring inline-flex min-h-11 items-center rounded-md px-3.5 font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "text-accent"
                    : "text-text-secondary hover:bg-white/[0.06] hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary ml-2 px-5 text-xs">
              Say Hi
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent transition-colors hover:border-accent/50 sm:hidden"
        >
          <span aria-hidden>☰</span>
        </button>
      </nav>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
        />
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg px-5 pt-3 pb-10 sm:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex min-h-11 items-center font-mono text-[1.05rem] font-bold tracking-tight text-text-primary">
              fahad<span className="text-accent">_</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-border text-xl text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <span aria-hidden>✕</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col gap-1">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring group flex min-h-14 items-center gap-4 rounded-lg border-b border-border/60 px-1 text-2xl font-bold text-text-primary transition-colors hover:text-accent"
              >
                <span aria-hidden className="font-mono text-xs font-medium text-accent">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Say Hi
          </a>
        </div>
      )}
    </header>
  );
}
