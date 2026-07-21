import th from "../assets/notesbuddy.webp";
import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import Reacts from "../assets/tech/react.svg";
import bun from "../assets/tech/bun.svg";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const tech = { ts, js, node, next, Reacts, bun };

export default function Projects() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[32px] border-2 border-[var(--vast)] bg-[var(--white)]"
    >
      <div className="overflow-hidden border-b-2 border-[var(--vast)] bg-[var(--lumen-dark)]">
        <img
          src={th}
          alt="Syncify project"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display-title text-[28px] text-[var(--vast)] md:text-[32px]">
            Syncify
          </h3>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--vast)] bg-[var(--dawn)] transition-transform group-hover:rotate-12">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="text-[15px] leading-[1.45] text-[var(--fog)] md:text-[16px]">
          A comprehensive study platform with notes, flashcards, quizzes, AI
          chatbot, and interactive learning tools.
        </p>
        <div>
          <p className="mb-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--fog)]">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(tech).map(([id, src]) => (
              <span
                key={id}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--lumen)]"
              >
                <img src={src} alt="" className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
