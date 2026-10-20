import PageHero from "@/components/PageHero";
import ProjectFilter from "@/components/ProjectFilter";
import { getProjects } from "@/data/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <PageHero title="Projects" />
      <ProjectFilter projects={projects} />
    </main>
  );
}
