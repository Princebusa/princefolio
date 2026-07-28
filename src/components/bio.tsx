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

const categories = [
  {
    label: "01 · Language",
    items: [
      { img: ts, name: "TypeScript" },
      { img: js, name: "JavaScript" },
    ],
  },
  {
    label: "02 · Frontend",
    items: [
      { img: React, name: "React" },
      { img: next, name: "Next.js" },
      { img: tailwind, name: "Tailwind" },
      { img: shdcn, name: "shadcn/ui" },
      { img: tanstack, name: "TanStack" },
    ],
  },
  {
    label: "03 · Backend",
    items: [
      { img: node, name: "Node.js" },
      { img: bun, name: "Bun" },
      { img: mongo, name: "MongoDB" },
      { img: sql, name: "MySQL" },
    ],
  },
  {
    label: "04 · Tools",
    items: [{ img: git, name: "Git" }],
  },
];

export default function Bio() {
  return (
    <section id="stack" className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="section-label">Stack</h2>
      </div>

      <div className="flex flex-col">
        {categories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="border-t border-[var(--border)] py-5 first:border-t-0 first:pt-0"
          >
            <p
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--fog)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((itm) => (
                <span key={itm.name} className="chip">
                  <img src={itm.img} alt="" className="h-4 w-4" />
                  {itm.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
