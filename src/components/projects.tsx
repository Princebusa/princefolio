import ProjectCard from "./projectsCard";
import { projects } from "../data/projects";

export default function Project() {
  return (
    <section id="projects" className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
      <div className="mb-6">
          <h2 className="section-label">Projects</h2>
        </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
