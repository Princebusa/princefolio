import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "Work", link: "#projects" },
  { name: "Stack", link: "#stack" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-[800px] !px-0">
        <nav className="flex items-center justify-between gap-2 rounded-[10px] border-2 border-[#e4e4d0] bg-[var(--lumen)] px-2.5 py-2 backdrop-blur-md sm:gap-4 sm:px-3 md:px-4 md:pr-2">
          <a
            href="/"
            className="text-[22px] font-bold leading-none tracking-[-0.03em] text-[var(--vast)] sm:text-[28px]"
          >
            Prince
          </a>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {menu.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-[1rem] font-semibold text-[#222] transition-colors hover:text-[var(--vast)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="#contact"
              className="btn-dawn !px-3 !py-2 text-[13px] sm:!px-4 sm:!py-2.5 sm:text-[14px]"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in touch</span>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border-2 border-[var(--vast)] sm:h-10 sm:w-10 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-[20px] border-2 border-[var(--vast)] bg-[var(--lumen)] p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[16px] font-medium text-[var(--charcoal)] hover:bg-[var(--lumen-dark)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
