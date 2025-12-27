import Intro from "../components/intro";
import Bio from "../components/bio";
import Projects from "../components/projects";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section className="relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[#e4e4e7]">
        <div className="innerdiv">
          <Intro />
        </div>
      </section>
      <section className="relative   before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[#e4e4e7]">
        <div className="innerdiv">
          <Bio />
        </div>
      </section>
      <section className="">
        <div className=" relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[#e4e4e7]">
          <div className=" h-10   dots-bg">
            <div className="w-full h-full gg-90"></div>
        </div>
          <div className="w-full bg-white relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[#e4e4e7]">
             <div className="max-width pattern-bg relative before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[#e4e4e7]">
             <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="bg-white w-34 md:leading-9 leading-8 px-4 py-0 text-[#09090b] relative font-medium md:text-[27px] text-[22px] after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-[1px] before:h-full before:left-[0] before:bottom-0 before:absolute before:bg-[#e4e4e7]"
            >
              Projects
            </motion.h3>
           </div>
          </div>
          
          <div className="max-width grid md:grid-cols-2 p-4 gap-4 relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[#e4e4e7]">
            <Projects />
            <Projects />
            <Projects />
            <Projects />
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}
