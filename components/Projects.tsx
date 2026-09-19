import { projects } from "@/lib/content";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Icon from "@/components/Icon";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-elevated section-py">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            projects
          </span>
          <h2 className="heading-lg">Things I&apos;ve Built</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <SpotlightCard
              key={project.title}
              delay={i * 80}
              className="card-surface flex h-full flex-col gap-4 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div
                className={`icon-tile h-11 w-11 shrink-0 rounded-[10px] tint-${project.tint}`}>
                <Icon name={project.icon} />
              </div>
              <h3 className="text-[1.1rem] font-bold text-text-primary">{project.title}</h3>
              <p className="flex-1 text-sm leading-[1.7] text-text-secondary">
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
