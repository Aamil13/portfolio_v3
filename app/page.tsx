"use client"
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import {projectsData} from "@/data/index"
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent mismatch during hydration
    return <div className="opacity-0">wait...</div>;
  }

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
