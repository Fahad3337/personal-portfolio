import { projects } from "@/lib/content";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Icon from "@/components/Icon";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-elevated py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            projects
          </span>
          <h2 className="heading-lg">Things I&apos;ve Built</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <SpotlightCard
              key={project.title}
              delay={i * 80}
              className="card-surface flex h-full flex-col gap-3 p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
            >
              <div
                className={`icon-tile h-9 w-9 shrink-0 rounded-lg tint-${project.tint}`}>
                <Icon name={project.icon} className="h-4 w-4" />
              </div>
              <h3 className="text-[1rem] font-bold text-text-primary">{project.title}</h3>
              <p className="flex-1 text-[0.85rem] leading-[1.65] text-text-secondary">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip border-accent/20 bg-accent/10 text-accent-2">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
