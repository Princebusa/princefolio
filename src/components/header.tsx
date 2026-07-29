import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/themeContext";

const menu = [
  { name: "Home", link: "#" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-4 z-50">
      <nav className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--white)] px-5 py-2.5 sm:px-8 sm:pr-5 sm:py-2">
        <div className="hidden items-center gap-4 text-[13px] font-medium sm:flex sm:text-sm">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="!text-[var(--fog)]/95 transition-colors hover:text-[var(--vast)] text-[13px] font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="/"
          className="text-[15px] font-medium text-[var(--vast)] sm:hidden"
        >
          Prince
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className=" flex h-8 w-8 items-center justify-center rounded-sm cursor-pointer text-[var(--vast)] transition-colors hover:bg-[var(--lumen-dark)]"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={18} className="hover:rotate-20 transition-all duration-300"/>}
          </button>

         

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] sm:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 rounded-2xl border border-[var(--border)] bg-[var(--white)] p-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-[var(--charcoal)] hover:bg-[var(--lumen-dark)]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-dawn mt-1 w-full"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
