import Intro from "../components/intro";
import Bio from '../components/bio'

export default function Home() {
  return (
    <>
      <section className="relative  after:content-[''] after:w-full after:h-[1px] after:left-0 after:top-0 after:absolute after:bg-[#e4e4e7] before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[#e4e4e7]">
       <div className="innerdiv">
        <Intro />
        </div>
      </section>
       <section className="relative   before:content-[''] before:w-full before:h-[1px] before:left-0 before:bottom-0 before:absolute before:bg-[#e4e4e7]">
       <div className="innerdiv">
        <Bio />
        </div>
      </section>
    </>
  );
}
