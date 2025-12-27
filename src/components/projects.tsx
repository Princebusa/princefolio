import Projects from './projectsCard'
import { motion } from "motion/react";

export default function Project() {
  return (
    <div className=" relative ">
      <div className=" h-10   dots-bg">
        <div className="w-full h-full [background:var(--shad-bg)]"></div>
      </div>
      <div className="w-full relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="max-width pattern-bg relative before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="bg-white dark:bg-[#09090b]  w-33 md:leading-9 leading-8 px-4 py-0 text-[var(--forground)] relative font-medium md:text-[27px] text-[22px] after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:left-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]"
          >
            Projects
          </motion.h3>
        </div>
      </div>

      <div className="max-width grid md:grid-cols-2 p-4 gap-4 relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <Projects />
      </div>
    </div>
  );
}
