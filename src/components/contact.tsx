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
    <section
      id="contact"
      className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="section-label">Contact</h2>
        <p className="mt-2 text-[14px] leading-[1.55] text-[var(--fog)]">
          Have a project in mind? Reach out — my inbox is open.
        </p>
      </div>

      <div className="flex flex-col">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={
                contact.label === "Email" ? undefined : "noopener noreferrer"
              }
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-center gap-3 border-t border-[var(--border)] py-4 transition-colors first:border-t-0 hover:bg-[var(--lumen-dark)]/60"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--lumen-dark)] transition-colors group-hover:border-[var(--dawn)]">
                <Icon size={14} className="text-[var(--dawn)]" />
              </span>
              <span className="text-[14px] font-medium text-[var(--vast)]">
                {contact.label}
              </span>
              <span
                className="ml-auto truncate text-[12px] text-[var(--fog)] group-hover:text-[var(--charcoal)] sm:text-[13px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {contact.value}
              </span>
            </motion.a>
          );
        })}
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-fathom mt-6 w-full sm:w-auto"
      >
        View Resume
        <FileText size={15} />
      </a>
    </section>
  );
}
