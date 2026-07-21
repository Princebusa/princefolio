import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import React from "../assets/tech/react.svg";
import bun from "../assets/tech/bun.svg";
import tailwind from "../assets/tech/tailwindcss.svg";
import mongo from "../assets/tech/mongodb.svg";
import sql from "../assets/tech/mysql.svg";
import git from "../assets/tech/git.svg";
import shdcn from "../assets/tech/shadcn-ui-light.svg";
import tanstack from "../assets/tech/tanstack-light.svg";
import { motion } from "motion/react";

const tech = [
  { img: ts, name: "TypeScript" },
  { img: js, name: "JavaScript" },
  { img: React, name: "React" },
  { img: next, name: "Next.js" },
  { img: node, name: "Node.js" },
  { img: bun, name: "Bun" },
  { img: tailwind, name: "Tailwind" },
  { img: mongo, name: "MongoDB" },
  { img: sql, name: "MySQL" },
  { img: git, name: "Git" },
  { img: shdcn, name: "shadcn/ui" },
  { img: tanstack, name: "TanStack" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Bio() {
  return (
    <section id="stack" className="mb-8 mt-[-48px] rounded-b-[28px] bg-[#034f46] px-4 pb-10 pt-14 sm:mb-10 sm:mt-[-64px] sm:rounded-b-[40px] sm:pb-12 sm:pt-16 md:mb-16 md:mt-[-80px] md:rounded-b-[60px] md:pb-16 md:pt-20">
      <div className="page-shell">
        <div className="text-[var(--vast)] md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display-title text-[30px] text-[var(--lumen)] sm:text-[36px] md:text-[52px]">
              My{" "}
              <span className="italic-accent">Weapons</span>
            </h2>
           
          </div>

          <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {tech.map((itm) => (
                <motion.div
                  key={itm.name}
                  variants={item}
                  className="flex items-center gap-2 rounded-full border-2 border-[var(--vast)] bg-[var(--white)] px-3 py-1.5 sm:px-3.5 sm:py-2"
                >
                  <img src={itm.img} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-[12px] font-semibold text-[var(--vast)] sm:text-[13px]">
                    {itm.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
