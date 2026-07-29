import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/themeContext";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/** Sections in page order (top → bottom), not nav order */
const sections = [
  { href: "#experience", id: "experience" },
  { href: "#projects", id: "projects" },
  { href: "#contact", id: "contact" },
] as const;

export default function Sticky({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const updateActive = () => {
      if (window.scrollY < 100) {
        setActiveHref("#");
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActiveHref("#contact");
        return;
      }

      const line = window.innerHeight * 0.35;
      let next = "#";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) {
          next = section.href;
        }
      }

      setActiveHref(next);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 backdrop-blur-md"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      <nav
        aria-label="Page sections"
        className="pointer-events-none fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[fit-content] -translate-x-1/2 sm:bottom-3"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-[12px] border border-[var(--border)] bg-[var(--white)]/85 p-1.5 py-1 shadow-lg shadow-black/5 backdrop-blur-xl">
          <div className="flex w-[fit-content] max-w-[fit-content] flex-1 items-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 rounded-[8px] px-[12px] py-[7px] text-[11px] leading-none transition-colors sm:px-[12px] sm:text-[12px] ${
                    isActive
                      ? "bg-[var(--vast)]/90 !text-[var(--lumen)]"
                      : "text-[var(--charcoal)] hover:text-[var(--vast)]"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div
            aria-hidden
            className="mx-0.5 h-5 w-px shrink-0 bg-[var(--border-strong)]/50"
          />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--vast)] transition-colors hover:bg-[var(--lumen-dark)]"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {children}
    </div>
  );
}
