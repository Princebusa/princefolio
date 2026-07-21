import { motion } from "motion/react";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "princebusa@gmail.com",
    href: "mailto:princebusa@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@princebusa",
    href: "https://github.com/princebusa",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "@prince-busa",
    href: "https://linkedin.com/in/prince-busa",
    icon: Linkedin,
  },
  {
    label: "X",
    value: "@Prince_busa13",
    href: "https://x.com/Prince_busa13",
    icon: Twitter,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pb-8 sm:pb-10 md:pb-16">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--lumen)] px-2 py-10 sm:px-6 sm:py-12 md:px-12 md:py-16"
        >
          <div className="mb-8 sm:mb-10">
            <h2 className="display-title text-center text-[32px] text-[var(--vast)] sm:text-[40px] md:text-[56px]">
              Rest at the <span className="italic-accent">Camp</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-[15px] leading-[1.45] text-[var(--fog)] sm:mt-4 sm:text-[16px] md:text-[18px]">
              Let&apos;s build something beautiful together. Reach out!
            </p>
          </div>

          <div className="mx-auto mb-8 flex max-w-[500px] flex-col gap-5 sm:mb-10 sm:gap-6 md:gap-7">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={
                    contact.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group flex cursor-pointer items-center gap-3 border-b border-[var(--border)]/30 pb-5 transition-colors last:border-b-0 last:pb-0 sm:gap-4 sm:pb-6 md:gap-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--dawn)]/30 transition-colors group-hover:border-[var(--dawn)] group-hover:bg-[var(--lumen-dark)] sm:h-11 sm:w-11 md:h-12 md:w-12">
                    <Icon size={20} className="text-[var(--dawn)] sm:size-[22px] md:size-[25px]" />
                  </span>
                  <span className="display-title min-w-[64px] text-[18px] text-[var(--vast)] sm:min-w-[88px] sm:text-[20px] md:text-[27px]">
                    {contact.label}
                  </span>
                  <span className="ml-auto max-w-[48%] truncate text-right text-[12px] font-medium text-[var(--fog)] transition-colors group-hover:text-[var(--charcoal)] sm:max-w-none sm:text-[14px] md:text-[15px]">
                    {contact.value}
                  </span>
                </motion.a>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fathom mt-2 w-full rounded-[14px] py-3.5 text-[15px] sm:py-4 sm:text-[16px]"
            >
              View Resume
              <FileText size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
