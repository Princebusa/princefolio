import Intro from "../components/intro";
import Bio from "../components/bio";
import Project from "../components/projects";
import Exp from "../components/expirence";
import FooterCta from "../components/footerCta";
import Copyright from "../components/copyright";

export default function Home() {
  return (
    <main>
      <Intro />
      <Project />
      <Bio />
      <Exp />
      <FooterCta />
      <Copyright />
    </main>
  );
}
