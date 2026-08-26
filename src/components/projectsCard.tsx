import { motion } from "motion/react";
import { ArrowUpRight, Github, GlobeIcon } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};





export default function ProjectCard({ project }: ProjectCardProps) {
  const isLive = Boolean(project.demoUrl && project.demoUrl !== "#");
  const  name  = project.title;
  const primaryHref = isLive ? project.demoUrl : project.codeUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <a
        href={primaryHref || project.codeUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-[180px] overflow-hidden rounded-[13px] sm:h-[200px]"
        style={{ background: project.gradient }}
      >
        {/* Preview framed bottom-right, clipped by card overflow */}
        <div className="absolute -bottom-12 -right-5 w-[100%] max-w-[320px] transition-transform duration-500 ease-out group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] sm:-bottom-8 sm:-right-8 sm:w-[100%]">
          <div className="overflow-hidden rounded-xl border-7 border-white/35 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-[2px] ring-1 ring-inset ring-white/25">
            <img
              src={project.image}
              alt={`${name} project`}
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </div>

        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={14} />
        </span>

       
      </a>

      <div className="flex flex-1 flex-col gap-3 py-4 px-2 sm:py-5 sm:px-2">
        <div>
          <h3
            className="text-[16px] font-medium leading-snug text-[var(--vast)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.title}
          </h3>
         
        </div>

        <p className="line-clamp-2 text-[13px] leading-[1.55] text-[var(--fog)]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.highlights.map((point) => (
            <span
              key={point}
              className="inline-flex items-center rounded-full border border-[var(--dawn)]/20 bg-[var(--dawn)]/10 px-2 py-1 text-[11px] font-medium text-[var(--dawn)]"
            >
              {point}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2  pt-1 ">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-[var(--border)] bg-[var(--lumen-dark)] px-3 py-1 text-[12px] font-medium text-[var(--vast)] transition-colors hover:border-[var(--dawn)] hover:text-[var(--dawn)]"
            >
              Visit
              <GlobeIcon size={12} />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-[var(--border)] px-3 py-1 text-[12px] font-medium text-[var(--fog)] transition-colors hover:border-[var(--vast)]/30 hover:text-[var(--vast)]"
            >
              <Github size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
