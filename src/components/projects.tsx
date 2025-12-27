import React from "react";
import th from "../assets/notesbuddy.webp";
import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import Reacts from "../assets/tech/react.svg";
import bun from "../assets/tech/bun.svg";
import tailwind from "../assets/tech/tailwindcss.svg";
import mongo from "../assets/tech/mongodb.svg";
import sql from "../assets/tech/mysql.svg";
import git from "../assets/tech/git.svg";
import shdcn from "../assets/tech/shadcn-ui-light.svg";
import tanstack from "../assets/tech/tanstack-light.svg";




const tech = {
  ts,
  js,
  node,
  sql,
  next,
  bun,
  Reacts,

};
const Projects = () => {
  return (
    <div className=" rounded-xl overflow-hidden">
      <div>
        <img src={th} alt="" />
      </div>
      <div className="border-t-0 border border-gray-200/60 rounded-b-xl pt-2 px-5 py-4 flex flex-col gap-4">
        <div>
          <h2 className="font-medium text-lg">Syncify</h2>
        </div>
        <p className="font-regular text-[15px] tracking-[.2px] text-neutral-500/80">
          A comprehensive study platform with notes, flashcards, quizzes, AI
          chatbot, and interactive learning tools
        </p>
        <div>
          <h4 className="font-medium text-[14px] text-neutral-400 tracking-[.3px]">Technologies</h4>
                       <div className="flex gap-2 mt-[7px]">
                         {Object.entries(tech).map(([id, src]) => (
                <img key={id} src={src} 
          className="w-6"/>  
              ))}
                       </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
