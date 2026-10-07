import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { getProjectImages } from "@/lib/projectImages";
import Reveal from "@/components/Reveal";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import ProjectSlider from "@/components/ProjectSlider";

function ProjectCard({ project }: { project: Project }) {
  const cover = getProjectImages(project.slug)[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-navy shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.28)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-900">
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
          <h3 className="text-[0.95rem] leading-snug font-bold text-white">
            {project.title}
          </h3>
          <span className="inline-flex shrink-0 items-center rounded-full border border-teal-400/40 bg-teal-400/10 px-3 py-1 text-[0.7rem] font-medium text-teal-300 transition-colors group-hover:bg-teal-400/20">
            Details
          </span>
        </div>
        <p className="text-[0.82rem] leading-[1.6] text-slate-400">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            projects
          </span>
          <h2 className="heading-lg">Things I&apos;ve Built</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 max-sm:hidden sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <ProjectSlider>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ProjectSlider>
        </div>
      </div>
    </section>
  );
}
