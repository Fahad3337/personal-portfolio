import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { getProjectImages } from "@/lib/projectImages";
import Reveal from "@/components/Reveal";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const cover = getProjectImages(project.slug)[0];
            return (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-border-hover"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-bg">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <ProjectPlaceholder project={project} />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[0.95rem] leading-snug font-bold text-text-primary">
                        {project.title}
                      </h3>
                      <span className="inline-flex shrink-0 items-center rounded-full border border-border px-3 py-1 text-[0.7rem] font-medium text-text-primary">
                        Details
                      </span>
                    </div>
                    <p className="text-[0.82rem] leading-[1.6] text-text-secondary">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
