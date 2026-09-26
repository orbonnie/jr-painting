"use client";

import { useEffect, useState } from "react";
import { projects as projectData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type ProjectsProps = {
  title?: string;
  projects?: typeof projectData;
  carousel?: boolean;
};

export default function Projects({
  title = "Recent Projects",
  projects = projectData,
  carousel = true,
}: ProjectsProps) {
  const [index, setIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!carousel || mobileOpen || hovered) return;

    const interval = setInterval(() => {
      setIndex((current) =>
        current === projects.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [carousel, mobileOpen, hovered, projects.length]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-10 md:px-20">
        {/* Heading */}
        {title && (
          <div className="pt-16">
            <h2 className="mb-2 text-2xl font-semibold text-grey-900">
              {title}
            </h2>

            <div className="mb-5 h-px w-10 bg-orange-800" />
          </div>
        )}

        {/* Desktop */}
        <div className="hidden grid-cols-2 gap-8 pb-16 md:grid lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Mobile */}
        {carousel ? (
          <div
            key={projects.map((project) => project.slug).join("-")}
            className="pb-10 md:hidden"
          >
            {projects.length > 0 && (
              <>
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="overflow-hidden"
                >
                  <div key={index} className="animate-slide-in-right">
                    <ProjectCard
                      project={projects[index]}
                      mobileOpen={mobileOpen}
                      setMobileOpen={setMobileOpen}
                      onHoverChange={setHovered}
                    />
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
              </>
            )}
          </div>
        ) : (
          /* Stacked mobile projects */
          <div className="grid grid-cols-1 gap-8 pb-16 md:hidden">
            {projects.map((project) => (
              <StackedProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StackedProjectCard({
  project,
}: {
  project: (typeof projectData)[number];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ProjectCard
      project={project}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
    />
  );
}
