import React, { useEffect } from "react";
import { botox, fillers, skinTightening } from "./../assets/images";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const config = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, config);

    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((element) => observer.observe(element));

    // Clean up the observer on component unmount
    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    <div className="services bg-pink-100 w-screen h-auto">
      <div className="services_content px-5 py-20">
        <div className="text-8xl opacity-80 cursive justify-center text-center">
          MedSpa Services
        </div>
        <div className="block lg:flex justify-center my-7 gap-20">
          <img
            onClick={() => navigate(`/services#neuro`)}
            src={botox}
            className="hover:brightness-50 cursor-pointer fade-in"
            alt="botox"
          />
          <img
            onClick={() => navigate(`/services#fillers`)}
            src={fillers}
            className="hover:brightness-50 cursor-pointer fade-in"
            alt="fillers"
          />
          <img
            onClick={() => navigate(`/services#tightening`)}
            src={skinTightening}
            className="hover:brightness-50 cursor-pointer fade-in"
            alt="skinTightening"
          />
        </div>
        <span className="hah flex justify-center max-w-xs cursor-pointer my-5 py-8 px-12 text-white bg-black text-[22px] fade-in">
          Book Now
        </span>
      </div>
    </div>
  );
};

export default Services;
