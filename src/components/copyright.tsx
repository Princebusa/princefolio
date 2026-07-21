export default function Copyright() {
  return (
    <footer className="border-t-2 border-[var(--border)] pb-10 pt-8">
      <div className="page-shell">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <a
            href="/"
            className="text-[24px] tracking-[-0.03em] text-[var(--vast)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Prince
          </a>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[14px] font-medium text-[var(--fog)]">
            <a href="#projects" className="hover:text-[var(--vast)]">
              Work
            </a>
            <a href="#stack" className="hover:text-[var(--vast)]">
              Stack
            </a>
            <a href="#experience" className="hover:text-[var(--vast)]">
              Experience
            </a>
            <a href="#contact" className="hover:text-[var(--vast)]">
              Contact
            </a>
          </div>
          <p className="text-[14px] text-[var(--fog)]">
            © 2026 · Designed & developed by{" "}
            <span className="font-semibold text-[var(--vast)]">Prince</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
