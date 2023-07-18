import React, { useState } from 'react';
import { skinImg, toxImg, fillerImg } from '../assets/images';
import serviceJson from '../assets/images/Services/serviceData.json';
import { ListItem } from '@mui/material';
import { useRef } from 'react';

const ServicesContent = () => {
  const faq1 = serviceJson['Tox & Neuromodulators'].FAQs;
  const faq2 = serviceJson['Fillers'].FAQs;
  const faq3 = serviceJson['Skin Tightening'].FAQs;
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
      behavior: 'smooth',
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
          </div>{' '}
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
            Microneedling
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
            PRP/PRF
          </div>
        </div>
      </div>
      <div className="service-container mt-5" ref={neuro}>
        <img
          src={toxImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full mt-10">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5">
            <h1 className="tracking-widest mb-7">NEUROMODULATORS</h1>
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
          <div className="cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20">
            Book Now
          </div>
          <div className="accordion w-[90%] mx-auto">
            {faq_1.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq1(i)}
              >
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div
                  className={
                    item.open ? 'fade-in-text content block mt-5' : 'hidden'
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container" ref={fillers}>
        <img
          src={fillerImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full service-2">
          <div className="services-text-mid w-[90%] mt-10 text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="tracking-widest mb-7">FILLERS</h1>
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
          <div className="cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20">
            Book Now
          </div>
          <div className="accordion w-[90%] mx-auto">
            {faq_2.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq2(i)}
              >
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div
                  className={item.open ? 'fade-in-text block mt-5' : 'hidden'}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container" ref={tightening}>
        <img
          src={skinImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full">
          <div className="services-text w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
            <h1 className="tracking-widest mb-7">SKIN TIGHTENING</h1>
            <p className="mb-5">
              Taylor Northcott Aesthetics provides a variety of skin-tightening
              options. Common areas for skin tightening include: face/neck,
              chest, and hands.
            </p>
            <h6>Microneedling</h6>
            <p className="mb-12">
              Microneedling is a light resurfacing treatment that aids in the
              reduction of fine lines, minor scars, improves skin
              quality/texture as well as promotes skin tightening. The needles
              stimulate collagen production by causing minor injury to the skin.
              This minor injury stimulates the body’s collagen-producing cells
              to create new/strong collagen. Microneedling can be performed as
              an individual treatment; however, works best in a package of 3.
            </p>
            <h6>Biostimulator</h6>
            <p className="mb-12">
              A Biostimulator is a more invasive form of skin tightening. The
              collagen-producing stimulator is injected into your skin to
              encourage your body to produce new strong collagen! Hyperdilute
              RADIESSE promotes improved skin texture, tone, restores minor
              volume, and drastically softens fine lines and wrinkles.
            </p>
            <h6>PRP/PRF add-on</h6>
            <p className="mb-12">
              PRP/PRF is collected from a blood draw at the beginning of your
              appointment. The blood is then spun down to collect the serum or
              PRP/PRF. The serum contains grown factors which when injected or
              needled into the skin stimulates your body to produce its own
              natural collagen!
            </p>
          </div>
          <div className="cursor-pointer py-8 px-10 -mt-12 text-white text-center bg-black text-lgmax-w-xs mx-auto w-2/5 mb-20">
            Book Now
          </div>
          <div className="accordion w-[90%] mx-auto">
            {faq_3.map((item, i) => (
              <div
                className="item cursor-pointer"
                key={i}
                onClick={() => handleFaq3(i)}
              >
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div
                  className={item.open ? 'fade-in-text block mt-5' : 'hidden'}
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
