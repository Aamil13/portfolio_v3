import { useMemo } from "react";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animates children sequentially
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const hoverEffect = {
    scale: 1.04,
    backgroundColor: "#1E223D", // Slightly brighter background
    transition: { duration: 0.2 },
  };

type AnimatedTechStackProps = {
  clintLists: string[];
  server_DBLists: string[];
  tech: string[];
  otherLists: string[];
};

const AnimatedTechStack = ({ clintLists, server_DBLists, tech, otherLists }: AnimatedTechStackProps) => {
  const sections = useMemo(
    () => [
    { key: "languages", title: "Languages", skills: clintLists, className: "lg:col-span-2" },
    { key: "frontend-mobile", title: "Frontend / Mobile", skills: server_DBLists, className: "lg:col-span-3" },
    { key: "backend-cloud", title: "Backend / Cloud", skills: tech, className: "lg:col-span-3" },
    { key: "tools-other", title: "Tools / Other", skills: otherLists, className: "lg:col-span-2" },
  ],
  [clintLists, server_DBLists, tech, otherLists]
);

  return (
    <motion.div
      className="mt-4 w-full rounded-2xl]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 auto-rows-[minmax(11rem,auto)] gap-3">
        {sections.map((section, colIndex) => (
          <motion.div
            key={`${section.title}-${colIndex}`}
            className={`group rounded-2xl border border-indigo-300/20 bg-[#101633]/90 p-4 shadow-[0_0_16px_rgba(99,102,241,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.22)] ${section.className}`}
            variants={itemVariants}
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-purple-300">
              {section.title}
            </p>
            <div className="flex flex-wrap gap-2">
            {section.skills.filter(Boolean).map((item:string, i:number) => (
              <motion.span
              key={`${section.title}-${item}-${i}`}
              className="rounded-md border border-indigo-300/20 bg-[#0C1535] px-2.5 py-1.5 text-center text-[10px] text-white/95 transition-colors duration-200 group-hover:border-indigo-300/30 lg:text-xs"
              variants={itemVariants}
              whileHover={hoverEffect}
            >
                {item}
              </motion.span>
            ))}
            </div>
          </motion.div>
        ))}
          </div>
    </motion.div>
  );
};

export default AnimatedTechStack;
