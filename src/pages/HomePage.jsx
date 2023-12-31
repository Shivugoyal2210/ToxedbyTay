import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  (function (w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function () {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = "module";
    sm.src = h + s + ".mjs" + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + ".js" + v;
    f.parentNode.insertBefore(sn, f);
  })(
    window,
    document,
    "script",
    "https://assets.flodesk.com",
    "/universal",
    "fd"
  );
  window.fd("form", {
    formId: "650b4ab50de6ead05a55039e",
  });
  const location = useLocation();
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((element) => element.classList.remove("show"));
  }, [location]);
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
};

export default HomePage;
