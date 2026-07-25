import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import footerBg from "../assets/footer.webp";

export default function FooterCta() {
  return (
    <section id="contact" className="pb-10 md:pb-16">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="chamber relative overflow-hidden bg-[var(--dawn)] px-6 py-14 text-center md:px-12 md:py-20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <img
              src={footerBg}
              alt=""
              className="h-full w-full object-cover object-center"
             
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(207,232,224,0.35)_0%,rgba(207,232,224,0.6)_45%,#ffffeb_100%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--fathom)]">
              Let&apos;s talk
            </p>
            <h2 className="display-title mx-auto max-w-2xl text-[42px] text-[var(--vast)] md:text-[64px]">
              Let&apos;s work{" "}
              <span className="italic-accent">together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[17px] leading-[1.45] text-[var(--charcoal)] md:text-[18px]">
              Have a project in mind? Let&apos;s create something amazing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@example.com" className="btn-ghost bg-[var(--lumen)]">
                Email me
              </a>
              <a href="#contact" className="btn-fathom">
                Book a call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
