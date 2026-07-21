import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "Work", link: "#projects" },
  { name: "Stack", link: "#stack" },
  { name: "Experience", link: "#experience" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-[800px] mx-auto !px-0">
        <nav className="flex items-center justify-between gap-4 rounded-[10px] border-2 border-[#e4e4d0] bg-[var(--lumen)]/90 px-3 py-2 backdrop-blur-md md:px-4">
          <a href="/" className=" text-[28px] font-bold leading-none tracking-[-0.03em] text-[var(--vast)]">
            Prince
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-[1rem] font-semibold text-[#222] transition-colors hover:text-[var(--vast)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-dawn !px-4 !py-2.5 text-[14px]">
              Get in touch
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border-2 border-[var(--vast)] md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-[20px] border-2 border-[var(--vast)] bg-[var(--lumen)] p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-[16px] font-medium text-[var(--charcoal)] hover:bg-[var(--lumen-dark)]"
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
