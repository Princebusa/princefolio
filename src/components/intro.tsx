import prince from "../assets/prince.jpeg";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <div className="p-2 items-end flex gap-4 relative after:content-[''] after:w-[1px] after:h-[100%] after:left-[0] after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-[1px] before:h-full before:right-[0] before:bottom-0 before:absolute before:bg-[#e4e4e7]">
      <div className="relative">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" w-[120px] h-[120px] border-[4px] border-white shadow-[0_0_0_1px_#e4e4e7] rounded-full"
          src={prince}
          alt=""
        />
        <div className="bottom-2 right-0 z-2 absolute bg-white border border-neutral-300 p-[7px] shadow-[0px_0px_10px_0px_#00000040] rounded-full">
          <div className="bg-[#00c950] h-[8px] w-[8px] rounded-full"></div>
        </div>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="font-bold text-[30px] text-[#09090b] tracking-[-.4px]"
        >
          Prince Busa{" "}
          <span className="tracking-[.0px] font-[600] text-gray-500 text-[21px] opacity-[.5]">
            - A Full Stack Developer
          </span>
        </motion.h2>
      </div>
    </div>
  );
}
