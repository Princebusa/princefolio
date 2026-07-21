import prince from "../assets/prince.jpeg";
import heroBg from "../assets/hero.png";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="grain relative overflow-hidden pb-8 pt-24 sm:pb-10 sm:pt-28 md:pb-16 md:pt-36">
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
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,235,0)_0%,rgba(255,255,235,0.91)_40%,var(--lumen)_100%)]" />
      </div>

      <div className="page-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center py-15">
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
                className="h-[88px] w-[88px] rounded-[10px] border-2 border-[var(--vast)]/30 shadow-sm object-cover md:h-[104px] md:w-[104px]"
              />
              <span className="absolute bottom-[-4px] right-[-6px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--vast)]/80 bg-[var(--lumen)]">
                <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="display-title text-[38px] leading-[0.95] text-[var(--vast)] sm:text-[48px] md:text-[88px] lg:text-[104px]"
          >
            <span className="block opacity-50 sm:inline" style={{fontFamily: "var(--font-display)"}}>Hi! I&apos;m</span>{" "}
            <span className="block sm:inline" style={{fontFamily: "var(--font-display)"}}>Prince Busa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mx-auto mt-4 max-w-xl px-2 text-[16px] leading-[1.5] text-[var(--fog)] sm:mt-5 sm:px-0 sm:text-[18px] md:text-[20px]"
          >
            Full-stack developer who turns ideas into polished products —
            from responsive UIs to reliable backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-6 flex w-full flex-col items-stretch gap-3 px-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:px-0"
          >
            <a href="#projects" className="btn-dawn w-full sm:w-auto">
              See my work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
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
