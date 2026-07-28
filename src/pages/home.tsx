import Intro from "../components/intro";
import Bio from "../components/bio";
import Project from "../components/projects";
import Exp from "../components/expirence";
import Contributions from "../components/contributions";
import Contact from "../components/contact";
import Copyright from "../components/copyright";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 pb-4">
      <Intro />
      <Exp />
      <Project />
      <Bio />
      <Contributions />
      <Contact />
      <Copyright />
    </main>
  );
}
