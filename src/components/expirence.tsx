import { motion } from "motion/react";
import dechub from "../assets/dechub_logo.jfif";
const Expirence = () => {
  return (
    <>
      <div className=" h-10   dots-bg">
        <div className="w-full h-full [background:var(--shad-bg)]"></div>
      </div>
      <div className="w-full relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="max-width pattern-bg relative before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="bg-white dark:bg-[#09090b]  w-42 md:leading-9 leading-8 px-4 py-0 text-[var(--forground)] relative font-medium md:text-[27px] text-[22px] after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:left-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]"
          >
            Experience
          </motion.h3>
        </div>
      </div>

      <div className="max-width p-4 relative relative before:z-10 after:content-[''] after:w-[1px] after:h-full after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div>
          <div className="md:flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="w-[42px] h-[42px] rounded-[2px]" src={dechub} alt="" />
              <div className="">
                <p className="font-semibold text-[var(--forground)] text-[20px]">Dechub</p>
                <p className="text-neutral-400 md:text-[16px] text-[14px] font-[400]">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="max-md:mt-1 md:text-end text-neutral-400 font-[400] max-md:text-[15px]">
              <p>May-2025 - Present</p>
              <p>Bangalore, India (Remote)</p>
            </div>
          </div>
          <div className="mt-2">
            <ul className="marker:text-neutral-400 marker:text-[12px] list-disc text-neutral-500 text-[15px] flex flex-col gap-[4px] pl-4">
              <li>
                Developing and maintaining scalable full-stack applications
                using React, Next.js, Node.js, and modern APIs
              </li>
              <li>
                Designing clean, responsive UIs with Tailwind CSS and smooth
                motion-based interactions
              </li>
              <li>
                Optimizing applications for speed, SEO, and accessibility,
                improving real-world user experience
              </li>
              <li>
                Building secure, high-performance backend services, handling
                authentication, databases, and server logic
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <div className="md:flex justify-between">
            <div className="flex gap-3 items-center">
              <img className="w-[42px] h-[42px] rounded-[2px]" src={dechub} alt="" />
              <div className="">
                <p className="font-semibold text-[var(--forground)] text-[20px]">Dechub</p>
                <p className="text-neutral-400 md:text-[16px] text-[14px] font-[400]">
                  Full Stack Developer (Intern)
                </p>
              </div>
            </div>
            <div className="max-md:mt-1 md:text-end text-neutral-400 font-[400] max-md:text-[15px]">
              <p>Jan-2025 - May-2025</p>
              <p>Bangalore, India (Remote)</p>
            </div>
          </div>
          <div className="mt-2">
            <ul className="marker:text-neutral-400 marker:text-[12px] list-disc text-neutral-500 text-[15px] flex flex-col gap-[4px] pl-4">
              <li>
                Assisted in building production-ready features using React, JavaScript, and REST APIs
              </li>
              <li>
                Implemented responsive layouts and UI components with Tailwind CSS
              </li>
              <li>
                Worked closely with senior developers to debug issues, refactor code, and improve performance
              </li>
              <li>
                Integrated frontend components with backend services and handled API data flows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expirence;
