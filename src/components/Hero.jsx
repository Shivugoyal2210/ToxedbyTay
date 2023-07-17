import React from 'react';
import { mainLanding } from '../assets/images';
const Hero = () => {
  return (
    <div
      className="body_hero w-screen h-auto top-0 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${mainLanding})`,
      }}
    >
      <div className="hero_text flex flex-col gap-5 mx-auto break-words px-8">
        <div className="cursive font-extralight text-8xl opacity-80  text-center ">
          Accentuate your natural beauty.
        </div>
        <div className="max-w-screen-sm mx-auto text-center">
          Rather than changing your appearance, Taylor Northcott Aesthetics
          restores volume loss and creates a natural and more refreshed version
          of you.
        </div>
        <span className="text-center mx-auto cursor-pointer py-7 px-16 text-white bg-black text-lgmax-w-xs">
          Book Now
        </span>
      </div>
    </div>
  );
};

export default Hero;
