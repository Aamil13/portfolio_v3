"use client"
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading" id="experience">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
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
            initial="hidden"
            whileInView="visible"
          
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5,delay:0.4}}
            variants={{
              hidden: {opacity:0, y:-50, x:-20},
              visible: {opacity:1,y:0, x:0}
            }}
            className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              /> */}
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <div className="text-start text-white-100 mt-3 font-semibold">
  {card.desc.map((item, index) => (
    <p key={index} className="flex items-start mt-2">
      <span className="mr-2">•</span>
      {item}
    </p>
  ))}
</div>
              </div>
            </motion.div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;