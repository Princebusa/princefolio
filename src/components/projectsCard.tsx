import { motion } from "motion/react";
import { GithubIcon, Globe } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[18px] border-2 border-[var(--vast)] bg-[var(--lumen)] sm:rounded-[22px]"
    >
      <div className="overflow-hidden border-b-2 border-[var(--vast)] bg-[var(--lumen-dark)]">
        <img
          src={project.image}
          alt={`${project.title} project`}
          className=" w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display-title text-[24px] text-[var(--vast)] sm:text-[28px] md:text-[28px] !tracking-[.2px]">
            {project.title}
          </h3>
        </div>
        <p className="text-[14px] leading-[1.5] text-[var(--fog)] sm:text-[15px] md:text-[16px]">
          {project.description}
        </p>
        <div>
          {/* <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--fog)]">
            Technologies
          </p>
          <div className="flex flex-wrap gap-0">
            {project.tech.map((item) => (
              <span
                key={item.id}
                className="flex h-9 w-9 items-center justify-center rounded-full border-[var(--border)] bg-[var(--lumen)]"
              >
                <img src={item.icon} alt="" className="h-5 w-5" />
              </span>
            ))}
          </div> */}
          <div className="mt-3 flex gap-2 sm:items-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-[9px] bg-[var(--dawn)] px-4 py-2.5 text-[14px] font-semibold !text-white sm:text-[15px]"
              >
                <Globe size={16} />
                View Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-[9px] bg-[var(--vast)] px-4 py-2.5 text-[14px] font-semibold !text-white sm:text-[15px]"
              >
                <GithubIcon size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
