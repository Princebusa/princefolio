import th from "../assets/notesbuddy.webp";
import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import Reacts from "../assets/tech/react.svg";
import bun from "../assets/tech/bun.svg";
import { motion } from "motion/react";
import { GithubIcon, Globe } from "lucide-react";

const tech = { ts, js, node, next, Reacts, bun };

export default function Projects() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[18px] border-2 border-[var(--vast)] bg-[var(--lumen)] sm:rounded-[22px]"
    >
      <div className="overflow-hidden border-b-2 border-[var(--vast)] bg-[var(--lumen-dark)]">
        <img
          src={th}
          alt="Syncify project"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display-title text-[24px] text-[var(--vast)] sm:text-[28px] md:text-[32px]">
            Syncify
          </h3>
       
        </div>
        <p className="text-[14px] leading-[1.5] text-[var(--fog)] sm:text-[15px] md:text-[16px]">
          A comprehensive study platform with notes, flashcards, quizzes, AI
          chatbot, and interactive learning tools.
        </p>
        <div>
          <p className=" text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--fog)]">
            Technologies
          </p>
          <div className="flex flex-wrap gap-0">
            {Object.entries(tech).map(([id, src]) => (
              <span
                key={id}
                className="flex h-9 w-9 items-center justify-center rounded-full  border-[var(--border)] bg-[var(--lumen)]"
              >
                <img src={src} alt="" className="h-5 w-5" />
              </span>
            ))}
          </div>
          <div className="mt-3 flex gap-2 sm:items-center">
            <div className="w-full rounded-[9px] bg-[var(--dawn)] px-4 py-2.5 text-[var(--lumen)]">
              <a href="" className="flex items-center justify-center gap-2 text-[14px] font-semibold sm:text-[15px]">
                <Globe size={16} />
                View Demo</a>
            </div>
            <div className="w-full rounded-[9px] bg-[var(--vast)] px-4 py-2.5 text-[var(--lumen)]">
              <a href="" className="flex items-center justify-center gap-2 text-[14px] font-semibold sm:text-[15px]">
                <GithubIcon size={16} />
                View Code</a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
