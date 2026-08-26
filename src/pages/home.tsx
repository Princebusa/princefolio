import Intro from "../components/intro";
import Bio from "../components/bio";
import Project from "../components/projects";
import Exp from "../components/expirence";
import Contributions from "../components/contributions";
import Contact from "../components/contact";
import Copyright from "../components/copyright";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 pb-4 lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-4">
      <aside className="min-h-0">
        <div className="lg:sticky lg:top-4">
          <Intro />
        </div>
      </aside>

      <div className="flex flex-col gap-4">
        <Exp />
        <Project />
        <Bio />
        <Contributions />
        <Contact />
        <Copyright />
      </div>
    </main>
  );
}
