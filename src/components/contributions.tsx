import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/themeContext";

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
  const { theme } = useTheme();

  return (
    <section
      id="contributions"
      className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="section-label">GitHub</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto"
      >
        <div className="min-w-[560px] sm:min-w-0">
          <GitHubCalendar
            username="princebusa"
            colorScheme={theme}
            theme={{
              light: ["#f4f4f5", "#99f6e4", "#2dd4bf", "#0d9488", "#0f766e"],
              dark: ["#27272a", "#134e4a", "#0f766e", "#14b8a6", "#5eead4"],
            }}
            blockSize={isMobile ? 9 : 11}
            blockMargin={isMobile ? 3 : 3}
            fontSize={12}
            style={{ margin: "0 auto", fontFamily: "var(--font-body)" }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
