import React, { useEffect } from "react";
import ServicesHero from "../components/ServicesHero";
import ServicesContent from "../components/ServicesContent";
import { useLocation } from "react-router-dom";
const ServicesPage = () => {
  const location = useLocation();
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((element) => element.classList.remove("show"));
  }, [location]);
  return (
    <>
      <ServicesHero />
      <ServicesContent />
    </>
  );
};

export default ServicesPage;
