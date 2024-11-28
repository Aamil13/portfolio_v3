import React from 'react'
import { Spotlight } from './ui/Spotlight'
import MagicButton from './ui/MagicButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from 'react-icons/fa6'
import { FaAnchor } from "react-icons/fa";
import TextEncrypted from '@/hooks/useEncryptedText'
import { BackgroundLines } from './ui/BackgroundLines'

const Hero = () => {
  return (
    <div  className='pb-20 pt-2'>

        
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

<BackgroundLines className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextEncrypted text="Aamil's Port." interval={100}>
  <span className="text-lg animate-bounce"><FaAnchor /></span>
</TextEncrypted>
            
          <TextGenerateEffect
            words="Hi! I&apos;m Aamil, A software Engineer, Equipped With Experience of Product Based StartUps."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />


          <a href="#projects">
            <MagicButton
              title="Browse my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </BackgroundLines>

    </div>
  )
}

export default Hero