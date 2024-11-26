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
    scale: 1.1,
    backgroundColor: "#1E223D", // Slightly brighter background
    transition: { duration: 0.2 },
  };

const AnimatedTechStack = ({ clintLists, server_DBLists, tech, otherLists }:any) => {
  return (
    <motion.div
      className="flex gap-1 lg:gap-5 w-fit mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tech stack lists */}
      {[clintLists, server_DBLists, tech, otherLists].map((list, colIndex) => (
        <motion.div
          key={colIndex}
          className="flex flex-col gap-3"
          variants={containerVariants} // Optionally stagger items within a column
        >
          {list.map((item:string, i:number) => (
            <motion.span
            key={i}
            className="lg:py-4 lg:px-3 py-2 px-3 text-xs opacity-50 
              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            variants={itemVariants}
            whileHover={hoverEffect} // Hover effect for scaling and background change
          >
              {item}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedTechStack;
