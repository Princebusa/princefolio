import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function Contributions() {
  const isMobile = useIsMobile();

  return (
    <section id="contributions" className="pb-8 sm:pb-10 md:pb-16">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="noise section-panel bg-[var(--vast)] px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-16"
        >
          <div className="mb-6 text-center sm:mb-8 md:mb-10">
            <h2 className="display-title text-[32px] text-[var(--lumen)] sm:text-[40px] md:text-[56px]">
              Code every <span className="italic-accent">day</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg px-2 text-[15px] leading-[1.45] text-[var(--fog)] sm:mt-4 sm:text-[16px] md:text-[18px]">
              A year in commits — each square a small step forward.
            </p>
          </div>

          <div className="-mx-1 overflow-x-auto rounded-[18px] border-2 border-[#ffffff14] bg-[var(--lumen)] px-3 py-4 sm:mx-0 sm:rounded-[22px] sm:px-6 sm:py-6">
            <div className="min-w-[680px] sm:min-w-0">
              <GitHubCalendar
                username="princebusa"
                colorScheme="dark"
                theme={{
                  dark: ["#E0E0E0", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                blockSize={isMobile ? 10 : 12}
                blockMargin={isMobile ? 3 : 4}
                fontSize={isMobile ? 12 : 14}
                style={{ margin: "0 auto" }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
