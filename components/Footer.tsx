"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-purple">
        Thanks for visiting my portfolio site.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        This Portfolio is developed using Next Js, TypeScript, Tailwind css, Framer Motion, Three Js e.t.c
        </p>
        <a href="#contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Mohd Aamil Shafi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link} target="_blank">
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
          <div className="flex gap-3">
          Powered By <img src="/next.svg" alt="icons" width={20} height={20}/> Js
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;