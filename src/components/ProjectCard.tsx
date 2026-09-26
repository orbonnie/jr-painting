"use client";

import { type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type ProjectCardProps = {
  project: Project;
  mobileOpen?: boolean;
  setMobileOpen?: Dispatch<SetStateAction<boolean>>;
  onHoverChange?: (hovered: boolean) => void;
};

export default function ProjectCard({
  project,
  mobileOpen = false,
  setMobileOpen = () => {},
  onHoverChange,
}: ProjectCardProps) {
  return (
    <div
      className="group relative aspect-4/3 overflow-hidden"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <button
        type="button"
        onClick={() => setMobileOpen((open) => !open)}
        className="relative block aspect-4/3 w-full overflow-hidden"
        aria-label={`${mobileOpen ? "Hide" : "Show"} project details`}
      >
        <Image
          src={cloudinaryImage(project.images[0])}
          alt={project.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </button>

      {/* Hover overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 px-4 transition-transform duration-700
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          [@media(hover:hover)]:-translate-x-full
          [@media(hover:hover)]:group-hover:translate-x-0`}
      >
        <h3 className="mb-5 text-xl font-light uppercase tracking-wider text-white">
          {project.title}
        </h3>

        <Link
          href={`/projects/${project.slug}`}
          onClick={(event) => event.stopPropagation()}
          className="rounded bg-orange-800 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-grey-800"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
