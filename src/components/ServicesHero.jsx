import React from "react";
import { mainImg } from "../assets/images";
const ServicesHero = () => {
  return (
    <div
      className="services-hero w-screen h-auto top-0 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${mainImg})`,
      }}
    >
      <div className="hero_text flex flex-col gap-5 mx-auto break-words px-8 fade-in">
        <div className="cursive font-extralight text-8xl opacity-80  text-center ">
          A refreshed version of you
        </div>
        <div className="max-w-screen-sm mx-auto text-center mb-8">
          Our med spa services leave you feeling rejuvenated and excited about
          the results.
        </div>
        <a
          className="text-center mx-auto cursor-pointer py-7 px-20 text-white bg-black text-lgmax-w-xs fade-in"
          href="https://toxedbytay.glossgenius.com/"
          target="_blank"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ServicesHero;
