import React from 'react';
import { botox, fillers, skinTightening } from './../assets/images';
const Services = () => {
  return (
    <div className="services bg-pink-100 w-screen h-auto">
      <div className="services_content px-5 py-20">
        <div className="text-8xl opacity-80 cursive justify-center text-center">
          MedSpa Services
        </div>
        <div className="block lg:flex justify-center my-7 gap-20 ${}">
          <img
            src={botox}
            className="hover:brightness-50 cursor-pointer"
            alt="botox"
          />
          <img
            src={fillers}
            className="hover:brightness-50 cursor-pointer"
            alt="fillers"
          />
          <img
            src={skinTightening}
            className="hover:brightness-50 cursor-pointer"
            alt="skinTightening"
          />
        </div>
        <span className="hah flex justify-center max-w-xs cursor-pointer my-5 py-8 px-12 text-white bg-black text-[22px]">
          Book Now
        </span>
      </div>
    </div>
  );
};

export default Services;
