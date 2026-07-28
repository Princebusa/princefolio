import TradeX from "../assets/tradex.jpeg";
import sloth from "../assets/sloth.png";
import flow from "../assets/syncflow.jpeg";
import ts from "../assets/tech/typescript.svg";
import js from "../assets/tech/js.svg";
import node from "../assets/tech/nodejs.svg";
import next from "../assets/tech/nextjs2-light.svg";
import react from "../assets/tech/react.svg";
import bun from "../assets/tech/bun.svg";
import tailwind from "../assets/tech/tailwindcss.svg";
import mongo from "../assets/tech/mongodb.svg";

export type ProjectTech = {
  id: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  demoUrl?: string;
  codeUrl?: string;
  tech: ProjectTech[];
};

/** Add a new project here — it will show up automatically in the grid. */
export const projects: Project[] = [
  {
    id: "Sloth",
    title: "Sloth - Google Drive RAG Agent",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools.",
    image: sloth,
    gradient: "linear-gradient(135deg, #86efac 0%, #fef08a 100%)",
    demoUrl: "#",
    codeUrl: "https://github.com/Princebusa/Sloth-RAG-agent",
    tech: [
      { id: "ts", icon: ts },
      { id: "js", icon: js },
      { id: "node", icon: node },
      { id: "next", icon: next },
      { id: "react", icon: react },
      { id: "bun", icon: bun },
    ],
  },
  {
    id: "tradex",
    title: "TradeX - Stock Trading Platform",
    description:
      "A trading dashboard with live charts, portfolio tracking, and a clean interface for market insights.",
    image: TradeX,
    gradient: "linear-gradient(135deg, #f9a8d4 0%, #fbcfe8 55%, #fda4af 100%)",
    demoUrl: "https://tradex.princebusa.com",
    codeUrl: "https://github.com/Princebusa/CEX",
    tech: [
      { id: "ts", icon: ts },
      { id: "react", icon: react },
      { id: "next", icon: next },
      { id: "tailwind", icon: tailwind },
      { id: "node", icon: node },
    ],
  },
  {
    id: "sloth",
    title: "FlowSync - Workflow Automation Platform",
    description:
      "A focused productivity app that helps you ship work without the noise — simple, fast, and calm.",
    image: flow,
    gradient: "linear-gradient(135deg, #99f6e4 0%, #a5b4fc 100%)",
    demoUrl: "#",
    codeUrl: "https://github.com/Princebusa/FlowSync",
    tech: [
      { id: "ts", icon: ts },
      { id: "react", icon: react },
      { id: "tailwind", icon: tailwind },
      { id: "mongo", icon: mongo },
      { id: "node", icon: node },
    ],
  },
];
