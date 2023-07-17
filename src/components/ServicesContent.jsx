import React from 'react';
import { skinImg, toxImg, fillerImg } from '../assets/images';
import serviceJson from '../assets/images/Services/serviceData.json';
const ServicesContent = () => {
  const faq1 = serviceJson['Tox & Neuromodulators'].FAQs;
  const faq2 = serviceJson['Fillers'].FAQs;
  const faq3 = serviceJson['Skin Tightening'].FAQs;
  return (
    <div>
      <div className="services-nav flex w-screen justify-center content-center py-10 mb-8">
        Tox & Neuromodulators | Fillers | Microneedling | Biostimulator |
        PRP/PRF
      </div>
      <div className="service-container">
        <img
          src={toxImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full">
          <div className="services-nav w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
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
            {faq1.map((item, i) => (
              <div className="item">
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div className="content">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container">
        <img
          src={fillerImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full service-2">
          <div className="services-nav w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
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
            {faq2.map((item, i) => (
              <div className="item">
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div className="content">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-container">
        <img
          src={skinImg}
          alt="fillerImg"
          className="w-full aspect-video object-cover"
        />
        <div className="w-full">
          <div className="services-nav w-[90%] text-left overflow-visible mx-auto text-white pt-10 pb-20 px-5 z-10">
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
            {faq3.map((item, i) => (
              <div className="item">
                <div className="title">
                  <h2>
                    {item.question} <span>+</span>
                  </h2>
                </div>
                <div className="content">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
