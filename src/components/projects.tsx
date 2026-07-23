import ProjectCard from "./projectsCard";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function Project() {
  return (
    <section id="projects" className="">
      <div className="noise section-panel bg-[#1a1a1a] px-4 py-10 sm:px-6 sm:py-12 md:px-12 md:py-16">
        <div className="page-shell !px-0">
          <div className="mb-6 text-center sm:mb-8 md:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="display-title text-[32px] text-[var(--lumen)] sm:text-[40px] md:text-[56px]"
            >
              Projects that <span className="italic-accent">ship</span>
            </motion.h2>
            <p className="mx-auto mt-3 max-w-lg px-2 text-[15px] leading-[1.45] text-[var(--lumen-dark)] sm:mt-4 sm:text-[16px] md:text-[18px]">
              A few products and experiments I&apos;ve built end to end.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
