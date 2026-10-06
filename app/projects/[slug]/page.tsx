import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/content";
import { getProjectImages } from "@/lib/projectImages";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import Footer from "@/components/Footer";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = getProjectImages(project.slug);

  return (
    <>
      <main className="flex-1 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[960px] px-5 sm:px-6">
          <Link
            href="/#projects"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <span aria-hidden>←</span> Back to projects
          </Link>

          <article className="card-surface mt-4 overflow-hidden hover:border-border hover:bg-card">
            <div className="border-b border-border">
              {images.length > 0 ? (
                <ProjectGallery images={images} title={project.title} />
              ) : (
                <div className="relative aspect-[16/10]">
                  <ProjectPlaceholder project={project} large />
                </div>
              )}
            </div>

            <div className="p-6 sm:p-10">
              <h1 className="text-2xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                {project.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.description}
              </p>

              {project.details && (
                <>
                  <h2 className="mt-9 text-lg font-bold text-text-primary">What it does</h2>
                  <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-text-secondary">
                    {project.details.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span aria-hidden className="text-accent-2">
                          ▸
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 className="mt-9 text-lg font-bold text-text-primary">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip border-accent/20 bg-accent/10 text-accent-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
