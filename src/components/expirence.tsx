import { motion } from "motion/react";
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
  return (
    <section id="experience" className="pb-10 md:pb-16">
      <div className="page-shell">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--fathom)]">
            Career
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="display-title text-[40px] text-[var(--vast)] md:text-[56px]"
          >
            Experience
          </motion.h2>
        </div>

        <div className="chamber bg-[var(--lumen)]">
          {roles.map((role, index) => (
            <motion.div
              key={`${role.title}-${role.period}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`px-6 py-8 md:px-10 md:py-10 ${
                index < roles.length - 1 ? "border-b-2 border-[var(--vast)]" : ""
              }`}
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex items-center gap-3">
                  <img
                    src={dechub}
                    alt={role.company}
                    className="h-12 w-12 rounded-[12px] border-2 border-[var(--vast)] object-cover"
                  />
                  <div>
                    <p className="text-[20px] font-semibold text-[var(--vast)] md:text-[22px]">
                      {role.company}
                    </p>
                    <p className="text-[15px] font-medium text-[var(--fog)]">
                      {role.title}
                    </p>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="text-[14px] font-semibold text-[var(--fathom)]">
                    {role.period}
                  </p>
                  <p className="text-[14px] text-[var(--fog)]">{role.location}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5 pl-1">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-[15px] leading-[1.45] text-[var(--charcoal)] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--glow)] md:text-[16px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
