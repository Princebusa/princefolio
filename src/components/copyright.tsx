import footerBg from "../assets/footer.webp";

export default function Copyright() {
  return (
    <footer>
      <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[600px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <img
            src={footerBg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-[1200px] mx-auto relative flex min-h-[320px] w-full flex-col items-start md:justify-between justify-end  gap-8 px-4 py-12 sm:min-h-[420px] sm:gap-10 sm:py-16 md:min-h-[600px] md:flex-row md:items-end md:gap-4 md:pb-20">
          <div className="max-w-xl">
            <p
              className="pb-3 text-[32px] font-semibold italic leading-[1.05] tracking-[-0.03em] text-white sm:text-[40px] md:text-[50px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build the future.
            </p>
            <p className="text-[14px] italic leading-[1.5] text-white/70 sm:text-[15px]">
              My inbox is always open. Reach out and let&apos;s start crafting.
            </p>
          </div>

          <p className="text-[13px] text-white/80 sm:text-[15px] pb-4">
            © 2026 · Designed & developed by{" "}
            <span className="font-semibold text-white">Prince</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
