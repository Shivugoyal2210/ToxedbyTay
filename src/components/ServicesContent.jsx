import React, { useState, useEffect } from "react";
import { skinImg, toxImg, fillerImg } from "../assets/images";
import serviceJson from "../assets/images/Services/serviceData.json";
import { ListItem } from "@mui/material";
import { useRef } from "react";

const ServicesContent = () => {
  useEffect(() => {
    const config = {
      root: null,
      // trigger slightly earlier on mobile so fade-in content appears reliably
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.25,
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
  const faq1 = serviceJson["Neuromodulators (Tox)"].FAQs;
  const faq2 = serviceJson["Filler — Restore, Refine, Rebalance"].FAQs;
  const faq3 = serviceJson["ADVATx Laser — The Ultimate Skin Perfecting Laser"].FAQs;
  const faq4 = serviceJson["Microneedling"].FAQs;
  const faq5 = serviceJson["Acne & Acne Scar Treatments"].FAQs;
  const faq6 = serviceJson["Hair Restoration at RESTORE by TXT"].FAQs;

  faq1.forEach((item) => (item.open = false));
  faq2.forEach((item) => (item.open = false));
  faq3.forEach((item) => (item.open = false));
  faq4.forEach((item) => (item.open = false));
  faq5.forEach((item) => (item.open = false));
  faq6.forEach((item) => (item.open = false));
  
  const [faq_1, setfaq_1] = useState(faq1);
  const [faq_2, setfaq_2] = useState(faq2);
  const [faq_3, setfaq_3] = useState(faq3);
  const [faq_4, setfaq_4] = useState(faq4);
  const [faq_5, setfaq_5] = useState(faq5);
  const [faq_6, setfaq_6] = useState(faq6);

  const handleFaq1 = (index) => {
    setfaq_1((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const handleFaq2 = (index) => {
    setfaq_2((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const handleFaq3 = (index) => {
    setfaq_3((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const handleFaq4 = (index) => {
    setfaq_4((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const handleFaq5 = (index) => {
    setfaq_5((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const handleFaq6 = (index) => {
    setfaq_6((prev) =>
      prev.map((item) =>
        prev.indexOf(item) != index ? item : { ...item, open: !item.open }
      )
    );
  };

  const neuro = useRef(null);
  const fillers = useRef(null);
  const advaTx = useRef(null);
  const microneedling = useRef(null);
  const acne = useRef(null);
  const hair = useRef(null);

  
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="services-nav w-screen min-h-[160px] lg:min-h-[120px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center py-6 gap-6 mb-8">
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(neuro)}
          >
            Neuromodulators (Tox)
          </div>{" "}
          <span className="hidden lg:inline text-white">|</span>
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(fillers)}
          >
            Filler — Restore, Refine, Rebalance
          </div>
          <span className="hidden lg:inline text-white">|</span>
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(advaTx)}
          >
            ADVATx Laser — The Ultimate Skin Perfecting Laser
          </div>
          <span className="hidden lg:inline text-white">|</span>
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(microneedling)}
          >
            Microneedling
          </div>
          <span className="hidden lg:inline text-white">|</span>
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(acne)}
          >
            Acne & Acne Scar Treatments
          </div>
          <span className="hidden lg:inline text-white">|</span>
          <div
            className="nav-item text-white text-sm lg:text-lg cursor-pointer px-2"
            onClick={() => scrollToSection(hair)}
          >
            Hair Restoration at RESTORE by TXT
          </div>
        </div>
      </div>
      <div className="service-container mt-5" ref={neuro} id="neuro">
        <img
          src={toxImg}
          alt="Neuromodulators"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full mt-10 fade-in">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5">
            <h1 className="font-apoth mb-7">Neuromodulators (Tox)</h1>
            <p className="mb-20">
              {serviceJson["Neuromodulators (Tox)"].description}
            </p>
          </div>
          <a
            className="block cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20"
            href="https://toxedbytay.glossgenius.com/"
            target="_blank"
          >
            Book Now
          </a>
          <div className="accordion w-[90%] mx-auto">
            {faq_1.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq1(i)}
              >
                <div className="title">
                  <h2 className="flex justify-between">
                    {item.question}{" "}
                    <svg
                      className={item.open ? "minus" : "plus"}
                      viewBox="0 0 100 100"
                      width="15"
                    >
                      <rect
                        className="horizontal"
                        width="80"
                        height="10"
                        x="10"
                        y="33"
                        rx="5"
                      ></rect>
                      <rect
                        className="vertical"
                        width="10"
                        height="80"
                        x="45"
                        y="0"
                        rx="5"
                      ></rect>
                    </svg>
                  </h2>
                </div>
                <div
                  className={
                    item.open ? "fade-in-text content block mt-5" : "hidden"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container" ref={fillers} id="fillers">
        <img
          src={fillerImg}
          alt="Fillers"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full service-2 fade-in">
          <div className="services-text-mid w-[90%] mt-10 text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="font-apoth mb-7">Filler — Restore, Refine, Rebalance</h1>
            <p className="mb-20">
              {serviceJson["Filler — Restore, Refine, Rebalance"].description}
            </p>
          </div>
          <a
            className="block cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20"
            href="https://toxedbytay.glossgenius.com/"
            target="_blank"
          >
            Book Now
          </a>
          <div className="accordion w-[90%] mx-auto">
            {faq_2.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq2(i)}
              >
                <div className="title">
                  <h2 className="flex justify-between">
                    {item.question}{" "}
                    <svg
                      className={item.open ? "minus" : "plus"}
                      viewBox="0 0 100 100"
                      width="15"
                    >
                      <rect
                        className="horizontal"
                        width="80"
                        height="10"
                        x="10"
                        y="33"
                        rx="5"
                      ></rect>
                      <rect
                        className="vertical"
                        width="10"
                        height="80"
                        x="45"
                        y="0"
                        rx="5"
                      ></rect>
                    </svg>
                  </h2>
                </div>
                <div
                  className={item.open ? "fade-in-text block mt-5" : "hidden"}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container" ref={advaTx} id="advaTx">
        <img
          src={skinImg}
          alt="ADVATx Laser"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full fade-in">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="font-apoth mb-7">ADVATx Laser — The Ultimate Skin Perfecting Laser</h1>
            <p className="mb-20">
              {serviceJson["ADVATx Laser — The Ultimate Skin Perfecting Laser"].description}
            </p>
          </div>
          <a
            className="block cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20"
            href="https://toxedbytay.glossgenius.com/"
            target="_blank"
          >
            Book Now
          </a>
          <div className="accordion w-[90%] mx-auto">
            {faq_3.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq3(i)}
              >
                <div className="title">
                  <h2 className="flex justify-between">
                    {item.question}{" "}
                    <svg
                      className={item.open ? "minus" : "plus"}
                      viewBox="0 0 100 100"
                      width="15"
                    >
                      <rect
                        className="horizontal"
                        width="80"
                        height="10"
                        x="10"
                        y="33"
                        rx="5"
                      ></rect>
                      <rect
                        className="vertical"
                        width="10"
                        height="80"
                        x="45"
                        y="0"
                        rx="5"
                      ></rect>
                    </svg>
                  </h2>
                </div>
                <div
                  className={item.open ? "fade-in-text block mt-5" : "hidden"}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0 min-h-[520px] lg:min-h-[600px]" ref={microneedling} id="microneedling">
        <img
          src={toxImg}
          alt="Microneedling"
          className="w-full h-auto lg:h-full max-h-[700px] lg:max-h-[600px] object-cover lg:col-start-2"
        />
        <div className="w-full service-2 fade-in lg:col-start-1 flex flex-col justify-center">
          <div className="services-text-mid w-[90%] mt-10 text-left overflow-visible mx-auto text-white pt-10 pb-6 px-5 z-10">
            <h1 className="font-apoth mb-7">Microneedling</h1>
            <p className="mb-5">
              {serviceJson["Microneedling"].description}
            </p>
            {serviceJson["Microneedling"].types.map((type) => (
              <div key={type.id} className="mb-8">
                <h6 className="font-semibold mb-2">{type.name}</h6>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
          <div className="w-[90%] mx-auto">
            <a
              className="block cursor-pointer py-8 px-10 text-white text-center bg-black text-lg max-w-xs mx-auto w-2/5 mb-8"
              href="https://toxedbytay.glossgenius.com/"
              target="_blank"
            >
              Book Now
            </a>
            <div className="accordion w-full">
              {faq_4.map((item, i) => (
                <div
                  className="item cursor-pointer"
                  key={i}
                  onClick={() => handleFaq4(i)}
                >
                  <div className="title">
                    <h2 className="flex justify-between">
                      {item.question}{" "}
                      <svg
                        className={item.open ? "minus" : "plus"}
                        viewBox="0 0 100 100"
                        width="15"
                      >
                        <rect
                          className="horizontal"
                          width="80"
                          height="10"
                          x="10"
                          y="33"
                          rx="5"
                        ></rect>
                        <rect
                          className="vertical"
                          width="10"
                          height="80"
                          x="45"
                          y="0"
                          rx="5"
                        ></rect>
                      </svg>
                    </h2>
                  </div>
                  <div
                    className={item.open ? "fade-in-text block mt-5" : "hidden"}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="service-container lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0 min-h-[520px] lg:min-h-[600px]" ref={acne} id="acne">
        <img
          src={skinImg}
          alt="Acne & Acne Scar Treatments"
          className="w-full h-auto lg:h-full max-h-[700px] lg:max-h-[600px] object-cover lg:col-start-2"
        />
        <div className="w-full fade-in lg:col-start-1 flex flex-col justify-center">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-6 px-5 z-10">
            <h1 className="font-apoth mb-7">Acne & Acne Scar Treatments</h1>
            <p className="mb-5">
              {serviceJson["Acne & Acne Scar Treatments"].description}
            </p>
            {serviceJson["Acne & Acne Scar Treatments"].types.map((type) => (
              <div key={type.id} className="mb-8">
                <h6 className="font-semibold mb-2">{type.name}</h6>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
          <div className="w-[90%] mx-auto">
            <a
              className="block cursor-pointer py-8 px-10 text-white text-center bg-black text-lg max-w-xs mx-auto w-2/5 mb-8"
              href="https://toxedbytay.glossgenius.com/"
              target="_blank"
            >
              Book Now
            </a>
            <div className="accordion w-full">
              {faq_5.map((item, i) => (
                <div
                  className="item cursor-pointer"
                  key={i}
                  onClick={() => handleFaq5(i)}
                >
                  <div className="title">
                    <h2 className="flex justify-between">
                      {item.question}{" "}
                      <svg
                        className={item.open ? "minus" : "plus"}
                        viewBox="0 0 100 100"
                        width="15"
                      >
                        <rect
                          className="horizontal"
                          width="80"
                          height="10"
                          x="10"
                          y="33"
                          rx="5"
                        ></rect>
                        <rect
                          className="vertical"
                          width="10"
                          height="80"
                          x="45"
                          y="0"
                          rx="5"
                        ></rect>
                      </svg>
                    </h2>
                  </div>
                  <div
                    className={item.open ? "fade-in-text block mt-5" : "hidden"}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="service-container lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0 min-h-[520px] lg:min-h-[600px]" ref={hair} id="hair">
        <img
          src={skinImg}
          alt="Hair Restoration"
          className="w-full h-auto lg:h-full max-h-[700px] lg:max-h-[600px] object-cover lg:col-start-2"
        />
        <div className="w-full service-2 fade-in lg:col-start-1 flex flex-col justify-center">
          <div className="services-text-mid w-[90%] mt-10 text-left overflow-visible mx-auto text-white pt-10 pb-6 px-5 z-10">
            <h1 className="font-apoth mb-7">Hair Restoration at RESTORE by TXT</h1>
            <p className="mb-5">
              {serviceJson["Hair Restoration at RESTORE by TXT"].description}
            </p>
            {serviceJson["Hair Restoration at RESTORE by TXT"].types.map((type) => (
              <div key={type.id} className="mb-8">
                <h6 className="font-semibold mb-2">{type.name}</h6>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
          <div className="w-[90%] mx-auto">
            <a
              className="block cursor-pointer py-8 px-10 text-white text-center bg-black text-lg max-w-xs mx-auto w-2/5 mb-8"
              href="https://toxedbytay.glossgenius.com/"
              target="_blank"
            >
              Book Now
            </a>
            <div className="accordion w-full">
              {faq_6.map((item, i) => (
                <div
                  className="item cursor-pointer"
                  key={i}
                  onClick={() => handleFaq6(i)}
                >
                  <div className="title">
                    <h2 className="flex justify-between">
                      {item.question}{" "}
                      <svg
                        className={item.open ? "minus" : "plus"}
                        viewBox="0 0 100 100"
                        width="15"
                      >
                        <rect
                          className="horizontal"
                          width="80"
                          height="10"
                          x="10"
                          y="33"
                          rx="5"
                        ></rect>
                        <rect
                          className="vertical"
                          width="10"
                          height="80"
                          x="45"
                          y="0"
                          rx="5"
                        ></rect>
                      </svg>
                    </h2>
                  </div>
                  <div
                    className={item.open ? "fade-in-text block mt-5" : "hidden"}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
