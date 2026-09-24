"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) =>
        current === projects.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-10 md:px-20">
        {/* Heading */}
        <div className="pt-16">
          <h2 className="mb-2 text-2xl font-semibold text-grey-900">
            Recent Projects
          </h2>
          <div className="mb-5 h-px w-10 bg-orange-800" />
        </div>

        {/* Desktop */}
        <div className="hidden grid-cols-2 gap-8 pb-16 md:grid lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Mobile */}
        <div className="pb-10 md:hidden">
          <div className="overflow-hidden">
            <div key={index} className="animate-slide-in-right">
              <ProjectCard project={projects[index]} />
            </div>
          </div>

          {/* Carousel dots */}
          <div className="mt-5 flex justify-center gap-2">
            {projects.map((project, projectIndex) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setIndex(projectIndex)}
                aria-label={`Show project ${projectIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  projectIndex === index
                    ? "bg-orange-800"
                    : "bg-grey-400 hover:bg-grey-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
