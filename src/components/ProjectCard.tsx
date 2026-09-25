import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative aspect-4/3 overflow-hidden">
      <Image
        src={cloudinaryImage(project.images[0])}
        alt={project.title}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex -translate-x-full flex-col px-4 items-center justify-center bg-black/70 transition-transform duration-700 group-hover:translate-x-0">
        <h3 className="mb-5 text-xl font-light uppercase tracking-wider text-white">
          {project.title}
        </h3>

        <Link
          href={`/projects/${project.slug}`}
          className="rounded bg-orange-800 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-grey-800"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
