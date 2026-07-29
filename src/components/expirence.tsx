import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import dechub from "../assets/dechub_logo.jfif";

const roles = [
  {
    company: "Dechub",
    title: "Full Stack Developer",
    period: "May 25 - Present",
    location: "Bangalore, IN",
    locationType: "Remote",
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
    period: "Jan 25 - May 25",
    location: "Bangalore, IN",
    locationType: "Remote",
    points: [
      "Assisted in building production-ready features using React, JavaScript, and REST APIs",
      "Implemented responsive layouts and UI components with Tailwind CSS",
      "Worked closely with senior developers to debug, refactor, and improve performance",
      "Integrated frontend components with backend services and API data flows",
    ],
  },
];

export default function Exp() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleRole = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="experience"
      className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="section-label">Experience</h2>
      </div>

      <div className="flex flex-col">
        {roles.map((role, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={`${role.title}-${role.period}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="border-t border-[var(--border)] first:border-t-0"
            >
              <button
                type="button"
                onClick={() => toggleRole(index)}
                aria-expanded={isOpen}
                className="-mx-5 flex w-[calc(100%+2.5rem)] cursor-pointer flex-row items-start justify-between gap-3 px-5 py-5 text-left transition-colors hover:bg-[var(--lumen-dark)]/60 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:gap-6 sm:px-8"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <img
                    src={dechub}
                    alt={role.company}
                    className="h-10 w-10 shrink-0 rounded-lg border border-[var(--border)] object-cover"
                  />
                  <div className="min-w-0">
                    <p
                      className="text-[15px] font-medium text-[var(--vast)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {role.company}
                    </p>
                    <p className="mt-0.4 text-[13px] text-[var(--charcoal)]/60 font-medium">
                      {role.title}
                    </p>
                   
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-end gap-3">
                 <div className="">
                <div className="flex items-center justify-end gap-3 ">
                <p
                    className="whitespace-nowrap text-right text-[12px] font-medium text-[var(--dawn)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {role.period}
                  </p>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-[var(--fog)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                  <div>
                  <p className="mt-1 whitespace-nowrap text-right text-[13px] text-[var(--fog)]">
                      {role.location}{" "} 
                     
                      {window.innerWidth > 768 && `· ${role.locationType}`}

                    </p>
                  </div>
                 </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-col gap-2 border-t border-[var(--border)] px-0 pb-5 pt-4 sm:pl-0">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-4 text-[13px] leading-[1.55] text-[var(--charcoal)]/70 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--glow)] sm:text-[14px]"
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
    </section>
  );
}
