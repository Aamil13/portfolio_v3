
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { getPortfolioData } from "@/lib/portfolio";

export const dynamic = "force-dynamic";

export default async function Home() {
  const portfolioData = await getPortfolioData();

  const navItems = portfolioData?.navItems ?? [];
  const gridItems = portfolioData?.gridItems ?? [];
  const workExperience = portfolioData?.workExperience ?? [];
  const projects = portfolioData?.projects ?? [];
  const socialMedia = portfolioData?.socialMedia ?? [];
  return (
      <main className="relative bg-black-100 flex justify-center
      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Grid gridItems={gridItems}/>
          <Experience workExperience={workExperience}/>
          <Projects projects={projects}/>
          <Footer socialMedia={socialMedia}/>
          </div>
      </main>
  );
}
