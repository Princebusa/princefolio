import prince from "../assets/prince.jpeg";
import heroBg from "../assets/hero.png";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="grain relative overflow-hidden pb-10 pt-28 md:pb-16 md:pt-36">
      {/* Full-bleed hero image with bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          }}
        />
        {/* Soft cream wash so text stays readable */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,235,0.35)_0%,rgba(255,255,235,0.55)_40%,var(--lumen)_100%)]" />
      </div>

      <div className="page-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img
                src={prince}
                alt="Prince Busa"
                className="h-[88px] w-[88px] rounded-full border-2 border-[var(--vast)] object-cover md:h-[104px] md:w-[104px]"
              />
              <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--vast)] bg-[var(--lumen)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--glow)]" />
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="display-title text-[56px] text-[var(--vast)] md:text-[88px] lg:text-[104px]"
          >
            <span className="opacity-50 " style={{fontFamily: "var(--font-display)"}}>Hi! I&apos;m</span> Prince Busa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-[18px] leading-[1.45] text-[var(--fog)] md:text-[20px]"
          >
            Full-stack developer who turns ideas into polished products —
            from responsive UIs to reliable backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects" className="btn-dawn">
              See my work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Email me
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-6 text-[14px] font-medium text-[var(--fog)]"
          >
            Available for freelance & full-time roles
          </motion.p>
        </div>
      </div>
    </section>
  );
}
