import TradeX from "../assets/tradex.jpeg";
import sloth from "../assets/sloth.png";
import brick from "../assets/brick.jpeg";
import flow from "../assets/syncflow.jpeg";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  demoUrl?: string;
  codeUrl?: string;
  highlights: string[];
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
    demoUrl: "https://sloth.princebusa.com",
    codeUrl: "https://github.com/Princebusa/Sloth-RAG-agent",
    highlights: [
      "Drive Sync Worker",
      "Embedding Generation",
      "Qdrant Vector Store",
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
    highlights: [
      "live Order Book",
      "Redis Streams",
      "Order Matching Engine",
    ],
  },
  {
    id: "brick",
    title: "Brick - AI Webapp builder",
    description:
      "From text to live webapp in seconds. E2B sandbox for code execution. live preview and aws s3 backup so you never lost your work.",
    image: brick,
    gradient: "linear-gradient(135deg, #99f6e4 0%, #a5b4fc 100%)",
    demoUrl: "https://brick.princebusa.com",
    codeUrl: "https://github.com/Princebusa/brick",
    highlights: [
      "Tool-calling LLM Agent",
      "AWS S3 backup",
      "E2B sandbox execution",

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
    highlights: [
      "Node-Based Editor UI",
      "Redis Queue",
      "Execution worker",
    ],
  },
];
