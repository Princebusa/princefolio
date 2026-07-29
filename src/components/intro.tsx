import prince from "../assets/prince.jpeg";
import toon from "../assets/toon.png";
import { motion } from "motion/react";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";



const links = [
  { label: "Email", href: "mailto:busaprince13@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/princebusa", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/prince-busa", icon: Linkedin },
  { label: "X", href: "https://x.com/Prince_busa13", icon: Twitter },
  { label: "Resume", href: "/resume.pdf", icon: FileText },
];

export default function Intro() {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-row items-end gap-3"
      >
        <div
          className="group relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-neutral-200 p-1 dark:bg-neutral-700"
          title="Hover to reveal my photo"
        >
          <img
            src={toon}
            alt="Prince Busa"
            className="h-full w-full rounded-[8px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] "
          />
          <img
            src={prince}
            alt=""
            aria-hidden="true"
            className="absolute inset-1 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] scale-110 rounded-[8px] object-cover [clip-path:circle(0%_at_100%_100%)] transition-[clip-path,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:[clip-path:circle(150%_at_100%_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-8 h-16 w-16 rounded-full border border-[var(--dawn)]/70 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[2.5] group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold  leading-tight text-[var(--vast)]" style={{ fontFamily: "var(--font-body)" }}>
            Prince Busa
          </h2>
          <p className="text-sm font-medium text-[var(--charcoal)]/60">Full Stack Developer</p>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="!mt-8 !mb-6 font-serif text-3xl tracking-wide text-[var(--vast)] sm:text-4xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Engineering Digital Experiences
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-8 flex flex-wrap gap-3"
      >
        <a href="#contact" className="btn-dawn">
          Get in touch
        </a>
        <a href="#projects" className="btn-ghost">
          View projects
        </a>
      </motion.div>

      <div>
      
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="chip transition-colors hover:border-[var(--dawn)]"
            >
              <Icon size={14} className="text-[var(--dawn)]" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
