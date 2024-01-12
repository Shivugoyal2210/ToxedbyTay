import React from "react";
import {
  emailPromo,
  hashLogo,
  logoWhite,
  footer1,
  footer2,
} from "../assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavLink, redirect, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-screen h-auto">
        <div
          className="flex flex-col gap-9 align-center footer-email text-center py-40 px-5"
          style={{ backgroundImage: `url(${emailPromo})` }}
        >
          <div className="cursive text-8xl fade-in">Beautify your inbox.</div>
          <div className="text-lg fade-in">
            Enter your email address below to receive exclusive{" "}
            <span className="underline fade-in">#toxedbytay</span> discounts and
            more!
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="py-7 px-10 mr-5 text-lg mb-5 fade-in"
            />
            <input
              type="button"
              value="Sign up"
              className="bg-black text-white py-7 px-10 fade-in"
            />
          </div>
          <div className="text-sm">We respect your privacy.</div>
        </div>
      </div>
      <div className="w-screen h-auto bg-neutral-800">
        <div className="w-[90%] mx-auto pt-10 footer-pics mb-8">
          <div className="flex justify-between">
            <img
              src={hashLogo}
              alt="logo"
              className="h-auto w-[20%] min-w-[200px]"
            />
            <p className="text-white text-right ">
              Follow <span className="underline">#toxedbytay</span> on
              Instagram.
            </p>
          </div>
        </div>
        <div className="footer-small footer-nav flex flex-col gap-3 ">
          <img src={logoWhite} alt="logo" className="w-[60%] h-auto mx-auto" />
          <NavLink
            to="/"
            className="text-white underline mx-auto"
            reloadDocument
          >
            Home
          </NavLink>
          <NavLink
            className="text-white underline mx-auto"
            href="https://skinbetter.pro/toxedbytay"
            target="_blank"
          >
            Shop
          </NavLink>
          <NavLink
            to="/services"
            className="text-white underline mx-auto"
            reloadDocument
            passHref
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            reloadDocument
            className="text-white underline mx-auto"
            passHref
          >
            Contact
          </NavLink>
          <NavLink
            to="/contact#faq"
            reloadDocument
            className="text-white underline mx-auto"
            passHref
          >
            FAQ
          </NavLink>
          <input
            type="button"
            value="Book Now"
            className="bg-neutral-300 text-black py-4 text-lg px-12 mx-auto"
          />
          <p className="mx-auto">
            <InstagramIcon color="action" />
            <MailOutlineIcon />
          </p>
          <a href="#" className="text-white underline mx-auto">
            4117 N. 17th St, Phoenix, AZ 85016
          </a>
          <a href="#" className="text-white underline mx-auto">
            (480)-648-9401
          </a>
        </div>
        <div className="footer-big hidden">
          <div className="w-[80%] max-w-6xl flex justify-between mx-auto py-20">
            <div className="flex flex-col gap-5 justify-center">
              <NavLink
                to="/"
                className="text-white underline mx-auto text-lg hover:cursor-pointer"
                reloadDocument
              >
                Home
              </NavLink>
              <a
                className="text-white underline mx-auto"
                href="https://skinbetter.pro/toxedbytay"
                target="_blank"
              >
                Shop
              </a>
              <NavLink
                to="/services"
                className="text-white underline mx-auto"
                passHref
                reloadDocument
              >
                Services
              </NavLink>
              <a href="/contact" className="text-white underline mx-auto">
                Contact
              </a>
              <a href="/contact#faq" className="text-white underline mx-auto">
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <img
                src={logoWhite}
                alt="logo"
                className="w-[60%] h-auto mx-auto"
              />
              <a
                href="#"
                className="text-white underline mx-auto justify-center"
              >
                4117 N. 17th St, Phoenix, AZ 85016
              </a>
              <a href="#" className="text-white underline mx-auto">
                (480)-648-9401
              </a>
            </div>
            <div className="flex flex-col gap-10 justify-center">
              <input
                type="button"
                value="Book Now"
                className="bg-neutral-300 text-black py-7 text-lg px-14 mx-auto"
              />
              <p className="mx-auto">
                <InstagramIcon style={{ color: "white", marginRight: 5 }} />
                <MailOutlineIcon style={{ color: "white" }} />
              </p>
            </div>
          </div>
        </div>
        <p className="text-white mx-auto text-xs">
          &copy;2022 Copyright Taylor Northcott Aesthetics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
