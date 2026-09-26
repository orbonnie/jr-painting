"use client";

import { useState } from "react";
import Projects from "@/components/Projects";
import { projects, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters = [
  { label: "All", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
  { label: "Residential", value: "residential" },
] as const;

export default function ProjectFilter() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 md:px-20">
          <div className="pb-12 pt-18">
            <div className="flex justify-center">
              <div className="w-fit border border-grey-400 px-10 py-4">
                <div className="flex flex-wrap justify-center gap-x-3">
                  {filters.map((item, index) => (
                    <div key={item.value} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setFilter(item.value)}
                        className={`uppercase text-xs font-semibold ${
                          filter === item.value
                            ? "font-bold text-orange-800"
                            : "text-grey-800 hover:text-orange-800"
                        }`}
                      >
                        {item.label}
                      </button>

                      {index < filters.length - 1 && (
                        <span className="ml-3 text-grey-500">/</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects
        key={filter}
        title=""
        projects={filteredProjects}
        carousel={false}
      />
    </>
  );
}
