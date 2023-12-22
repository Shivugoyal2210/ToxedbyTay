import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";
const ContactPage = () => {
  const location = useLocation();
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((element) => element.classList.remove("show"));
  }, [location]);
  return (
    <>
      <ContactForm />
    </>
  );
};

export default ContactPage;
