import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import dechub from "../assets/dechub_logo.jfif";

const roles = [
  {
    company: "Dechub",
    title: "Full Stack Developer",
    period: "May 2025 — Present",
    location: "Bangalore, India (Remote)",
    points: [
      "Developing and maintaining scalable full-stack applications using React, Next.js, Node.js, and modern APIs",
      "Designing clean, responsive UIs with Tailwind CSS and smooth motion-based interactions",
      "Optimizing applications for speed, SEO, and accessibility",
      "Building secure, high-performance backend services for auth, databases, and server logic",
    ],
  },
  {
    company: "Dechub",
    title: "Full Stack Developer (Intern)",
    period: "Jan 2025 — May 2025",
    location: "Bangalore, India (Remote)",
    points: [
      "Assisted in building production-ready features using React, JavaScript, and REST APIs",
      "Implemented responsive layouts and UI components with Tailwind CSS",
      "Worked closely with senior developers to debug, refactor, and improve performance",
      "Integrated frontend components with backend services and API data flows",
    ],
  },
];

export default function Exp() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleRole = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="experience" className="pb-22 pt-20 md:pb-20 md:pt-20">
      <div className="page-shell flex flex-col items-center justify-center">
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="display-title text-[32px] text-[var(--vast)] sm:text-[40px] md:text-[56px]"
          >
            My <span className="italic-accent">Experience</span>
          </motion.h2>

          <p className="mx-auto mt-3 max-w-lg px-2 text-[15px] leading-[1.45] text-[var(--fog)] sm:mt-4 sm:text-[16px] md:text-[18px]">
            My work experience and previous guild affiliations.
          </p>
        </div>

        <div className="w-full max-w-[900px] rounded-[18px] bg-[var(--lumen)] sm:rounded-[22px]">
          {roles.map((role, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={`${role.title}-${role.period}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="mb-3 overflow-hidden rounded-[18px] border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_#034f46]/10 last:mb-0 sm:mb-4 sm:rounded-[22px] sm:shadow-[8px_8px_0px_0px_#034f46]/10"
              >
                <button
                  type="button"
                  onClick={() => toggleRole(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer flex-col gap-4 px-4 py-5 text-left transition-colors hover:bg-[var(--lumen-dark)]/35 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={dechub}
                      alt={role.company}
                      className="h-11 w-11 shrink-0 rounded-[10px] border-2 border-[var(--vast)] object-cover sm:h-12 sm:w-12 sm:rounded-[12px]"
                    />
                    <div className="min-w-0">
                      <p className="text-[18px] font-semibold text-[var(--vast)] sm:text-[20px] md:text-[22px]">
                        {role.company}
                      </p>
                      <p className="text-[14px] font-medium text-[var(--fog)] sm:text-[15px]">
                        {role.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
                    <div className="min-w-0 md:text-right">
                      <p className="text-[13px] font-semibold text-[var(--fathom)] sm:text-[14px]">
                        {role.period}
                      </p>
                      <p className="truncate text-[13px] text-[var(--fog)] sm:text-[14px]">
                        {role.location}
                      </p>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`shrink-0 text-[var(--dawn)] transition-transform duration-300 md:size-[30px] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-2.5 border-t-2 border-[var(--border)] p-4 sm:p-6 md:p-7">
                        {role.points.map((point) => (
                          <li
                            key={point}
                            className="relative pl-5 text-[14px] leading-[1.5] text-[var(--charcoal)] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--glow)] sm:text-[15px] md:text-[16px]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
