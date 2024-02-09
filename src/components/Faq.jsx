import React from "react";
import serviceJson from "../assets/images/Services/serviceData.json";
import { useState } from "react";
const Faq = () => {
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
  return (
    <div className="my-10" id="faq">
      <p className="cursive text-7xl text-center mb-10 ">
        Frequently Asked Questions
      </p>
      <h1 className="font-apoth mb-7 w-[80%] mx-auto">NEUROMODULATORS</h1>
      <div className="accordion w-[80%] mx-auto text-lg">
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
                {/* <span>{item.open ? "-" : "+"}</span> */}
              </h2>
            </div>
            <div
              className={
                item.open ? "fade-in-text content block mt-4" : "hidden"
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <h1 className="font-apoth tracking-widest mb-7 w-[80%] mx-auto mt-[5rem]">
        FILLERS
      </h1>
      <div className="accordion w-[80%] mx-auto text-lg">
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
            <div className={item.open ? "fade-in-text block mt-5" : "hidden"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <h1 className="font-apoth tracking-widest mb-7 w-[80%] mx-auto mt-[5rem]">
        SKIN TIGHTENING
      </h1>
      <div className="accordion w-[80%] mx-auto text-lg">
        {faq_3.map((item, i) => (
          <div
            className="item cursor-pointer"
            key={i}
            onClick={() => handleFaq3(i)}
          >
            <div className="title">
              <h2 className="flex justify-between">
                {item.question}
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
            <div className={item.open ? "fade-in-text block mt-5" : "hidden"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
