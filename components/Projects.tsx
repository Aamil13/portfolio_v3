"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

const techColors: { [key: string]: string } = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  NodeJS: "#43853D",
  Express: "#000000",
  MongoDB: "#47A248",
  ReactJS: "#61DAFB",
  Redux: "#764ABC",
  "Redux/Toolkit": "#764ABC",
  Zustand: "#764ABC",
  TailwindCSS: "#38B2AC",
  Bootstrap: "#563D7C",
  Firebase: "#FFCA28",
  MaterialUI: "#0081CB",
  Vite: "#646CFF",
  DaisyUI: "#5A67D8",
  ANTD: "#5A67D8",
  SCSS: "#CF649A",
  FramerMotion: "#E01D5A",
};

const categories = [ "Featured", "Fullstack", "Frontend","Backend","All"]; // Example categories
const itemsPerPage = 4; // Number of projects per page

const Projects = ({ projects }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (item: any) =>
       item.type.includes(selectedCategory)
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Handle Category Change
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1
  };

  return (
    <div className="py-20">
      <h1 className="heading" id="projects">
        A  selection of{" "}
        <span className="text-purple">{selectedCategory} projects</span>
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mt-5 max-sm:overflow-x-scroll max-sm:overflow-y-clip">
        {categories.map((category, index) => (
             <div
             key={category + index}
            onClick={() => handleCategoryChange(category)}
             className="bg-indigo-400  flex items-center justify-center rounded-[6px]">
             <button className={`px-6 py-2 font-medium rounded-[6px] ${selectedCategory === category ? "bg-indigo-900" : "bg-indigo-800"}  active:scale-105 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}>
             {category}
             </button>
           </div>
        //   <button
        //     key={index}
        //     onClick={() => handleCategoryChange(category)}
        //     className={`px-4 py-2 rounded-lg ${
        //       selectedCategory === category
        //         ? "bg-purple text-white"
        //         : "bg-gray-200"
        //     }`}
        //   >
        //     {category}
        //   </button>
        ))}
      </div>

  {/* Projects Display */}
<div className="flex flex-col items-center justify-center gap-10 mt-10">
  <AnimatePresence>
    {currentProjects.map((item: any,idx:number) => (
          <Button
          key={item?.title}
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="group   flex flex-col lg:flex-row items-center justify-between  rounded-2xl shadow-lg overflow-hidden max-lg:w-[600px] max-md:w-[500px] max-sm:w-[350px] w-[827px] h-[20rem] "
    
      >
        {/* Image Section */}
        <div className="lg:w-1/2 w-full h-full relative overflow-hidden ">
  <img
    src={item.img}
    alt={item.title}
    className={`w-11/12 h-5/6  object-cover ${idx == 0 ? "object-left" : "object-top"}  absolute -left-10 -bottom-2 -rotate-13 -translate-x-10 -translate-y-2 transition-all duration-500 transform group-hover:rotate-3 group-hover:translate-x-10 group-hover:translate-y-10 rounded-t-2xl`}
  />
</div>

        {/* Content Section */}
        <div className="lg:w-1/2  w-full h-full px-5 flex flex-col justify-center">
          {/* Project Title */}
          <h1 className="font-bold text-2xl text-white mb-3">{item.title}</h1>

          {/* Project Description */}
          <p
            className="text-sm lg:text-base  mb-4 line-clamp-3 text-neutral-400"
          
          >
            {item.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item?.stack?.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-white text-xs"
                style={{
                  backgroundColor: techColors[tech] || "#555555",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Check Live Button */}
          <div className="flex flex-col gap-2 items-center relative ">
            <Link
              href={item?.link}
              target="_blank"
              className="text-purple flex items-center hover:underline"
            >
            Check Live
            </Link>
            <Link
              href={item?.git}
              target="_blank"
              className="text-purple flex items-center hover:underline"
            >
           Git Link
            </Link>
          </div>
        </div>
      </motion.div>
      </Button>
    ))}
    
  </AnimatePresence>
</div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if(totalPages < 2) return
         return <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 font-medium  rounded-[6px] ${currentPage === page ? "bg-indigo-900" : "bg-indigo-800"}  active:scale-105 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
          
          >
            {page}
          </button>
})}
      </div>
    </div>
  );
};

export default Projects;
