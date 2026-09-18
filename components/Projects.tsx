import { projects } from "@/lib/content";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Icon from "@/components/Icon";

export default function Projects() {
  const [featured, ...rest] = projects;

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
          <div className="md:col-span-2">
            <SpotlightCard className="card-surface h-full p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div
                  className={`icon-tile h-14 w-14 shrink-0 rounded-2xl tint-${featured.tint}`}>
                  <Icon name={featured.icon} className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <span className="font-mono text-[0.72rem] md:text-[0.68rem] tracking-[0.15em] text-accent-2 uppercase">
                    Featured
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-text-primary sm:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-[1.75] text-text-secondary">
                    {featured.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {featured.stack.map((tech) => (
                      <span key={tech} className="chip border-accent/20 bg-accent/10 text-accent-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {rest.map((project, i) => (
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
