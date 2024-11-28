
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import {projectsData} from "@/data/index"


export default function Home() {


  return (
      <main className="relative bg-black-100 flex justify-center
      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Grid/>
          <Experience/>
          <Projects projects={projectsData}/>
          <Footer/>
          </div>
      </main>
  );
}
