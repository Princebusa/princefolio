import Intro from "../components/intro";
import Bio from "../components/bio";
import Project from "../components/projects";
import { motion } from "motion/react";
import Exp from "../components/expirence";
import Git from "../components/git";
import FooterCta from "../components/footerCta";
import Copyright from '../components/copyright'

export default function Home() {
  return (
    <>
      <section className="relative before:z-10 after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[var(--edge-line)] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="innerdiv">
          <Intro />
        </div>
      </section>

      <section className="relative   before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[var(--edge-line)]">
        <div className="innerdiv">
          <Bio />
        </div>
      </section>

      <section className="relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-[var(--edge-line)]">
        <Project />
      </section>

      <section className="relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-[var(--edge-line)]">
        <Exp />
      </section>

      <section className="relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-[var(--edge-line)] ">
        <FooterCta />
      </section>

       <section className="relative after:content-[''] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:absolute after:bg-[var(--edge-line)] ">
        <Copyright />
      </section>
    </>
  );
}
