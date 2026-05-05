"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiRedis,
  SiAmazon,
  SiSocketdotio,
  SiReactquery,
} from "react-icons/si";

// --------------------
// Tech Meta System
// --------------------
type TechMeta = {
  color: string;
  icon?: React.ReactNode;
};

const techMeta: Record<string, TechMeta> = {
  TypeScript: { color: "#3178C6", icon: <SiTypescript /> },
  JavaScript: { color: "#F7DF1E", icon: <SiJavascript /> },
  "Node.js": { color: "#43853D", icon: <SiNodedotjs /> },
  "Express.js": { color: "#000000", icon: <SiExpress /> },
  MongoDB: { color: "#47A248", icon: <SiMongodb /> },
  "React.js": { color: "#61DAFB", icon: <SiReact /> },
  "Next.js": { color: "#ffffff", icon: <SiNextdotjs /> },
  Redux: { color: "#764ABC", icon: <SiRedux /> },
  TailwindCSS: { color: "#38B2AC", icon: <SiTailwindcss /> },
  Firebase: { color: "#FFCA28", icon: <SiFirebase /> },
  Docker: { color: "#2496ED", icon: <SiDocker /> },
  Redis: { color: "#DC382D", icon: <SiRedis /> },
  AWS: { color: "#FF9900", icon: <SiAmazon /> },
  "Socket.IO": { color: "#ffffff", icon: <SiSocketdotio /> },
  "TanStack Query": { color: "#FF4154", icon: <SiReactquery /> },
};

// Normalize helper
const normalizeTech = (tech: string) =>
  tech.toLowerCase().replace(/\s+/g, "").replace(".", "");

const normalizedTechMeta: Record<string, TechMeta> = Object.fromEntries(
  Object.entries(techMeta).map(([key, value]) => [
    normalizeTech(key),
    value,
  ])
);

// --------------------

const categories = ["Featured", "Fullstack", "Frontend", "Backend", "All"];
const itemsPerPage = 4;

type Project = {
  id?: string;
  img: string;
  title: string;
  description: string;
  link: string;
  git: string;
  stack: string[];
  type: string;
};

const Projects = ({ projects }: { projects: Project[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ FIXED FILTER
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) =>
          item.type.includes(selectedCategory)
        );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="py-20">
      <h1 className="heading" id="projects">
        A selection of{" "}
        <span className="text-purple">{selectedCategory} projects</span>
      </h1>

      {/* Filters */}
      <div className="flex gap-4 mt-5 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2 rounded-md text-sm transition-all shadow-[3px_3px_0px_black]
              ${
                selectedCategory === category
                  ? "bg-indigo-900"
                  : "bg-indigo-800"
              }
              hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-10 mt-10">
        <AnimatePresence>
          {currentProjects.map((item, idx) => (
            <Button
              key={item.title}
              duration={15000}
              borderRadius="1.75rem"
              className="border-neutral-200 dark:border-slate-800"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="group flex flex-col lg:flex-row rounded-2xl overflow-hidden w-full h-[20rem] max-sm:h-[30rem]"
              >
                {/* Image */}
                <div className="lg:w-1/2 w-full h-full relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute w-11/12 h-5/6 object-cover -left-10 -bottom-2 -rotate-8 transition-all duration-500 group-hover:rotate-3 group-hover:translate-x-10 group-hover:translate-y-10 rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full px-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* 🚀 TECH BADGES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.stack.map((tech, i) => {
                      const meta =
                        normalizedTechMeta[normalizeTech(tech)] || {
                          color: "#6B7280",
                        };

                      return (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.08,
                            boxShadow: `0 0 10px ${meta.color}`,
                          }}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs border font-medium transition-all"
                          style={{
                            color: meta.color,
                            borderColor: `${meta.color}50`,
                            backgroundColor: `${meta.color}15`,
                          }}
                        >
                          <span className="text-sm">
                            {meta.icon}
                          </span>
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-purple hover:underline"
                    >
                      Live
                    </Link>
                    <Link
                      href={item.git}
                      target="_blank"
                      className="text-purple hover:underline"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Button>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-10">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-indigo-900"
                  : "bg-indigo-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Projects;