import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import SubpageHero from "@/components/SubpageHero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <SubpageHero
        title={project.title}
        parent="Projects"
        parentHref="/projects"
      />

      <section className="mx-auto max-w-6xl px-10 py-16 md:px-20">
        <ProjectCarousel title={project.title} images={project.images} />

        <div className="mt-16">
          <div>
            <h2 className="mb-2 text-2xl font-light uppercase text-grey-900">
              About This Project
            </h2>
            <div className="mb-5 h-px w-10 bg-orange-800" />
          </div>

          <p className="max-w-4xl text-sm leading-7 text-grey-600">
            {project.desc}
          </p>
        </div>
      </section>
    </main>
  );
}
