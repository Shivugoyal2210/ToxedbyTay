import React, { useState, useEffect } from "react";
import { skinImg, toxImg, fillerImg } from "../assets/images";
import serviceJson from "../assets/images/Services/serviceData.json";
import { ListItem } from "@mui/material";
import { useRef } from "react";

const ServicesContent = () => {
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
  const faq1 = serviceJson["Tox & Neuromodulators"].FAQs;
  const faq2 = serviceJson["Fillers"].FAQs;
  const faq3 = serviceJson["Skin Tightening"].FAQs;
  faq1.forEach((item) => (item.open = false));
  faq2.forEach((item) => (item.open = false));
  faq3.forEach((item) => (item.open = false));
  const [faq_1, setfaq_1] = useState(faq1);
  const [faq_2, setfaq_2] = useState(faq2);
  const [faq_3, setfaq_3] = useState(faq3);

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

  const neuro = useRef(null);
  const fillers = useRef(null);
  const tightening = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="services-nav w-screen min-h-[120px]">
        <div className="hidden lg:flex justify-center content-center py-10  gap-10 mb-8 ">
          <div
            className="nav-item text-white text-lg cursor-pointer"
            onClick={() => scrollToSection(neuro)}
          >
            Tox & Neuromodulators
          </div>{" "}
          <span className="text-white">|</span>
          <div
            className="nav-item text-white text-lg  cursor-pointer"
            onClick={() => scrollToSection(fillers)}
          >
            Fillers
          </div>
          <span className="text-white">|</span>
          <div
            className="nav-item text-white text-lg cursor-pointer"
            onClick={() => scrollToSection(tightening)}
          >
            Biostimulator
          </div>
          <span className="text-white">|</span>
          <div
            className="nav-item text-white text-lg cursor-pointer"
            onClick={() => scrollToSection(tightening)}
          >
            ADVATx
          </div>
        </div>
      </div>
      <div className="service-container mt-5" ref={neuro} id="neuro">
        <img
          src={toxImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full mt-10 fade-in">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5">
            <h1 className="font-apoth mb-7">NEUROMODULATORS</h1>
            <p className="mb-5">
              Taylor Northcott Aesthetics has a variety of options of
              Neuromodulators, AKA Tox. At your appointment Taylor will assess
              your needs and determine the best Tox for you.
            </p>
            <p className="mb-20">
              *Tox takes a full 14 days for results. For first time clients
              touch ups are complimentary within treatment area between days
              14-21 after your initial treatment.
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
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full service-2 fade-in">
          <div className="services-text-mid w-[90%] mt-10 text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="font-apoth mb-7">FILLERS</h1>
            <p className="mb-5">
              Taylor Northcott Aesthetics has a variety of options for Dermal
              Fillers including Hyaluronic Acid and Biostimulator products. At
              your appointment, Taylor will assess your needs and determine the
              best filler option for you. Common treatment areas include cheeks,
              chin, Jaw line, and lips.
            </p>
            <p className="mb-20">
              Lips include a dental block, reusable icepack, and Image Restoring
              Lip Enhancer for post-treatment.
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
      <div className="service-container" ref={tightening} id="tightening">
        <img
          src={skinImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full fade-in">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="font-apoth mb-7">SKIN TIGHTENING</h1>
            <p className="mb-5">
              Taylor Northcott Aesthetics provides a variety of skin-tightening
              options. Common areas for skin tightening include: face/neck,
              chest, and hands.
            </p>
            <h6>Biostimulator</h6>
            <p className="mb-12">
              A Biostimulator is a more invasive form of skin tightening. The
              collagen-producing stimulator is injected into your skin to
              encourage your body to produce new strong collagen! Hyperdilute
              RADIESSE promotes improved skin texture, tone, restores minor
              volume, and drastically softens fine lines and wrinkles.
            </p>
            <h6>ADVATx</h6>
            <p className="mb-12">
              Worldwide, millions of people are bothered by the appearance of
              vascular lesions, rosacea, acne, wrinkles and scars. These
              conditions are often associated with a negative impact on self
              image and may result in psychological negativity. Laser therapy
              has proven to be efficient in reducing and resolving many of these
              unwanted conditions, thereby improving overall appearance and
              reinstating self confidence. <br></br>
              The combination of high powered yellow and infrared laser energy
              come together to improve skin tone, texture and overall skin
              health by targeting the vascular components of uneven skin tone,
              sun damage and unwanted pigmentation while simultaneously reducing
              wrinkles, limiting oil production and shrinking pore size. We
              promise you will leave the spa with youthful, glowing skin!
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
    </div>
  );
};

export default ServicesContent;
