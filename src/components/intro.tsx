import prince from "../assets/prince.jpeg";
import { motion } from "motion/react";



export default function Intro() {
  return (
    <div className="dots-bg max-width relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
      <div className="[background:var(--shad-bg2)] p-2 items-end flex gap-4 ">
      <div className="relative">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full w-[120px] h-[120px] border-[4px] border-transparent shadow-[0_0_0_1px_var(--edge-line)] dark:shadow-[0_0_0_1px_#202029] "
          src={prince}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: .1}}
        className="bottom-1 right-1 z-2 absolute bg-white border border-neutral-300 p-[7px] shadow-[0px_0px_10px_0px_#00000040] rounded-full">
          <div className="bg-[#00c950] h-[8px] w-[8px] rounded-full"></div>
        </motion.div>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut"}}
          className="max-md:flex flex-col font-semibold md:text-[30px] text-[25px] text-[#09090b] dark:text-[#e5e5e5] tracking-[-.4px]"
        >
          Prince Busa{" "}
          <span className="tracking-[.0px] md:font-[500] font-[400] text-gray-500 md:text-[21px] text-[17px] opacity-[.5]">
            <span className="max-md:hidden">-</span> A Full Stack Developer
          </span>
        </motion.h2>
      </div>
      </div>
    </div>
  );
}
