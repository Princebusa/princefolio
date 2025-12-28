import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import nextLight from '../assets/tech/nextjs2-dark.svg'
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
  { img: ts, class: "hidden [html.light_&]:block" },
  { img: js, class: "hidden [html.light_&]:block" },
  { img: node, class: "hidden [html.light_&]:block" },
  { img: sql, class: "hidden [html.light_&]:block" },
  { img: next, class: "hidden [html.light_&]:block" },
  { img: nextLight, class: "hidden [html.dark_&]:block"},
  { img: bun, class: "hidden [html.light_&]:block" },
  { img: React, class: "hidden [html.light_&]:block" },
  { img: tailwind, class: "hidden [html.light_&]:block" },
  { img: mongo, class: "hidden [html.light_&]:block" },
  { img: git, class: "hidden [html.light_&]:block" },
  { img: shdcn, class: "hidden [html.light_&]:block" },
  { img: tanstack, class: "hidden [html.light_&]:block" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 4,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0,
     ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
export default function bio() {
  return (
    <>
    { next}
      <div className="max-width relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          className="p-4 md:text-[1rem] text-[.9rem] font-[400] md:leading-[26px] leading-[22px] text-neutral-500"
        >
          Full-stack developer with experience in crafting end-to-end web
          solutions. From responsive UIs to reliable backend systems, I enjoy
          building complete products. Passionate about clean code, performance,
          and great user experiences.
        </motion.p>
      </div>
      <div className="relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="pattern-bg max-width relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="bg-white dark:bg-[#09090b] w-25 md:leading-9 leading-8 px-4 py-0 text-[var(--forground)] relative font-medium md:text-[27px] text-[22px] after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-0 after:absolute after:bg-[var(--edge-line)]"
          >
            Stack
          </motion.h3>
        </div>
        <div className="relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)]">
          <div className="bg-gray-100/40 dark:bg-gray-100/5 max-width flex gap-4 p-4 relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="cursor-pointer flex gap-4 flex-wrap items-center"
            >
              {tech.map((itm, id) => (
                //@ts-igoner
                <motion.img key={id} src={itm.img}  variants={item} 
          className="w-7 opacity-80 hover:opacity-100 transition"/>  
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
