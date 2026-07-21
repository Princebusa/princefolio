import Projects from "./projectsCard";
import { motion } from "motion/react";

export default function Project() {
  return (
    <section id="projects" className="pb-10 md:pb-16">
      <div className="bg-[var(--vast)] rounded-[80px] px-6 py-12 md:px-12 md:py-16">
        <div className=" page-shell  ">
          <div className="mb-8 text-center md:mb-10 ">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--dawn)]">
              Selected work
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="display-title text-[40px] text-[var(--lumen)] md:text-[56px]"
            >
              Projects that <span className="italic-accent">ship</span>
            </motion.h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.45] text-[var(--lumen-dark)] md:text-[18px]">
              A few products and experiments I&apos;ve built end to end.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Projects />
            <Projects />
          </div>
        </div>
      </div>
    </section>
  );
}
