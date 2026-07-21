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
    <section id="stack" className="pb-10 md:pb-16">
      <div className="page-shell">
        <div className="chamber bg-[var(--lumen)] px-6 py-12 text-[var(--vast)] md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--fathom)]">
              About
            </p>
            <h2 className="display-title text-[36px] md:text-[52px]">
              I craft end-to-end web{" "}
              <span className="italic-accent">solutions</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.5] text-[var(--fog)] md:text-[18px]">
              From responsive UIs to reliable backend systems, I enjoy building
              complete products. Passionate about clean code, performance, and
              great user experiences.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--fog)]">
              Stack
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {tech.map((itm) => (
                <motion.div
                  key={itm.name}
                  variants={item}
                  className="flex items-center gap-2 rounded-full border-2 border-[var(--vast)] bg-[var(--white)] px-3.5 py-2"
                >
                  <img src={itm.img} alt="" className="h-5 w-5" />
                  <span className="text-[13px] font-semibold text-[var(--vast)]">
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
