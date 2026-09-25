import { Navbar } from "@/components/organisms/navbar";
import { Sidebar } from "@/components/organisms/sidebar";
import { Hero } from "@/components/organisms/hero";
import { About } from "@/components/organisms/about";
import { TechStack } from "@/components/organisms/tech-stack";
import { Experience } from "@/components/organisms/experience";
import { Projects } from "@/components/organisms/projects";
import { Contact } from "@/components/organisms/contact";
import { Footer } from "@/components/organisms/footer";
import { getPortfolio } from "@/lib/get-portfolio";

export default async function Home() {
  const portfolio = await getPortfolio();

  return (
    <>
      <Navbar items={portfolio.navItems} />
      <div className="shell">
        <Sidebar social={portfolio.socialMedia} />
        <main>
          <Hero isOpenToWork={portfolio.isOpenToWork || false} />
          <About items={portfolio.gridItems} />
          <TechStack groups={portfolio.techStack} />
          <Experience items={portfolio.workExperience} />
          <Projects items={portfolio.projects} />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
