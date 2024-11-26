import React from 'react'
import { Spotlight } from './ui/Spotlight'
import MagicButton from './ui/MagicButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from 'react-icons/fa6'
//import { AuroraBackground } from './ui/aurora-background'
import { FaAnchor } from "react-icons/fa";
import TextEncrypted from '@/hooks/useEncryptedText'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      {/* <div>
        <AuroraBackground className='h-[80vh]'>
          <h1 className='text-3xl lg:text-5xl text-white font-bold text-center w-[80%]'>Crafting Elegant Solutions with 4+ Years of Expertise in Full-Stack Development</h1>
          </AuroraBackground>
      </div> */}
        
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[80vw] top-10 left-full"
          fill="pink"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
{/* grid */}
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
{/* grid ends */}

<div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextEncrypted text="Aamil's Port." interval={100}>
  <span className="text-lg animate-bounce"><FaAnchor /></span>
</TextEncrypted>
            
          <TextGenerateEffect
            words="Hi! I&apos;m Aamil, A software Engineer, Equipped With Experience of Product Based StartUps."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Aadil, A software Engineer having experience of both Product & Service based companies.
          </p> */}

          <a href="#projects">
            <MagicButton
              title="Browse my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero