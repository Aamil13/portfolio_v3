"use client"
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
// import { BackgroundGradientAnimation } from "./GradientBg";

import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import {motion} from 'framer-motion'
import AnimatedTechStack from "./TechStack";
import { FaLocationArrow } from "react-icons/fa6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const clintLists = ["ReactJS", "Next Js", "TypeScript/JavaScript", "Redux-Toolkit","Zustand"];
  const server_DBLists = ["Node", "Express","MongoDB", ""];
  const tech = ["Socket.io","React-Query","React-Hook-Form"];
  const otherLists = [,"tailwindCSS", "Framer Motion", "Git","GitHub"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "aamilshafi13@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    
  };

  useEffect(() => {
    if (copied) {
      let timer = window.setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copied])

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5,delay:0.1}}
        variants={{
          hidden: {opacity:0, y:-50, x:-20},
          visible: {opacity:1,y:0, x:0}
        }}
        className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </motion.div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          // <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          // </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 &&<div><GridGlobe /> <div className="flex flex-col gap-1 items-start mt-2 text-[8px]">
            <div  onClick={()=>window.open('https://www.freecodecamp.org/certification/fcc88fba7b7-32b5-475a-b18a-cc5d9d2c74ff/front-end-development-libraries', '_blank')}>
            <MagicButton
              title="Front-End(freeCodeCamp.org)"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-[8px]"
              isOther={true}

            />
            </div>
           
           <div onClick={()=>window.open('https://www.freecodecamp.org/certification/fcc88fba7b7-32b5-475a-b18a-cc5d9d2c74ff/back-end-development-and-apis', '_blank')}>
           <MagicButton
              title="Back-End(freeCodeCamp.org)"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-[8px]"
              isOther={true}
              
            />
           </div>
           
      
            </div>
            </div> }

          {/* Tech stack list  */}
          {id === 3 && (
            <AnimatedTechStack clintLists={clintLists} server_DBLists={server_DBLists} tech={tech} otherLists={otherLists} />
          )}
          {id === 6 && (
            <div className="mt-5 relative" id="contact">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                {copied ?
                <Lottie options={defaultOptions} height={200} width={400} />
              : null}
                </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};